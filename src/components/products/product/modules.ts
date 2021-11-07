import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 170px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
`

export const HugeText = styled.span`
  font-size: 21px;
  font-weight: 300;
  line-height: 1;
`

export const Text = styled.span`
  font-size: 21px;
  font-weight: 300;
  line-height: 1;
`

export const Id = styled.span`
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-size: 28px;
  font-weight: 600;
`