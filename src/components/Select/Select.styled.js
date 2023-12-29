import styled from "@emotion/styled";

export const SelectText = styled.select`
  font-family: "Saira", sans-serif;
  font-size: 14px;
  line-height: 22px;
  padding-right: 20px;
  border: none;
  background-color: inherit;
  margin: 0;
  appearance: none;
  outline: none;
`;

export const SelectImg = styled.img`
  position: absolute;
  right: 5px;
  bottom: 8px;
  pointer-events: none;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
`;

export const OptionText = styled.option`
  font-family: "Saira", sans-serif;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
`;
