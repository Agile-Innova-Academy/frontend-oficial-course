import React, { useEffect, useState } from "react";
import { DeleteData, GetData } from "../Peticiones/actions";
import { url } from "../helpers/url";
import { Alert, Button, Card, Modal } from "antd";
import Details from "../Components/Details";
import { ContDivList } from "../Styles/styles";
import { Link } from "react-router-dom";
const List = () => {
  const [data, setData] = useState();
  const [movieActual, setMovieActual] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activate, setActivate] = useState(false);

  const showModal = (movie) => {
    setIsModalOpen(true);
    setMovieActual(movie);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function Cargar() {
      const resp = await GetData(url);
      setData(resp);
    }
    Cargar();
  }, [activate]);

  const deleteMovie = async (peli) => {
    setMovieActual(peli);
    const resp = await DeleteData(`${url}/${peli?.id}`);
    console.log(resp, "eliminando");
    if (resp === 200) {
      setActivate(true);
      setIsModalOpen(true);
    }
  };
  return (
    <ContDivList>
      {data?.map((d) => (
        <Card
          key={d?.id}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={d?.Poster} />}
        >
          <h1>{d?.Title}</h1>
          <p>{d?.Description}</p>
          <Button type="primary" onClick={() => showModal(d)}>
            Ver Más
          </Button>
          <Button type="primary" ghost>
            <Link to={`/edit/${d?.id}`}>Editar</Link>
          </Button>
          <Button type="primary" danger onClick={() => deleteMovie(d)}>
            Eliminar
          </Button>
        </Card>
      ))}
      <Modal
        title={movieActual?.Title}
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
      >
        {activate ? (
          <Alert
            message="Se elimino exitosamente"
            description="Ya no existe se eliminó"
            type="error"
            showIcon
            action={
              <Button size="small" type="text">
                X
              </Button>
            }
            closable
          />
        ) : (
          <Details movie={movieActual} />
        )}
      </Modal>
    </ContDivList>
  );
};

export default List;
