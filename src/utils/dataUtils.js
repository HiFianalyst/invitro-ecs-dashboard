// utils/dataUtils.js

// Function to get unique values for dropdown filters
export const getUniqueValues = (data, key) => {
  const values = data.map(item => item[key]).filter(Boolean); // Filter out null/undefined
  return [...new Set(values)];
};

// Function to get the most frequent item
export const getMostFrequent = (data, key) => {
  if (!data || data.length === 0) return 'N/A';
  const counts = {};
  data.forEach(item => {
    const value = item[key];
    if (value) {
      counts[value] = (counts[value] || 0) + 1;
    }
  });

  let mostFrequent = 'N/A';
  let maxCount = 0;

  for (const value in counts) {
    if (counts[value] > maxCount) {
      maxCount = counts[value];
      mostFrequent = value;
    }
  }
  return mostFrequent;
};
