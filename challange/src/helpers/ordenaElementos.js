import React from "react";

const ordenaElementos = (filteredData, selectedOrder) => {
    let sortedData;
    if (selectedOrder === 'a') {
      sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedData = filteredData.sort((a, b) => b.title.localeCompare(a.title));
    }
  return sortedData;
};
  
export { ordenaElementos };

