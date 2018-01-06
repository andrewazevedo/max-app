import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import Header from '../../components/header';
import Card from '../../components/card';

import styles from './styles';

class Tickets extends Component {
  static navigationOptions = {
    header: props => <Header {...props} title="pesquisar passagem" />
  };

  render() {
    const {
      container,
      subHeaderContainer,
      subHeaderText,
      contentContainer,
    } = styles;

    return (
      <View style={container}>
        <View style={subHeaderContainer}>
          <Text style={subHeaderText}>Cia Aérea</Text>
          <Text style={subHeaderText}>Partida</Text>
          <Text style={subHeaderText}>Duração</Text>
          <Text style={subHeaderText}>Chegada</Text>
        </View>
        <ScrollView contentContainerStyle={contentContainer}>
          <Card />
        </ScrollView>
      </View>
    );
  }
}

export default Tickets;
