import styled from "styled-components";

export const Container = styled.div`
  background: #3d3f43;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button {
    display: block;
    background: #756df4;
    border: 0;
    color: #fff;
    margin-top: 5px;
    padding: 8px 12px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: .9;
    }}
`;