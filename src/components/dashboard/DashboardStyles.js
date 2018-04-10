import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1
  },
  content: {
    alignItems: 'center'
  },
  view: {
    backgroundColor: '#FFFFFF',
    width: 350,
    marginTop: 40,
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row'
  },
  tableView: {
    backgroundColor: '#FFFFFF',
    width: 350,
    marginTop: 40,
    borderRadius: 10,
    padding: 20
  },
  rowText: {
    margin: 6,
    color: '#5D5D5D'
  },
  userText: {
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20
  },
  tableHeaderText: {
    fontWeight: 'bold',
    margin: 6
  },
  text: {
    color: '#5D5D5D',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5
  },
  dynamicText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;
