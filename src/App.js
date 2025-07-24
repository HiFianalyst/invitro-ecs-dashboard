// App.js
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import StatsDashboard from './components/StatsDashboard';
import FilterPanel from './components/FilterPanel';
import DataTable from './components/DataTable';
import PaperDetailsModal from './components/PaperDetailsModal';
import { processData, getUniqueValues, getMostFrequent } from './utils/dataUtils';
import initialData from './data/invitro_ecs_cleaned.json'; // Assuming your JSON is here

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    year: '',
    cellModel: '',
    chemical: '',
    ecsTechnology: '', // Renamed from 'Sequencing Method Used' to match JSON key
  });
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    setData(initialData);
    setFilteredData(initialData);
  }, []);

  // Memoize filtered data for performance
  useEffect(() => {
    let currentFilteredData = data.filter(item => {
      // Search functionality
      const matchesSearch = Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Filter functionality
      const matchesFilters =
        (filters.year === '' || String(item.Year) === filters.year) &&
        (filters.cellModel === '' || item['Cell model']?.toLowerCase().includes(filters.cellModel.toLowerCase())) &&
        (filters.chemical === '' || item.Chemical?.toLowerCase().includes(filters.chemical.toLowerCase())) &&
        (filters.ecsTechnology === '' || item['ECS technology']?.toLowerCase().includes(filters.ecsTechnology.toLowerCase()));

      return matchesSearch && matchesFilters;
    });
    setFilteredData(currentFilteredData);
  }, [searchQuery, filters, data]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  const handleRowClick = (paper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPaper(null);
  };

  // Prepare data for filters and stats (memoized for efficiency)
  const uniqueYears = useMemo(() => getUniqueValues(data, 'Year').sort((a, b) => b - a), [data]);
  const uniqueCellModels = useMemo(() => getUniqueValues(data, 'Cell model').sort(), [data]);
  const uniqueChemicals = useMemo(() => getUniqueValues(data, 'Chemical').sort(), [data]);
  const uniqueECSTechnologies = useMemo(() => getUniqueValues(data, 'ECS technology').sort(), [data]);


  const stats = useMemo(() => ({
    totalEntries: filteredData.length,
    uniqueSequencingMethods: getUniqueValues(filteredData, 'ECS technology').length,
    mostStudiedChemical: getMostFrequent(filteredData, 'Chemical'),
    mostFrequentlyUsedCellModel: getMostFrequent(filteredData, 'Cell model'),
  }), [filteredData]);


  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <Header />
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <StatsDashboard stats={stats} filteredData={filteredData} />
        <FilterPanel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filters={filters}
          handleFilterChange={handleFilterChange}
          uniqueYears={uniqueYears}
          uniqueCellModels={uniqueCellModels}
          uniqueChemicals={uniqueChemicals}
          uniqueECSTechnologies={uniqueECSTechnologies}
        />
        <DataTable data={filteredData} onRowClick={handleRowClick} />
      </div>
      {isModalOpen && <PaperDetailsModal paper={selectedPaper} onClose={closeModal} />}
    </div>
  );
}

export default App;
