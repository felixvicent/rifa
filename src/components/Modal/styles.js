import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    elevation: 5,
  },
  infoContainer: {
    padding: 20,
    width: 250,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#b8cad4',
    marginLeft: 15,
    flex: 1,
    fontSize: 18,
  },
  infoPlace: {
    color: '#000',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingBottom: 16,
    justifyContent: 'space-evenly',
    width: 250,
  },
  buttonSave: {
    backgroundColor: '#b8cad4',
    height: 34,
    width: 86,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSaveText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonCancel: {
    height: 34,
    width: 86,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancelText: {
    color: '#000',
    fontSize: 16,
    textTransform: 'uppercase',
  }
});

export default styles;