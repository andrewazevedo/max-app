import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 20,
    padding: 20,
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
  },
  arrowIcon: {
    width: 11,
    height: 5,
  },

  titleIda: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.coolGrey,
  },
  titleIdaResult: {
    fontSize: fonts.small,
    fontWeight: '500',
    color: colors.coolGrey,
  },
});

export default styles;
