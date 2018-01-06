import React from 'react';
import {
  TextInput,
  Image,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { colors } from '../../styles';

const Input = ({ placeholder, inputStyle }) => (
  <View>
    <TextInput
      style={[styles.inputContainer, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={colors.coolGrey}
      underlineColorAndroid="transparent"
    />
  </View>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
