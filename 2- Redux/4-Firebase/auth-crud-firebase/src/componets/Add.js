import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddproductAsyn } from "../redux/actions/actionsProduct";
import { FileUpload } from "../helpers/FileUpload";

const Add = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    price: "",
    des: "",
    foto: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: Math.floor(Math.random() * 200),
      name: formValue.name,
      price: formValue.price,
      description: formValue.des,
      foto: formValue.foto,
    };
    dispatch(actionAddproductAsyn(obj));
    reset();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.foto = resp))
      .catch((err) => console.warn(err));
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
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Imagen
          </Form.Label>

          <Form.Control
            type="file"
            name="foto"
            accept="*/jpg"
            placeholder="Ingrese Foto.jpg"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default Add;
