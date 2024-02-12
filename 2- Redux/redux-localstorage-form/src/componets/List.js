import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteProductSyn } from "../redux/actions/actionsProduct";

const List = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);
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
                <Button>Edit</Button>
                <Button>Ver</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
