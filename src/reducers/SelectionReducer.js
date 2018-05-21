//when firsr excute, instaed of undefined, just null
export default (state = null, action) => {
// console.log(action);
//   return null; //currently no row(library) selcted
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
