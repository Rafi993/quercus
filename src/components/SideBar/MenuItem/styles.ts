import styled from 'styled-components';

import * as colors from '../../../styles/colors';

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.h3<MenuItemProps>`
  outline: none;
  cursor: pointer;
  font-weight: normal;
  margin: 0;
  padding: 0.5em 1em;
  color: ${props => (props.active ? colors.ACTIVE : colors.PRIMARY_TEXT)};
  :hover,
  :focus {
    background-color: ${colors.ACTIVE};
    user-select: none;
    color: ${props => (props.active ? colors.PRIMARY : colors.PRIMARY_TEXT)};
  }

  > svg {
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.5em;
  }
`;
