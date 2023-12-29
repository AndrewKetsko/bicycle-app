import { useGetBikesQuery } from "../../redux/bicycleApi";
import { Container, HeaderP, StatSpan } from "./Stat.styled";

export const Stat = () => {
  const { data, isLoading } = useGetBikesQuery();
  if (isLoading) {
    return <p>LOADING</p>;
  }
  const { total = 0, available = 0, booked = 0, avCost = 0 } = data.stat;
  return (
    <Container>
      <HeaderP>STATISTICS</HeaderP>
      <p>
        Total Bikes: <StatSpan>{total}</StatSpan>
      </p>
      <p>
        Available Bikes: <StatSpan>{available}</StatSpan>
      </p>
      <p>
        Booked Bikes: <StatSpan>{booked}</StatSpan>
      </p>
      <p>
        Average bike cost: <StatSpan>{avCost}</StatSpan> UAH/hr.
      </p>
    </Container>
  );
};
