import React, {useState} from "react";

const SelecionaElementos = ({ value }) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };
  return { selectedValue, handleSelect };
};

export default SelecionaElementos;
