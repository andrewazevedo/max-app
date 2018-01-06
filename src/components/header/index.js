import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  onBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onBackPress}>
          <Image
            source={require('../../../assets/img/arrowBack.png')}
            style={{ width: 19, height: 13 }}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>

        <View />
      </View>
    );
  }
}

export default Header;
