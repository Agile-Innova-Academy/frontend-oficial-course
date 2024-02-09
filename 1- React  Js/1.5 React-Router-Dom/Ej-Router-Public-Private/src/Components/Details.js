import React from "react";

const Details = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h1>Titulo: {movie.Title}</h1>
      <h3>
        Tipo: {movie.Type} / Año: {movie.Year} / Valoración: {movie.Value}
      </h3>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="950"
        height="400"
        src={movie.Trailer}
      ></iframe>
      <p>{movie?.Description}</p>
      <img
        src={movie?.Carrusel}
        alt=""
        style={{
          width: 950,
        }}
      />
    </div>
  );
};

export default Details;
