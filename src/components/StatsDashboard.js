import React from 'react';
import ExportButton from './ExportButton'; // Import the ExportButton component

// Now StatsDashboard also receives 'filteredData' as a prop
const StatsDashboard = ({ stats, filteredData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6"> {/* Added mb-6 for spacing */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Statistics</h2>
        {/* Render the ExportButton here, passing it the filteredData */}
        <ExportButton data={filteredData} fileName="invitro_ecs_dashboard_export" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Total Entries</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalEntries}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Unique Seq. Methods</h3>
          <p className="text-3xl font-bold text-green-600">{stats.uniqueSequencingMethods}</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Most Studied Chemical</h3>
          <p className="text-xl font-bold text-yellow-600 truncate">{stats.mostStudiedChemical}</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800">Most Used Cell Model</h3>
          <p className="text-xl font-bold text-purple-600 truncate">{stats.mostFrequentlyUsedCellModel}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
