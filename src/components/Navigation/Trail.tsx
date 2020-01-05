import { connect } from 'react-redux';
import React, { useCallback } from 'react';

import { Trail as StyledTrail } from './styles';

interface Props {
  name: string;
  active: boolean;
  index: number;
  handleNavigate: Function;
}

const Trail: React.FC<Props> = ({ name, index, active, handleNavigate }) => {
  const handleEnter = useCallback(
    (event: any) => {
      if (event.key === 'Enter' && !active) {
        handleNavigate(index);
      }
    },
    [active, index, handleNavigate]
  );

  return (
    <StyledTrail
      tabIndex={0}
      role="button"
      data-testid="trail"
      active={active}
      onClick={() => !active && handleNavigate(index)}
      onKeyPress={handleEnter}
    >
      {name}
    </StyledTrail>
  );
};

export default connect(null)(Trail);
