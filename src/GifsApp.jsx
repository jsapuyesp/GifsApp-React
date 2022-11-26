import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifsGrid } from "./components/GifsGrid";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifsApp</h1>

      <AddCategory
        placeholder={"Buscar Gifs"}
        // setCategories={setCategories}
        onNewValue={(event) => onAddCategory(event)}
      />

      <button onClick={onAddCategory}>Agregar</button>

      {categories.map((category) => {
        return <GifsGrid key={category} category={category} />;
      })}
    </>
  );
};
