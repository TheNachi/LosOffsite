import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1
  },
  main: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10
  },
  tribeName: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20
  },
  gameName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'orange',
    marginBottom: 5
  },
  gameView: {
    borderTopWidth: 2,
    borderTopColor: '#D3D3D3',
    paddingTop: 20,
    marginTop: 10
  },
  text: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 25,
  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    paddingTop: 30,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 10,
    marginRight: 15,
    paddingLeft: 10,
    flex: 1,
    borderRadius: 5,
    width: 350
  },
  membersText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50
  },

  alertBox: {
    width: 300,
    height: 300,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
  },
  alertMessage: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    lineHeight: 30,
  },
  cancelButton: {
    marginTop: 80,
    width: 120,
    height: 35,

  },
  confirmButton: {
    width: 120,
    height: 35,
  },
});

export default styles;
