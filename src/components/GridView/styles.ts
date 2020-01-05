import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const GridView = styled.div`
  padding: 1.5em 2em;
`;

interface ItemProps {
  selected: boolean;
}

export const Item = styled.div<ItemProps>`
  float: left;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  outline: none;
  > svg {
    height: 40px;
    width: 40px;
    margin: 10px auto;
    margin-bottom: 0;
    > path {
      fill: ${props => (props.selected ? colors.ACTIVE : colors.GREY0)};
    }
  }

  > h4 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
    width: 74px;
    word-break: break-all;
    height: 1.8rem;
    color: ${props => (props.selected ? colors.ACTIVE : colors.PRIMARY_TEXT)};
  }

  :hover {
    > svg > path {
      fill: ${props => (props.selected ? colors.ACTIVE : colors.PRIMARY_TEXT)};
    }
  }

  :focus {
    > svg > path {
      fill: ${colors.ACTIVE};
    }

    > h4 {
      color: ${props => colors.ACTIVE};
    }
  }
`;

export const Folder = styled(Item)`
  :hover {
    > svg > path {
      fill: ${props => (props.selected ? colors.ACTIVE : colors.GREY1)};
    }
  }
`;
