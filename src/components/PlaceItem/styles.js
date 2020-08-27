import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  placeNumber: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#777',
    minWidth: 20,
  },
  checkContainer: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: 'center',
  },
  placeName: {
    marginHorizontal: 20,
    height: 30,
    width: 200,
    justifyContent: 'center',
  },
  placeNameText: {
    fontSize: 18,
    color: '#000'
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#b8cad4',
    width: 160,
    marginHorizontal: '30%',
    height: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;