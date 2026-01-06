import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const LIME_GREEN = '#D7FF51';
const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.7)';
const ITEM_HEIGHT = 45;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  divider: {
    height: 1,
    width: width * 0.9,
    backgroundColor: '#2A2A2A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#222',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
  },
  pickerItem: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerText: {
    color: '#888',
    fontSize: 20,
    fontWeight: '600',
  },
  pickerTextSelected: {
    color: LIME_GREEN,
    fontSize: 24,
    fontWeight: 'bold',
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
    fontWeight: '700',
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
    fontWeight: '700',
  },
});

export default styles;
