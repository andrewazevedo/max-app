import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 54.1,
    backgroundColor: colors.topaz,
    borderRadius: metrics.baseRadius,
    shadowColor: colors.blueGreen,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  title: {
    fontSize: fonts.medium,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
