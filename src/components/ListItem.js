/*show single row(item), refrencing this.props.item
with title */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  // Platform, //Q&A
  // UIManager, //Q&A
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    // LayoutAnimation.linear();  //smooth
    LayoutAnimation.spring(); //bouncing
  }

  renderDescription() {
    // const { library, selectedLibraryId } = this.props;
    const { library, expanded } = this.props;
    const { textStyle } = styles;
    // if (library.id === selectedLibraryId) {
    if (expanded) {
      return (
        <CardSection>
          <Text style={textStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }//end of renderDescription()

//<Text style={titleStyle}>{this.props.item.title}</Text>  //FlatList
  render() {
    // console.log(this.props);//remote debugger, shows selectLibrary
    const { id, title } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
       <View>
         <CardSection>
          <Text style={titleStyle}>{title}</Text>
         </CardSection>
         {this.renderDescription()}
       </View>
      </TouchableWithoutFeedback>
    );
  }//end of render()
}//end of class

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    flex: 1,
    paddingLeft: 8,
    color: 'purple'
  }
};
//ownProp equals this.props inside of the components.
//Any props passed into ListItem component will show up inside of
//mapStateToProps as ownProps.
const mapStateToProps = (state, ownProps) => {
  // return { selectedLibraryId: state.selectedLibraryId };
//if same return true, else return false
  const expanded = state.selectedLibraryId === ownProps.library.id;
  //return { expanded: expanded };
  return { expanded };
};
/* 1st arg: mapStateToProps-null, 2nd: actions */
// export default connect(null, actions)(ListItem);
export default connect(mapStateToProps, actions)(ListItem);
