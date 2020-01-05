import { connect } from 'react-redux';
import React, { useMemo, useRef, useEffect, useCallback } from 'react';

import { openFile } from '../../actions/navigation';
import { toggleSelection } from '../../actions/folders';
import { isSelected } from '../../reducer';
import { App } from '../../types/state';
import FileIcon from './FileIcon';
import { Item as StyledItem } from './styles';

interface Props {
  name: string;
  selected: boolean;
  _openFile: Function;
  _toggleSelection: Function;
}

const File: React.FC<Props> = ({
  name,
  selected,
  _openFile,
  _toggleSelection,
}) => {
  const fileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected && fileRef && fileRef.current) {
      fileRef.current.focus();
    }
  }, [fileRef, selected]);

  const fileType: string = useMemo(() => {
    const extension = (name || '').split('.').pop();
    return extension ? extension : 'file';
  }, [name]);

  const handleEnter = useCallback(
    (event: any) => {
      if (event.key === 'Enter') {
        _openFile(name);
      }
    },
    [name, _openFile]
  );

  return (
    <StyledItem
      title={name}
      ref={fileRef}
      tabIndex={0}
      role="button"
      selected={selected}
      onClick={() => _toggleSelection(name)}
      onDoubleClick={() => _openFile(name)}
      onKeyPress={handleEnter}
    >
      <FileIcon type={fileType} />
      <h4>{name}</h4>
    </StyledItem>
  );
};

const mapStateToProps = (app: App, props: { name: string }) => ({
  selected: isSelected(app, props.name),
});

export default connect(mapStateToProps, {
  _openFile: openFile,
  _toggleSelection: toggleSelection,
})(File);
