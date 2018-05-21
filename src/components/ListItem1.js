/*show single row(item), refrencing this.props.item
with title */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
//<Text style={titleStyle}>{this.props.item.title}</Text>  //FlatList
  render() {
    const { titleStyle } = styles;
    return (
        <CardSection>
         <Text style={titleStyle}>{this.props.library.title}</Text>
        </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
