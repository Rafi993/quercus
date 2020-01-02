import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Navigation = styled.div`
  display: flex;
  height: 4em;
  margin-left: 8px;
  > div {
    position: fixed;
    top: 12px;
  }
`;

interface TrailProps {
  active: boolean;
}

export const Trail = styled.div<TrailProps>`
  background-color: ${props => (props.active ? colors.ACTIVE : '#282828')};
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  display: inline-block;
  padding: 0.4em 1em;
  border-radius: 3px;
  margin-left: 4px;
`;
