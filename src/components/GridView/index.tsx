import { connect } from 'react-redux';
import React, { useEffect, useCallback } from 'react';

import { getFolderContent } from '../../reducer';
import { App, Children } from '../../types/state';
import { setCurrentPath, navigateBack } from '../../actions/navigation';
import { toggleHiddenContent } from '../../actions/folders';
import { getPath } from '../../utils';
import { GridView as StyledGridView } from './styles';
import Item from './Item';
interface Props {
  folderContent: Children;
  _setCurrentPath: Function;
  _toggleHiddenContent: Function;
  _navigateBack: Function;
}

const GridView: React.FC<Props> = ({
  folderContent,
  _setCurrentPath,
  _toggleHiddenContent,
  _navigateBack,
}) => {
  const handleKeyDown = useCallback(
    (event: any) => {
      console.log(event.code);
      switch (event.code) {
        case 'KeyH':
          _toggleHiddenContent();
          break;
        case 'Backspace':
          _navigateBack();
          break;
        default:
          break;
      }
    },
    [_toggleHiddenContent]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    _setCurrentPath(getPath('home'));
  }, [_setCurrentPath]);

  return (
    <StyledGridView>
      {folderContent.map(child => (
        <Item key={child.name} name={child.name} type={child.type} />
      ))}
    </StyledGridView>
  );
};

const mapStateToProps = (app: App) => ({
  folderContent: getFolderContent(app),
});

export default connect(mapStateToProps, {
  _setCurrentPath: setCurrentPath,
  _toggleHiddenContent: toggleHiddenContent,
  _navigateBack: navigateBack,
})(GridView);
