import React from 'react';
import {
  TextInput,
  Image,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { colors } from '../../styles';

const Input = ({
  placeholder,
  inputStyle,
  onChangeText,
  value,
  autoCorrect,
  maxLength,
  keyboardType,
  autoCapitalize,
}) => (
  <View>
    <TextInput
      style={[styles.inputContainer, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={colors.coolGrey}
      underlineColorAndroid="transparent"
      onChangeText={text => onChangeText(text)}
      value={value}
      autoCorrect={autoCorrect}
      maxLength={maxLength}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  </View>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
