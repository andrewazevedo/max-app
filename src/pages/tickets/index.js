import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/header';
import Card from '../../components/card';

import styles from './styles';

class Tickets extends Component {
  static navigationOptions = {
    header: props => <Header {...props} title="pesquisar passagem" />
  };

  renderList = () => {
    console.log(this.props.navigation.state.params.data);
    this.props.navigation.state.params.data.length
      ? this.renderCards()
      : <Text>Carregando...</Text>
  };

  renderCards = () => (
    this.props.navigation.state.params.data.map((item, index) => (
      <Card
        key={index}
        item={item}
      />
    ))
  );

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
          {this.renderCards()}
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

const mapStateToProps = ({ home }) => {
  const {
    flights,
  } = home;
  return {
    flights,
  };
};

export default connect(mapStateToProps)(Tickets);
