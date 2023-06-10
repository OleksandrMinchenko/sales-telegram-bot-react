import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivStyled = styled.div`
  h2 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
    line-height: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const RulsLink = styled.h3`
  font-size: 18px;
  line-height: 14px;
  text-decoration: underline;
  color: blue;
`;

export const CheckBoxStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  outline: none;

  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid black;
  cursor: pointer;

  &.checked {
    background-color: green;
    border-color: green;
  }

  &.checked::before {
    content: '\u2714';
    font-size: 24px;
    color: #fff;
  }
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
    transform: translate(-5px, 7px);

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

  &.contact {
    padding-right: 40px;
  }

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