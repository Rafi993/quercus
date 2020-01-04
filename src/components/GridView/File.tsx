import { connect } from 'react-redux';
import React, { useMemo } from 'react';

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
  const fileType: string = useMemo(() => {
    const extension = (name || '').split('.').pop();
    return extension ? extension : 'file';
  }, [name]);

  return (
    <StyledItem
      title={name}
      selected={selected}
      onClick={() => _toggleSelection(name)}
      onDoubleClick={() => _openFile(name)}
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
