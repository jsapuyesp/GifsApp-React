import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifsGrid = (props) => {
  const { images, isLoading } = useFetchGifs(props.category);

  return (
    <>
      <h3>{props.category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
