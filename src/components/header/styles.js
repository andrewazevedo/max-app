import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: colors.topaz,
  },

  title: {
    fontSize: fonts.medium,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
