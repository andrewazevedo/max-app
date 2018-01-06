/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { metrics } from '../../styles';

import Input from '../../components/input';
import Button from '../../components/button';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  onSearchButtonPress = () => {
    this.props.navigation.navigate('tickets');
  }

  render() {
    const {
      container,
      bannerContainer,
      bannerImg,
      formContainer,
      dateContainer,
    } = styles;

    return (
      <View style={container}>
        <View style={bannerContainer}>
          <Image style={bannerImg} source={require('../../../assets/img/banner.png')} />
        </View>

        <View style={formContainer}>
          <Input placeholder="IATA Origem" />

          <Input placeholder="IATA Destino" />

          <View style={dateContainer}>
            <Input
              inputStyle={{ width: metrics.screenWidth * 0.43 }}
              placeholder="Data de ida"
            />
            <Input
              inputStyle={{ width: metrics.screenWidth * 0.43 }}
              placeholder="Data de volta"
            />
          </View>

          <Input placeholder="Quantidade de passageiros" />

          <Button
            title="Pesquisar passagem"
            onPress={this.onSearchButtonPress}
          />
        </View>
      </View>
    );
  }
}

export default Home;
