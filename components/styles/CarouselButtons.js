import styled from 'styled-components'

const CarouselButtons = styled.div`
  position: absolute;
  bottom: 15px;
  padding: 0 15px;
  display: flex;
  width: 100%;
  z-index: 20;
  .prev,
  .next {
    position: relative;
    padding: 5px;
    background: white;
    outline: none;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      border: solid black;
      border-width: 0 3px 3px 0;
      padding: 5px;
    }
  }
  .prev {
    margin-right: auto;
    &:after {
      transform: rotate(135deg);
      margin-left: 5px;
    }
  }
  .next {
    margin-left: auto;
    &:after {
      transform: rotate(-45deg);
      margin-right: 5px;
    }
  }
`

export default CarouselButtons
