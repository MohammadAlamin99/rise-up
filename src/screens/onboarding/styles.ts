import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 146,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 9,
    fontFamily: 'LufgaBold',
    maxWidth: '80%',
    fontWeight: 700,
  },
  description: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'LufgaRegular',
    fontWeight: 400,
  },
  button: {
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 44,
    borderRadius: 100,
    backgroundColor: '#CCFA4C',
  },
  buttonText: {
    color: '#161515',
    fontSize: 18,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
  },

  pagination: {
    marginTop: 48,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  dot: {
    width: 16,
    height: 16,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#CCFA4C',
    marginHorizontal: 4,
    borderRadius: 100,
  },

  activeDot: {
    backgroundColor: '#CCFA4C',
  },
});

export default styles;
