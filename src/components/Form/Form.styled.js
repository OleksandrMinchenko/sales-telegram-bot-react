import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LabelStyled = styled.label`
  position: relative;
  h2 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
    line-height: 18px;
  }

  p {
    position: absolute;
    top: 0;
    right: 0;
    font-style: italic;
    color: blue;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-5px, -5px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;

    border: 0;
    border-radius: 50%;
    background-color: #61616170;

    &:active {
      background-color: black;
      color: white;
    }
  }
`;

export const InputStyled = styled.input`
  padding: 10px 15px;
  width: 100%;

  font-size: 18px;
  line-height: 14px;

  border-radius: 12px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &::placeholder {
    font-size: 18px;
    line-height: 14px;
  }

  &:focus {
    border-color: #61616170;
    outline: none;
  }
`;

export const TextAreaStyled = styled.textarea`
  padding: 10px 15px;
  width: 100%;

  font-size: 18px;
  line-height: 14px;

  border-radius: 12px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &::placeholder {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 14px;
  }

  &:focus {
    border-color: #61616170;
    outline: none;
  }
`;

export const ErrorStyled = styled.span`
  font-style: italic;
  color: red;
`;

export const ButtonStyled = styled.button`
  padding: 10px 15px;
  width: 100%;

  font-size: 18px;
  line-height: 14px;

  border-radius: 12px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:focus {
    background-color: black;
    color: white;
  }
`;
