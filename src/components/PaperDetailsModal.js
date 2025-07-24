// components/PaperDetailsModal.js
import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid'; // Example icon

const PaperDetailsModal = ({ paper, onClose }) => {
  if (!paper) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">{paper.Title}</h2>
        <p className="text-gray-700 mb-2"><strong>Author:</strong> {paper.Author}</p>
        <p className="text-gray-700 mb-2"><strong>Year:</strong> {paper.Year}</p>
        <p className="text-gray-700 mb-2"><strong>PMID:</strong> {paper.PMID}</p>
        <p className="text-gray-700 mb-2"><strong>Cell Model:</strong> {paper['Cell model']}</p>
        <p className="text-gray-700 mb-2"><strong>Chemical:</strong> {paper.Chemical}</p>
        <p className="text-gray-700 mb-2"><strong>Treatment Duration:</strong> {paper['Treatment duration']}</p>
        <p className="text-gray-700 mb-2"><strong>Endpoints:</strong> {paper.Endpoints}</p>
        <p className="text-gray-700 mb-2"><strong>ECS Technology:</strong> {paper['ECS technology']}</p>
        {paper.Coments && <p className="text-gray-700 mb-4"><strong>Comments:</strong> {paper.Coments}</p>}

        {paper.Source && (
          <a
            href={paper.Source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Paper
            <span className="ml-2" aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default PaperDetailsModal;
