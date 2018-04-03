import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { StyleSheet, ImageBackground, Alert, TouchableHighlight, View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class TribeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const { showAlert } = this.state;
    const items = ['Tribe 1', 'Tribe 2', 'Tribe 3', 'Tribe 4', 'Tribe 5'];
    return (
      <ImageBackground
        source={require('../../assets/app-background.jpg')}
        style={styles.container}
        >
        <Container>
          <Content>
            <List dataArray={items}
              renderRow={item =>
                <ListItem onPress = {this.showAlert} style = {styles.button} style={styles.card}>
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
          onCancelPressed={() => { this.props.navigation.navigate('tribeDetails'), this.hideAlert() } }
          onConfirmPressed={() => { this.props.navigation.navigate('tribeMembers') , this.hideAlert() } }
          contentContainerStyle={styles.alertBox}
        />
          </Content>
        </Container>
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
  card: {
    backgroundColor: '#ffffff',
    margin: 10,
    marginRight: 15,
    paddingLeft: 10,
    borderRadius: 5,
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
