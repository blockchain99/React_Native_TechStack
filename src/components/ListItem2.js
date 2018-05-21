/*show single row(item), refrencing this.props.item
with title */
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.id === selectedLibraryId) {
      return (
        <Text>{this.props.library.description}</Text>
      );
    }
  }

//<Text style={titleStyle}>{this.props.item.title}</Text>  //FlatList
  render() {
    const { titleStyle, contentStyle } = styles;
    // console.log(this.props);//remote debugger, shows selectLibrary
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
       <View>
         <CardSection>
          <Text style={titleStyle}>{title}</Text>
         </CardSection>
         <CardSection>
          <Text style={contentStyle}>{this.renderDescription()}</Text>
         </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  contentStyle: {
    fontSize: 15,
    paddingLeft: 18,
    color: 'blue'
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
/* 1st arg: mapStateToProps-null, 2nd: actions */
// export default connect(null, actions)(ListItem);
export default connect(mapStateToProps, actions)(ListItem);
