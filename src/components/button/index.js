import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
    <Image
      style={styles.icon}
      source={require('../../../assets/img/lupa.png')}
    />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
