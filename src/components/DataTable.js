// components/DataTable.js
import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'; // Example icons

const DataTable = ({ data, onRowClick }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' or 'desc'

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue = String(a[sortColumn] || '').toLowerCase();
    const bValue = String(b[sortColumn] || '').toLowerCase();

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getSortIcon = (column) => {
    if (sortColumn === column) {
      return sortDirection === 'asc' ? <ChevronUpIcon className="w-4 h-4 inline-block ml-1" /> : <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />;
    }
    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
      <div className="overflow-x-auto hidden md:block"> {/* Hide on small screens */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['PMID', 'Year', 'Author', 'Title', 'Cell model', 'Chemical', 'Treatment duration', 'ECS technology'].map(column => (
                <th
                  key={column}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(column === 'ECS technology' ? 'ECS technology' : column === 'Cell model' ? 'Cell model' : column)} // Adjust for actual JSON keys
                >
                  {column} {getSortIcon(column === 'ECS technology' ? 'ECS technology' : column === 'Cell model' ? 'Cell model' : column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((item) => (
              <tr
                key={item.PMID || Math.random()} // Fallback key if PMID is missing
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onRowClick(item)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.PMID}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Author}</td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item.Title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item['Cell model']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Chemical}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item['Treatment duration']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item['ECS technology']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:hidden"> {/* Show on small screens */}
        {sortedData.map((item) => (
          <div
            key={item.PMID || Math.random()}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md"
            onClick={() => onRowClick(item)}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{item.Title}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Author:</strong> {item.Author}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Year:</strong> {item.Year}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Cell Model:</strong> {item['Cell model']}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Chemical:</strong> {item.Chemical}</p>
            <p className="text-sm text-gray-600"><strong>Method:</strong> {item['ECS technology']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
