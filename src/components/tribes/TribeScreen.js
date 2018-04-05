import React, { Component } from 'react';
import R from 'ramda';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { StyleSheet, ImageBackground, Alert, TouchableHighlight, View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { database } from '../../firebase';


const flatMap = (obj) => {
  const keys = R.keys(obj);
  const names = [];
  keys.forEach((key) => {
    const name = obj[key];
    names.push(name);
  });
  return names;
};

const getTribeNames = R.compose(
  flatMap,
  R.forEach(item => item),
  R.map(item => item.tribeName)
);

export default class TribeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      // showAlert: false,
      tribeData: {},
      selected: '',
    };
  }

  componentDidMount() {
    database.ref('tribes/')
      .once('value')
      .then((data) => this.setState({
          tribeData: data.val()
        }))
      .catch((err) => {
        console.log(err, 'an error occured');
      });
  }

  showAlert = (item) => {
    console.log('user', item);
    this.setState({
      showAlert: true,
      selected: item,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    // console.log('tribeData', this.state.tribeData);

    const tribeNames = getTribeNames(this.state.tribeData);
    // console.log(tribeNames, 'tribeNames');


    const tribes = R.keys(this.state.tribeData);
    // console.log(tribes, 'tribes');

    const { showAlert, selected } = this.state;
    const items = tribeNames;
    return (
      <ImageBackground
        source={require('../../assets/app-background.jpg')}
        style={styles.container}
        >
        <View style={styles.container1}>
            <List dataArray={items}
              renderRow={item =>
                <ListItem onPress = {() => this.showAlert(item)} style ={styles.button} style={styles.card}>
                  <Text style={styles.text}>{item}</Text>
                </ListItem>
              }>
            </List>
            <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Hey, do you want to view tribe details or the members?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          messageStyle={styles.alertMessage}
          showCancelButton={true}
          cancelButtonStyle={styles.cancelButton}
          confirmButtonStyle={styles.confirmButton}
          showConfirmButton={true}
          cancelText="Tribe Detals"
          confirmText="Tribe Members"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => { this.props.navigation.navigate('tribeDetails', { tribeName: 'Zamunda'}), this.hideAlert() } }
          onConfirmPressed={() => { this.props.navigation.navigate('tribeMembers', { name: selected }), this.hideAlert(); } }
          contentContainerStyle={styles.alertBox}
          alertContainerStyle={styles.alertContainer}
        />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
  text: {
    // padding: 5
  },
  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 100
  },
  alertContainer: {
    // position: 'absolute',
    // top: 20,
  },
  alertBox: {
    width: 300,
    height: 350,
    marginTop: 150,
    padding: 40,
  },
  alertMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
