import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  inputContainer: {
    height: 54,
    padding: 15,
    marginBottom: 20,
    fontFamily: 'Montserrat-Medium',
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.silver,
  },
});

export default styles;
