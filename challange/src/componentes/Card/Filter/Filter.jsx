import {React, useState, useEffect} from "react";
import { Conteiner } from "./styles";
import estados from "./estados";

function Filter({ onFilter }) {
  const [selectedState, setSelectedState] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedAge, setSelectedAge] = useState("all");

  const handleSelectState = (event) => {
    const selectedValue = event.target.value;
    setSelectedState(selectedValue);
    onFilter(selectedValue, selectedState);
  };

  const handleSelectGenre = (event) => {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);
    onFilter(selectedValue, selectedGenre);
  };

  const handleSelectAge= (event) => {
    const selectedValue = event.target.value;
    setSelectedAge(selectedValue);
    onFilter(selectedValue, selectedAge);
  };

  useEffect(() => {
    onFilter(selectedState, selectedGenre, selectedAge);
  }, [selectedState, selectedGenre, selectedAge]);

  const options = estados.map((item) => (
    <option key={item.id} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <Conteiner>
      <div className="align">
        <form>
          <div>
            <h3 className="title">Por Estado</h3>
            <label htmlFor="estado">
              <select name="estado" id="estado" onChange={handleSelectState}>
                {options}
              </select>
            </label>
          </div>

          <div>
            <h3 className="title">Por Genero</h3>
            <label htmlFor="genre">
              <select name="genre" id="genre" onChange={handleSelectGenre}>
                <option value="all">Todos</option>
                <option value="male">Masculino</option>
                <option value="female">Ferminino</option>
              </select>
            </label>
          </div>

          <div>
            <h3 className="title">Por Idade</h3>
            <select name="age" id="age" onChange={handleSelectAge}>
              <option value="all">Todos</option>
              <option value="18">18-30</option>
              <option value="30">30-50</option>
              <option value="50">50+</option>
            </select>
          </div>
        </form>
      </div>
    </Conteiner>
  );
}

export default Filter;
