const TarjetaPelicula = ({url, titulo, descripcion}: any) => {
  return (
    <div className="movie-card">
      <h2 className="movie-title">{titulo}</h2>
      <img className="movie-img" src={url}></img>
      <p className="movie-desc">{descripcion}</p>
    </div>
  );
};
export default TarjetaPelicula;