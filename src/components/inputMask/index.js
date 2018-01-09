import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

import { colors } from '../../styles';

const DateInput = ({
  placeholder,
  inputStyle,
  onChangeText,
  value,
  autoCorrect,
  maxLength,
  keyboardType,
  autoCapitalize,
}) => (
  <View style={styles.container}>
    <TextInputMask
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
      type={'datetime'}
      options={{
        format: 'DD/MM/YYYY'
      }}
    />
  </View>
);

DateInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DateInput;
