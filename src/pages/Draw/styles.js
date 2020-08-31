import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawContainer: {
    backgroundColor: '#b8cad4',
    width: 200,
    height: 200,
    borderRadius: 36,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawNumber: {
    fontSize: 78,
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  drawButton: {
    marginTop: 20,
    height: 48,
    width: 200,
    backgroundColor: '#f97068',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawButtonText: {
    color: '#fff',
    fontSize: 24,
    textTransform: 'uppercase',
    fontStyle: 'italic',
    elevation: 5,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginTop: 200,
    height: 240,
    marginHorizontal: 50,
    borderRadius: 60,
    elevation: 5,
  },
  luckyTitle: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#f97068',
  },
  luckyName: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  closeButton: {
    marginTop: 70,
    marginBottom: -70,
  }
});

export default styles;