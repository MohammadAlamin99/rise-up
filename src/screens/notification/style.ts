import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#161515',
    paddingBottom: 100,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    marginInline: 'auto',
    marginTop: 24,
  },
  container: {
    alignItems: 'center',
    marginInline: 'auto',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    marginInline: 'auto',
    marginTop: 24,
  },
  text2: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'LufgaRegular',
    fontWeight: 400,
    marginInline: 'auto',
    marginTop: 16,
    opacity: 0.5,
    maxWidth: 290,
    textAlign: 'center',
  },
  buttonContainer: {
    marginInline: 16,
  },
});
