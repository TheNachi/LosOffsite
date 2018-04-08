/* eslint-disable class-methods-use-this */
/* eslint-disable global-require  */
/* eslint-disable require-jsdoc  */
import React, { Component } from 'react';
import R from 'ramda';
import { Container, Content, List, ListItem, Text, Spinner } from 'native-base';
import { ImageBackground, View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { database } from '../../firebase';
import styles from './TribeStyles';


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
      hasLoadedData: false,
      data: null,
      showAlert: false,
      tribeData: {},
      selected: '',
    };
  }

  componentDidMount() {
    database.ref('tribes/')
      .once('value')
      .then(data => this.setState({
        tribeData: data.val(),
        hasLoadedData: true
      }))
      .catch((err) => {
        console.log(err, 'an error occured');
      });
  }

  showAlert = (item) => {
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
    const tribeNames = getTribeNames(this.state.tribeData);
    const { showAlert, selected } = this.state;
    const items = tribeNames;

    if (!this.state.hasLoadedData) {
      return (
        <Container>
          <Content>
            <Spinner color='#EF8E1F' />
          </Content>
        </Container>
      );
    }

    return (
      <ImageBackground
        source={require('../../assets/App-backgroud.png')}
        style={styles.container}
        >
        <View style={styles.container1}>
            <List dataArray={items}
              renderRow={item =>
                <ListItem onPress = {() => this.showAlert(item)} style ={styles.button} style={styles.card}>
                  <Text style={styles.membersText}>{item}</Text>
                </ListItem>
              }>
            </List>
            <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Hey, do you want to view tribe details or tribe members?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          messageStyle={styles.alertMessage}
          showCancelButton={true}
          cancelButtonStyle={styles.cancelButton}
          confirmButtonStyle={styles.confirmButton}
          showConfirmButton={true}
          cancelText="Tribe Details"
          confirmText="Tribe Members"
          confirmButtonColor="#EF8E1F"
          cancelButtonColor="#EF8E1F"
          onCancelPressed={() => { this.props.navigation.navigate('tribeDetails', { tribeName: selected }), this.hideAlert(); } }
          onConfirmPressed={() => { this.props.navigation.navigate('tribeMembers', { name: selected }), this.hideAlert(); } }
          contentContainerStyle={styles.alertBox}
          alertContainerStyle={styles.alertContainer}
        />
        </View>
      </ImageBackground>
    );
  }
}
