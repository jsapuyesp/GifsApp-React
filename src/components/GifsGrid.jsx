import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifsGrid = (props) => {
  const { images, isLoading } = useFetchGifs(props.category);
  const title =
    props.category.charAt(0).toUpperCase() + props.category.slice(1);

  return (
    <>
      <h3>{title}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifsGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
