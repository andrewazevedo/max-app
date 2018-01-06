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
    fontFamily: 'Montserrat-Bold',
    color: colors.white,
  },
  contentContainer: {
    paddingHorizontal: metrics.doubleBaseMargin,
    backgroundColor: colors.paleGrey,
  },
  footer: {
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.silver,
  },
  footerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: fonts.small,
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: colors.steelGrey,
  },
});

export default styles;
