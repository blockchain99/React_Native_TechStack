//show LibraryList.json file
//render the list of user
import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}
/* call function,connect() then it return
another function with LibrararyList */
const mapStateToProps = state => {
  console.log(state);
};
export default connect(mapStateToProps)(LibraryList);
