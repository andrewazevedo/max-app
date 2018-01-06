import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    backgroundColor: colors.paleGrey,
  },
  bannerContainer: {
    marginBottom: 20,
  },
  bannerImg: {
    width: metrics.screenWidth,
    height: 138,
  },

  formContainer: {
    width: metrics.screenWidth,
    paddingHorizontal: 20,
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
