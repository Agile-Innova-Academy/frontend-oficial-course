import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteProductSyn,
  actionListproductAsyn,
} from "../redux/actions/actionsProduct";
import EditProduct from "./EditProduct";

const List = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);
  console.log(products);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData] = useState();

  const handleClose = () => setShow(false);

  const handleShow = (p) => {
    setSelectData(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, []);

  console.log(products);
  return (
    <div className="divTable">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td style={{ padding: 10 }}>
                <Button onClick={() => dispatch(actionDeleteProductSyn(p.id))}>
                  X
                </Button>
                <Button variant="primary" onClick={() => handleShow(p)}>
                  Edit
                </Button>
                <Button>Ver</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {selectData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {show && selectData !== "undefined" && (
            <EditProduct datos={selectData} handleClose={handleClose} />
          )}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
};

export default List;
