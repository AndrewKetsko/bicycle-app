import { useGetBikesQuery } from "../../redux/bicycleApi";
import { Card } from "../Card/Card";
import { Container } from "./List.styled";

export const List = () => {
  const { data } = useGetBikesQuery();

  return (
    <Container>
      {data?.data.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </Container>
  );
};
