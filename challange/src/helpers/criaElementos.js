import React from "react";

export function criaElementos(arquivo, Componente) {
    return arquivo.results.map((item) => {
      return (
          <Componente
            item={item}
          />
      )
    });
  };

