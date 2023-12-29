import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #e8e8e8;
  width: 618px;
  display: flex;
  padding: 12px 18px;
  border: solid 2px;
  border-radius: 10px;
  margin-top: 12px;
  position: relative;
  ${(props) =>
    props.status === "busy"
      ? "border-color: #F2994A;"
      : props.status === "unavailable"
      ? "border-color: #EB5757; opacity:50%"
      : "border-color: #6fcf97;"}
`;

export const InfoDiv = styled.div`
  margin-right: auto;
  font-size: 14px;
  line-height: 1.57;
`;

export const NameSpan = styled.span`
  font-weight: 700;
`;

export const IdP = styled.p`
  font-size: 8px;
`;

export const PriceP = styled.p`
  justify-self: end;
  align-self: flex-end;
  font-size: 24px;
  line-height: 1.57;
`;

export const CloseButtonImg = styled.img`
  position: absolute;
  top: 12px;
  right: 18px;
`;
