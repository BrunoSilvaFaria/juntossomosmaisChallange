import React from "react";

const filtraElementos = (arquivo, selectedValue, campo) => {
  return arquivo.filter(item => {
    return item.campo && item.campo === selectedValue;
  });
}

export { filtraElementos };
