import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
    {
      ${bounceDown('.3s', 'ease')}
      background: #fff;
      padding: 10px;
      border-radius: 40px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 450px;
      position:fixed;
      right:0;
      top: 0px;
      transform: scale(.5);
      z-index: 1;
    }
  `}

`
export const Item = styled.li`
  padding: 0 10px;
`
