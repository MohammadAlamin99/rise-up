import { StyleSheet } from 'react-native';

const bgColor = '#161515';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    height: '100%',
    paddingHorizontal: 16,
  },
  card_wrapper: {
    marginTop: 18,
    gap: 10,
  },
  card: {
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 15,
    borderColor: '#CCFA4C80',
  },
  card_Tittle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    marginBottom: 10,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(73, 74, 70, 0.50)',
    paddingVertical: 10,
    width: 55,
    marginInline: 'auto',
    borderWidth: 1,
    borderColor: '#3A4E00',
    borderRadius: 8,
    marginBottom: 10,
  },
  number: {
    fontSize: 22,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    color: 'hsla(0, 0%, 100%, 0.50)',
  },
  activeNumber: {
    fontSize: 22,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    color: '#CCFA4C',
  },
});
