//show LibraryList.json file (list of library) to user.
//render the list of library for user
import React, { Component } from 'react';
//ListView deprecated, use FlatList in Q$A section.
// import { ListView } from 'react-native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
//item is library in previous file.
  renderItem({ item }) {
    return <ListItem item={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
