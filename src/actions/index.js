//Action Creator(plain jscript func).
//From ListItem, action crator called.
//Since export many acton creators, no need default
//for export.
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
