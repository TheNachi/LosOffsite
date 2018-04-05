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
    paddingTop: 20
  }
});

export default styles;
