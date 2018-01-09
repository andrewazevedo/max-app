import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

import Button from '../button';

const Card = ({ item }) => {
  const {
    container,

    firstLine,
    arrowIcon,
    titleIda,
    titleIdaResult,

    secondLine,
    titleCompany,
    titleMatch,
    titleDuration,
    titleArrival,

    thirdLine,
    thirdLineText,

    dividingLine,
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

      <View style={secondLine}>
        <View style={{ width: 60, alignItems: 'center' }}>
          <Text style={titleCompany}>{item.airline}</Text>
        </View>
        <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
          <Text style={titleMatch}>{item.deptime}</Text>
        </View>
        <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
          <Text style={titleDuration}>{item.duration}</Text>
        </View>
        <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
          <Text style={titleArrival}>{item.arrtime}</Text>
        </View>
      </View>

      <View style={thirdLine}>
        <Text style={thirdLineText}>G3-9018</Text>
        <Text style={thirdLineText}>{item.origin}</Text>
        <Text style={thirdLineText}>VOO DIRETO</Text>
        <Text style={thirdLineText}>GIG</Text>
      </View>

      <View style={dividingLine} />

      <View style={firstLine}>
        <Text style={titleIda}>VOLTA</Text>
        <Image
          source={require('../../../assets/img/shapeLeft.png')}
          style={arrowIcon}
        />
        <Text style={titleIdaResult}>Quarta, 08 de dezembro</Text>
      </View>

      <View style={secondLine}>
        <Text style={titleCompany}>GOL</Text>
        <Text style={titleMatch}>06:55</Text>
        <Text style={titleDuration}>1H55</Text>
        <Text style={titleArrival}>07:51</Text>
      </View>

      <View style={thirdLine}>
        <Text style={thirdLineText}>G3-9018</Text>
        <Text style={thirdLineText}>CNF</Text>
        <Text style={thirdLineText}>VOO DIRETO</Text>
        <Text style={thirdLineText}>GIG</Text>
      </View>

      <View style={dividingLine} />

      <Button
        title={`Comprar R$ ${item.fare.totalfare}`}
        buttonStyle={{ height: 35 }}
        onPress={() => {}}
      />
    </View>
  );
};


export default Card;
