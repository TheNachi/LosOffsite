import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#EF8E1F',
    flex: 1,
    width: undefined,
    height: undefined,
  },
  text: {
    paddingTop: 10,
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 190,
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 140,
    marginTop: -40,
  }

});

export default styles;
