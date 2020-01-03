import { connect } from 'react-redux';
import React from 'react';

import { Trail as StyledTrail } from './styles';

interface Props {
  name: string;
  active: boolean;
  index: number;
  handleNavigate: Function;
}

const Trail: React.FC<Props> = ({ name, index, active, handleNavigate }) => {
  return (
    <StyledTrail
      data-testid="trail"
      active={active}
      onClick={() => !active && handleNavigate(index)}
    >
      {name}
    </StyledTrail>
  );
};

export default connect(null)(Trail);
