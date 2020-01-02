import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { App } from '../../types/state';
import { splitPath, joinPath } from '../../utils';
import { setCurrentPath } from '../../actions/sideBar';
import Trail from './Trail';
import { Navigation as StyledNavigation } from './styles';

interface Props {
  currentPath: string;
  _setCurrentPath: Function;
}

const Navigation: React.FC<Props> = ({ currentPath, _setCurrentPath }) => {
  const breadCrumb = useMemo(() => splitPath(currentPath || ''), [currentPath]);

  const handleNavigate = useCallback(
    (index: number) => {
      _setCurrentPath(joinPath(breadCrumb.slice(0, index + 1)));
    },
    [breadCrumb, _setCurrentPath]
  );

  return (
    <StyledNavigation>
      <div>
        {breadCrumb.map((trail: string, index: number) => (
          <Trail
            key={trail}
            name={trail}
            active={index === breadCrumb.length - 1}
            index={index}
            handleNavigate={handleNavigate}
          />
        ))}
      </div>
    </StyledNavigation>
  );
};

const mapStateToProps = (app: App) => ({
  currentPath: app.currentPath,
});

export default connect(mapStateToProps, {
  _setCurrentPath: setCurrentPath,
})(Navigation);
