import { useState } from "react";
import {
  Container,
  FormButton,
  FormInput,
  FormTextarea,
  InputContainer,
} from "./Form.styled";
import { useCreateBikeMutation } from "../../redux/bicycleApi";
import { toast } from "react-toastify";

export const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  const [createBicycle] = useCreateBikeMutation();
  const data = {};

  const handleClear = (e) => {
    setName("");
    setType("");
    setColor("");
    setWheelSize("");
    setPrice("");
    setId("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && name.length >= 5) {
      data.name = name;
    } else {
      return toast.error("Name is required or must be more than 5 symbols");
    }
    if (type !== "" && type.length >= 5) {
      data.type = type;
    } else {
      return toast.error("Type is required or must be more than 5 symbols");
    }
    if (color !== "") {
      data.color = color;
    } else {
      return toast.error("Color is required");
    }
    if (wheelSize !== "") {
      data.wheelSize = +wheelSize;
    } else {
      return toast.error("Wheel size is required");
    }
    if (price !== "") {
      data.price = +price;
    } else {
      return toast.error("Price is required");
    }
    if (id !== "" && id.length >= 5) {
      data.id = id;
    } else {
      return toast.error("Id is required or must be more than 5 symbols");
    }
    if (description !== "" && description.length >= 5) {
      data.description = description;
    } else {
      return toast.error(
        "Description is required or must be more than 5 symbols"
      );
    }
    const res = await createBicycle(data);
    if (res.error) {
      return toast.error(res.error.data.message);
    }
    handleClear();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            name="type"
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <FormInput
            name="color"
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <FormInput
            name="wheelSize"
            type="text"
            placeholder="Wheel size"
            value={wheelSize}
            onChange={(e) => setWheelSize(e.target.value)}
          />
          <FormInput
            name="price"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormInput
            name="id"
            type="text"
            placeholder="ID (slug): XXXXXXXXXXXXXX"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputContainer>
        <FormTextarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputContainer>
          <FormButton type="submit">SAVE</FormButton>
          <FormButton type="button" onClick={handleClear}>
            CLEAR
          </FormButton>
        </InputContainer>
      </form>
    </Container>
  );
};
