import styled from 'styled-components'

export const ImageWrapper = styled.div`
  border-radius: 10px;
  margin: 10px 0;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
 
`
export const Image = styled.img`
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top:0;
  width: 100%;
`
export const Button = styled.button`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  border:0;
  padding: 5px;
  margin: 5px;
  & svg {
    margin-right: 4px;
  }
`