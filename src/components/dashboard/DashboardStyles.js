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
    height: 150,
    width: 300,
    marginTop: 40,
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row'
  },
  userText: {
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20
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
