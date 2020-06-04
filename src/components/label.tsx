import { Color } from './global-styles'
import styled from '@emotion/styled'

interface ILabelProps {
  background?: Color
}

export const Label = styled.span<ILabelProps>`
  padding: 0.25rem 0.5rem;
  background-color: ${(p) => p.background || '#eee'};
  font-size: 0.8rem;
  margin-right: 8px;
  margin-bottom: 8px;
  text-transform: lowercase;

  :last-of-type {
    margin-right: 0;
  }
`