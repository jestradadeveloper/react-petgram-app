import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
`
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
  ${fadeIn}
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top:0;
  width: 100%;
`
export const Button = styled.button`
  align-items: center;
  border:0;
  border-radius: 10px;
  color: #889BFF;
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  text-align: right;
  width: 100%;
  & svg {
    margin-right: 4px;
  }
`
