import {
  CloseButtonImg,
  Container,
  IdP,
  InfoDiv,
  NameSpan,
  PriceP,
} from "./Card.styled";
import CloseButton from "../../icons/Close.svg";
import { useDeleteBikeMutation } from "../../redux/bicycleApi";
import { toast } from "react-toastify";
import { Select } from "../Select/Select";

export const Card = ({ item }) => {
  const { _id, id = 0, name, type, color, price, status } = item;
  const [deleteBicycle] = useDeleteBikeMutation();

  const handleDelete = async () => {
    try {
      await deleteBicycle(_id);
      toast.success("Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container status={status}>
      <InfoDiv>
        <p>
          <NameSpan>{name.toUpperCase()}</NameSpan> - {type} ({color})
        </p>
        <IdP>ID: {id}</IdP>
        <p style={{ display: "inline-block", marginRight: "18px" }}>STATUS: </p>
        <Select status={status} id={_id} />
      </InfoDiv>
      <PriceP>{price}.00 UAH/hr.</PriceP>
      <CloseButtonImg
        alt="close button"
        src={CloseButton}
        onClick={handleDelete}
      />
    </Container>
  );
};
