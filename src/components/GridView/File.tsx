import { connect } from 'react-redux';
import React, { useMemo } from 'react';

import { openFile } from '../../actions/navigation';
import FileIcon from './FileIcon';
import { Item as StyledItem } from './styles';

interface Props {
  name: string;
  _openFile: Function;
}

const File: React.FC<Props> = ({ name, _openFile }) => {
  const fileType: string = useMemo(() => {
    const extension = (name || '').split('.').pop();
    return extension ? extension : 'file';
  }, [name]);

  return (
    <StyledItem title={name} onClick={() => _openFile(name)}>
      <FileIcon type={fileType} />
      <h4>{name}</h4>
    </StyledItem>
  );
};

export default connect(null, {
  _openFile: openFile,
})(File);
