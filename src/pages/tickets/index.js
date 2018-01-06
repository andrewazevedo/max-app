import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
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
      footer,
      footerTitle,
      footerSectionLeft,
      footerSectionRight,
      filterIcon,
      orderIcon,
      footerDivisor,
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
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
        <View style={footer}>
          <TouchableOpacity style={footerSectionLeft}>
            <Image
              style={filterIcon}
              source={require('../../../assets/img/filter.png')}
            />
            <Text style={footerTitle}>FILTRAR</Text>
          </TouchableOpacity>

          <View style={footerDivisor} />

          <TouchableOpacity style={footerSectionRight}>
            <Image
              style={orderIcon}
              source={require('../../../assets/img/order.png')}
            />
            <Text style={footerTitle}>ORDENAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Tickets;
