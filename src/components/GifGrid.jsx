import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const {images, isloading} = useFetchGifs(category);

  return (

    <>
      <h3>{category}</h3>
      {
      isloading && <h2>Cargando</h2>
      }
      <div className="card-grid">
        {images.map( (image) => (
            <GifGridItem 
            key={image.id}
            title={image.title}
            url={image.url}
             />
        )

        )}
      </div>
    </>
  );
}
