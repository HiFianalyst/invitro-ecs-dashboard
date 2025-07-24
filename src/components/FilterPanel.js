// components/FilterPanel.js
import React from 'react';

const FilterPanel = ({
  searchQuery,
  setSearchQuery,
  filters,
  handleFilterChange,
  uniqueYears,
  uniqueCellModels,
  uniqueChemicals,
  uniqueECSTechnologies,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 sr-only">Search</label>
        <input
          type="text"
          id="search"
          placeholder="Search by title, author, chemical, etc."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700">Year</label>
        <select
          id="year-filter"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.year}
          onChange={(e) => handleFilterChange('year', e.target.value)}
        >
          <option value="">All Years</option>
          {uniqueYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cell-model-filter" className="block text-sm font-medium text-gray-700">Cell Model</label>
        <select
          id="cell-model-filter"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.cellModel}
          onChange={(e) => handleFilterChange('cellModel', e.target.value)}
        >
          <option value="">All Cell Models</option>
          {uniqueCellModels.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="chemical-filter" className="block text-sm font-medium text-gray-700">Chemical</label>
        <select
          id="chemical-filter"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.chemical}
          onChange={(e) => handleFilterChange('chemical', e.target.value)}
        >
          <option value="">All Chemicals</option>
          {uniqueChemicals.map(chemical => (
            <option key={chemical} value={chemical}>{chemical}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ecs-technology-filter" className="block text-sm font-medium text-gray-700">Sequencing Method</label>
        <select
          id="ecs-technology-filter"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.ecsTechnology}
          onChange={(e) => handleFilterChange('ecsTechnology', e.target.value)}
        >
          <option value="">All Methods</option>
          {uniqueECSTechnologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
