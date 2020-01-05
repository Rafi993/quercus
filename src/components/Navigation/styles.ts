import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Navigation = styled.div`
  display: flex;
  height: 4em;
  > div {
    position: fixed;
    top: 12px;
    left: 8px;
    right: 0;
  }
`;

interface TrailProps {
  active: boolean;
}

export const Trail = styled.div<TrailProps>`
  outline: none;
  background-color: ${props =>
    props.active ? colors.ACTIVE : colors.SECONDARY};
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  display: inline-block;
  padding: 0.4em 1em;
  border-radius: 3px;
  margin-left: 4px;
  :focus {
    background-color: ${props =>
      props.active ? colors.ACTIVE_FOCUSED : colors.GREY1};
  }
`;
