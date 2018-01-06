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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.silver,
  },
  footerTitle: {
    fontFamily: 'Montserrat-Black',
    fontSize: fonts.small,
    letterSpacing: 0,
    color: colors.steelGrey,
  },
  footerSectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
  },
  footerSectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 25,
  },
  filterIcon: {
    width: 11,
    height: 10,
    marginRight: 5,
  },
  orderIcon: {
    width: 11,
    height: 11,
    marginRight: 5,
  },
  footerDivisor: {
    width: 1,
    height: 40,
    backgroundColor: colors.silver,
  },
});

export default styles;
