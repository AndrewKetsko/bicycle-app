import styled from "@emotion/styled";

export const Container = styled.div`
  width: 513px;
  padding: 10px;
  border-bottom: 2px solid #c4c4c4;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
`;

export const FormInput = styled.input`
  font-family: "Saira", sans-serif;
  font-size: 12px;
  flex-grow: 1;
  height: 29px;
  padding: 5px 16px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const FormTextarea = styled.textarea`
  font-family: "Saira", sans-serif;
  width: 100%;
  margin-top: 11px;
  height: 75px;
  font-size: 12px;
  padding: 5px 16px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
`;

export const FormButton = styled.button`
  font-family: "Saira", sans-serif;
  flex-grow: 1;
  color: white;
  background-color: #696969;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 4px 22px;
`;
