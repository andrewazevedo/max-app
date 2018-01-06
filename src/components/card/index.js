import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

const Card = () => {
  const {
    container,
    firstLine,
    arrowIcon,

    titleIda,
    titleIdaResult,
  } = styles;

  return (
    <View style={container}>
      <View style={firstLine}>
        <Text style={titleIda}>IDA</Text>
        <Image
          source={require('../../../assets/img/shapeRight.png')}
          style={arrowIcon}
        />
        <Text style={titleIdaResult}>Quarta, 08 de dezembro</Text>
      </View>
    </View>
  );
};


export default Card;
