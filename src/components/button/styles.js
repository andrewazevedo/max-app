import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 54.1,
    backgroundColor: colors.topaz,
    borderRadius: metrics.baseRadius,
  },
  title: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
