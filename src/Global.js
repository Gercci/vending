import styled, {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  li {
    list-style-type: none;
  }
`

export const Wrapper = styled.div`
  margin: 40px auto 0;
  max-width: 1280px;
`

export const Error = styled.span`
  font-size: 14px;
  line-height: 1.2;
  color: red;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  padding: 5px 10px;
  min-width: 240px;
  font-size: 18px;
  line-height: 1.2;
  border: 1px solid black;
`

export const Button = styled.button`
  display: inline-block;
  margin-left: 10px;
  height: 100%;
  font-size: 16px;
  border: none;
  &:hover {
    cursor: pointer; 
  }
`

export const SmallTitle = styled.h2`
  margin: 10px 0;
  font-size: 24px;
  line-height: 1;
  font-weight: 500;
`
