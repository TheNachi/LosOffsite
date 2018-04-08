import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#EF8E1F',
    flex: 0,
    width: undefined,
    height: undefined,
  },
  text: {
    paddingTop: 15,
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  theme: {
    fontSize: 16,
  },
  box: {
    height: 20,
    width: 20,
    margin: 10,
    display: 'flex',
    backgroundColor: '#8E4E04'
  },
  boxWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    marginTop: 100,
  },
  logo: {
    width: 200,
    height: 50,
    marginTop: 30
  },
  huntLogo: {
    width: 150,
    height: 150,
    marginTop: 30,
  }

});

export default styles;
