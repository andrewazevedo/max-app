import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    backgroundColor: colors.paleGrey,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: metrics.screenWidth,
    height: 39,
    backgroundColor: colors.coolGrey,
  },
  subHeaderText: {
    fontSize: fonts.small,
    fontWeight: '500',
    color: colors.white,
  },
  contentContainer: {
    paddingHorizontal: metrics.doubleBaseMargin,
    backgroundColor: colors.paleGrey,
  },
});

export default styles;
