// components/ExportButton.js
import React from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse'; // Library for CSV handling

const ExportButton = ({ data, filename = 'filtered_data' }) => {
  const handleExport = () => {
    if (!data || data.length === 0) {
      alert('No data to export!');
      return;
    }

    // Define the desired order of columns and their display names
    const headers = [
      { key: 'PMID', title: 'PMID' },
      { key: 'Year', title: 'Year' },
      { key: 'Author', title: 'Author' },
      { key: 'Title', title: 'Title of Paper' },
      { key: 'Source', title: 'Internet Source' },
      { key: 'Cell model', title: 'Cell Model' },
      { key: 'Chemical', title: 'Chemical' },
      { key: 'Treatment duration', title: 'Treatment' },
      { key: 'Endpoints', title: 'Endpoints' },
      { key: 'ECS technology', title: 'Sequencing Method Used' },
      { key: 'Coments', title: 'Comments' },
    ];

    // Map data to match the desired headers
    const csvData = data.map(item => {
      const row = {};
      headers.forEach(header => {
        row[header.title] = item[header.key] || ''; // Use the actual key from your JSON
      });
      return row;
    });

    const csv = Papa.unparse(csvData, {
      header: true,
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${filename}.csv`);
  };

  return (
    <button
      onClick={handleExport}
      className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Export to CSV
    </button>
  );
};

export default ExportButton;
