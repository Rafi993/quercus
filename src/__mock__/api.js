const listFilesResponse = [
  { name: 'folder1', type: 'folder' },
  { name: 'stuff', type: 'folder' },
  { name: 'file1.jpg', type: 'file' },
  {
    name: 'todos.md',
    type: 'file',
  },
];

async function listFiles(path) {
  return Promise.resolve(listFilesResponse);
}

module.exports = {
  listFiles,
  listFilesResponse,
};
