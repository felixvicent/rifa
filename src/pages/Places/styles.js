import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#b8cad4',
    elevation: 2,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontStyle: 'italic',
  }
});

export default styles;