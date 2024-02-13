import React from "react";
import { Button, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { actionEditProductSyn } from "../redux/actions/actionsProduct";
import { useDispatch } from "react-redux";

const EditProduct = ({ datos, handleClose }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formValue, handleInputChange, reset] = useForm({
    name: datos.name,
    price: datos.price,
    des: datos.description,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: datos.id,
      name: formValue.name,
      price: formValue.price,
      description: formValue.des,
    };
    dispatch(actionEditProductSyn(obj));
    handleClose();
  };
  return (
    <div className="divAdd">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextname">
          <Form.Label column sm="2">
            Nombre Producto
          </Form.Label>

          <Form.Control
            placeholder="user_name@name.com"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            price
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="price"
            name="price"
            value={formValue.price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Description
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="description"
            name="des"
            value={formValue.des}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit">Guardar Modificado</Button>
      </Form>
    </div>
  );
};

export default EditProduct;
