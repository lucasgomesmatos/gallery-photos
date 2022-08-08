import styled from "styled-components";

export const Container = styled.div`
  background: #27282f;
  color: #fff;
  min-height: 100vh;
  padding: 20px;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

export const UploadFrom = styled.form`
  background: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
    &:hover {
      opacity: .9;
    }
  }
`