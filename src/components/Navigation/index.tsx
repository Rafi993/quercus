import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { App } from '../../types/state';
import { splitPath } from '../../utils';
import Trail from './Trail';
import { Navigation as StyledNavigation } from './styles';

interface Props {
  currentPath: string;
}

const Navigation: React.FC<Props> = ({ currentPath }) => {
  const path = useMemo(() => splitPath(currentPath || ''), [currentPath]);

  return (
    <StyledNavigation>
      {path.map((trail: string, index: number) => (
        <Trail key={trail} name={trail} active={index === path.length - 1} />
      ))}
    </StyledNavigation>
  );
};

const mapStateToProps = (app: App) => ({
  currentPath: app.currentPath,
});

export default connect(mapStateToProps)(Navigation);
