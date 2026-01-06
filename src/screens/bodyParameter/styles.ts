import { StyleSheet } from 'react-native';


const LIME_GREEN = '#CCFA4C';
const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.7)';
const ITEM_HEIGHT = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  MainHeader: {
    marginBottom:13,
  },
  dividerWrapper: {
    paddingBottom: 13,
    paddingInline:16,
  },

  divider: {
    height: 1,
    width:'100%',
    backgroundColor: '#fff',
    opacity:0.3,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 10,
  },
  card: {
    height: 230,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(204, 250, 76, 0.49)',
  },
  overlay: {
    flex: 1,
    backgroundColor: OVERLAY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 17,
    fontFamily: "LufgaMedium",
    fontWeight:500,
    marginBottom: 10,
    paddingTop:10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerWrapper: {
    height: ITEM_HEIGHT * 3,
    width: 65,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  pickerItem: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerText: {
    color: '#888',
    fontSize: 22,
    fontWeight: '500',
    fontFamily: "LufgaMedium",
  },
  pickerTextSelected: {
    color: LIME_GREEN,
    fontSize: 22,
    fontWeight: '500',
    fontFamily: "LufgaMedium",
  },
  unitLabel: {
    color: '#AAA',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '500',
  },
  orText: {
    color: '#FFF',
    fontSize: 16,
    marginHorizontal: 8,
  },
  heightUnitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  prevBtn: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: LIME_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevBtnText: {
    color: LIME_GREEN,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: "LufgaMedium",
  },
  continueBtn: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    backgroundColor: LIME_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: "LufgaMedium",
  },
});

export default styles;
