import styled from "styled-components";

export const MovieItem = ({Data, Select}) => <Container>
    <Attr>
        <Key>Title:</Key>
        <Value>{Data.title}</Value>
    </Attr>
    <Attr>
        <Key>Episode:</Key>
        <Value>{Data.episode_id}</Value>
    </Attr>
    <Attr>
        <Key>Release Date:</Key>
        <Value>{Data.release_date}</Value>
    </Attr>
    <Button onClick={() => Select(Data.episode_id)}>Starships List</Button>
</Container>


const Container = styled.div`
  border-radius: 16px;
  border: 2px solid white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
`

export const Attr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 10px;
`

export const Key = styled.span`
  font-size: 20px;
  color: white;
  font-weight: bold;
`

export const Value = styled.span`
  margin-left: 25px;
  color: #f93a13;
  font-size: 20px;
`


export const Button = styled.button`
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01, sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 10px 15px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;

  @media (min-width: 768px) {
    & {
      padding: 19px 32px;
    }
  }

  &:before,
  &:after {
    border-radius: 80px;
  }

  &:before {
    background-color: rgba(249, 58, 19, .32);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }

  &:after {
    background-color: initial;
    background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    bottom: 4px;
    content: "";
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }

  &:hover:not(:disabled):after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
  }

  &:active:not(:disabled) {
    color: #ccc;
  }

  &:active:not(:disabled):after {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    bottom: 4px;
    left: 4px;
    right: 4px;
    top: 4px;
  }

  &:disabled {
    cursor: default;
    opacity: .24;
  }
`