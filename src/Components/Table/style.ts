// #region Global Imports
import { StyleSheet } from 'react-native'
// #endregion Global Imports

export default StyleSheet.create({
  container: { flex: 1, width: '80%', margin: 'auto' },
  box: { padding: 10 },
  text: { fontWeight: 'bold' },
  hr: { margin: 10 },
  cardContainer: { flexDirection: 'row' },
  leftPanel: {
    width: '100%',
    height: '100%',
    padding: 40,
    backgroundColor: 'white',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
  },
  leftPanelInner: {
    paddingRight: 80,
  },
  rightPanel: { flex: 1, flexDirection: 'column' },
  rightPanelinner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    padding: 4,
    borderWidth: 0.5,
    borderColor: '#eee',
    marginVertical: '1rem',
    backgroundColor: '#eee',
  },
  mr10: { marginRight: 10 },
  mr20: { marginRight: 20 },
  tableContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableCellHeading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#999',
  },
  tableInnerCell: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  tableCellImage: { width: 50, height: 50, borderRadius: '50%' },
})
