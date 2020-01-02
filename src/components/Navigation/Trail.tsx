import { connect } from 'react-redux';
import React from 'react';

import { Trail as StyledTrail } from './styles';

interface Props {
  name: string;
  active: boolean;
}

const Trail: React.FC<Props> = ({ name, active }) => {
  return <StyledTrail active={active}>{name}</StyledTrail>;
};

export default connect(null)(Trail);
