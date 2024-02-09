import React, { useEffect, useState } from "react";
import { DeleteData, GetData } from "../Peticiones/actions";
import { url } from "../helpers/url";
import { Alert, Button, Card, Modal } from "antd";
import Details from "../Components/Details";
import { DivListCard } from "../Styles/Styled";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const List = () => {
  const [data, setData] = useState();
  const [movieActual, setMovieActual] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [activateAlert, setActiveAlert] = useState(false);

  const showModal = (movie) => {
    setIsModalOpen(true);
    setMovieActual(movie);
  };
  const showModalDelete = (movie) => {
    setIsModalOpenDelete(true);
    setMovieActual(movie);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpenDelete(false);
  };

  const handleDelete = async () => {
    const response = await DeleteData(`${url}/${movieActual?.id}`);
    if (response === 200 || response === 201) {
      setActiveAlert(true);
      setTimeout(() => {
        handleCancel();
      }, 2000);
    }
  };

  useEffect(() => {
    async function Cargar() {
      const resp = await GetData(url);
      setData(resp);
    }
    Cargar();
  }, [activateAlert]);

  return (
    <DivListCard>
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
          <Button
            type="primary"
            styled={{ margin: "10px" }}
            onClick={() => showModal(d)}
          >
            <EyeOutlined />
          </Button>
          <Button type="primary" styled={{ margin: "10px" }}>
            <Link to={`/edit/${d?.id}`}>
              <EditOutlined />
            </Link>
          </Button>
          <Button
            type="primary"
            styled={{ margin: "10px" }}
            onClick={() => showModalDelete(d)}
          >
            <DeleteOutlined />
          </Button>
        </Card>
      ))}
      <Modal
        title={movieActual?.Title}
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
      >
        <Details movie={movieActual} />
      </Modal>
      <Modal
        title={movieActual?.Title}
        open={isModalOpenDelete}
        onCancel={handleCancel}
        width={1000}
      >
        <h1>¿Estás seguro que deseas eliminar la Película?</h1>
        <Button type="primary" onClick={() => handleDelete()}>
          Si
        </Button>
        {activateAlert && (
          <Alert
            message="Se Eliminó Exitosamente"
            description="La Película Ya no existe.."
            type="warning"
            showIcon
          />
        )}
      </Modal>
    </DivListCard>
  );
};

export default List;
