import { connect } from 'react-redux';
import React, { useCallback, useRef, useEffect } from 'react';

import { App } from '../../types/state';
import { setCurrentPath } from '../../actions/navigation';
import { toggleSelection } from '../../actions/folders';
import Icon from '../Icon';
import { isSelected } from '../../reducer';
import { Folder as StyledFolder } from './styles';

const path = window.require('path');

interface Props {
  currentPath: string;
  name: string;
  selected: boolean;
  _setCurrentPath: Function;
  _toggleSelection: Function;
}

const Folder: React.FC<Props> = ({
  currentPath,
  name,
  selected,
  _setCurrentPath,
  _toggleSelection,
}) => {
  const folderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected && folderRef && folderRef.current) {
      folderRef.current.focus();
    }
  }, [folderRef, selected]);

  const navigateInto = useCallback(() => {
    _setCurrentPath(path.join(currentPath, name));
  }, [currentPath, name, _setCurrentPath]);

  const handleEnter = useCallback(
    (event: any) => {
      if (event.key === 'Enter') {
        navigateInto();
      }
    },
    [navigateInto]
  );

  return (
    <StyledFolder
      title={name}
      tabIndex={-1}
      onClick={() => _toggleSelection(name)}
      onKeyPress={handleEnter}
      onDoubleClick={navigateInto}
      selected={selected}
    >
      <Icon type="folder" />
      <h4>{name}</h4>
    </StyledFolder>
  );
};

const mapStateToProps = (app: App, props: { name: string }) => ({
  currentPath: app.currentPath,
  selected: isSelected(app, props.name),
});

export default connect(mapStateToProps, {
  _setCurrentPath: setCurrentPath,
  _toggleSelection: toggleSelection,
})(Folder);
