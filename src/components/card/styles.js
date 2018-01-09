import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.white,

    shadowColor: colors.shadowCard,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  arrowIcon: {
    width: 11,
    height: 5,
  },

  titleIda: {
    fontSize: fonts.regular,
    fontFamily: 'Montserrat-ExtraBold',
    color: colors.coolGrey,
  },
  titleIdaResult: {
    fontSize: fonts.small,
    fontFamily: 'Montserrat-Bold',
    color: colors.coolGrey,
  },

  secondLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  titleCompany: {
    fontSize: fonts.medium,
    letterSpacing: -0.34,
    fontFamily: 'Montserrat-ExtraBold',
    color: colors.coolGrey,
  },
  titleMatch: {
    fontSize: fonts.medium,
    letterSpacing: -0.34,
    fontFamily: 'Montserrat-ExtraBold',
    color: colors.coolGrey,
  },
  titleDuration: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.coolGrey,
  },
  titleArrival: {
    fontSize: fonts.medium,
    letterSpacing: -0.29,
    fontFamily: 'Montserrat-ExtraBold',
    color: colors.coolGrey,
  },

  thirdLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  thirdLineText: {
    fontSize: fonts.small,
    textAlign: 'center',
    letterSpacing: -0.29,
    fontFamily: 'Montserrat-Medium',
    color: colors.coolGrey,
  },

  dividingLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.silver,
    borderStyle: 'solid',
    marginVertical: 15,
  },
});

export default styles;
