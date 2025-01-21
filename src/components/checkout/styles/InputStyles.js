import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin: 8px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 16px;
  margin: 8px;
  border: 1px solid #97a6d9;
  border-radius: 4px;
  font-size: 14px;
`;

const StyledInputHigh = styled.input`
  padding: 16px;
  margin: 8px;
  border: 1px solid #97a6d9;
  border-radius: 4px;
  font-size: 14px;
`;

export { InputWrapper, Label, StyledInput, StyledInputHigh };
