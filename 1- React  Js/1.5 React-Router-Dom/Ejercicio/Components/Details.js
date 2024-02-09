import React from "react";

const Details = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h1>Titulo: {movie.Title}</h1>
      <h3>
        Tipo: {movie.Type} / Año: {movie.Year} / Valoración: {movie.Value}
      </h3>
      <img
        src={movie?.Carrusel}
        alt=""
        style={{
          width: 950,
        }}
      />
      <p>{movie?.Description}</p>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="950"
        height="450"
        src={movie.Trailer}
      ></iframe>
    </div>
  );
};

export default Details;
