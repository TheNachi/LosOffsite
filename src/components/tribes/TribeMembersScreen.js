/* eslint-disable class-methods-use-this */
/* eslint-disable global-require  */
/* eslint-disable require-jsdoc  */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Separator, Spinner, Content, List, ListItem, Body, Text } from 'native-base';
import { database } from '../../firebase';
import styles from './TribeStyles';

export default class ListAvatarExample extends Component {
  state: { user: null }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      tribeData: null
    };
  }

  async componentWillMount() {
    const result = await AsyncStorage.getItem('@authUser');
    this.setState({ user: JSON.parse(result).user });
    database.ref('tribes/')
      .once('value')
      .then(data => this.setState({
        tribeData: data.val()

      }))
      .catch((err) => {
        console.log(err, 'an error occured');
      });
  }

  format(d, tn) {
    const formatedData = [];
    const tribe = d[Object.keys(d).find(t => d[t].tribeName === tn)]; // find the tribe
    Object.keys(tribe).forEach((t) => {
      if (t !== 'tribeName') {
        formatedData.push(Object.values(tribe[t]));
      }
    });
    return formatedData;
  }
  render() {
    const { params } = this.props.navigation.state;
    if (!this.state.tribeData) {
      return (
        <Container>
          <Content>
            <Spinner color='#EF8E1F' />
          </Content>
        </Container>
      );
    }

    if (this.state.tribeData) {
      const tribeData = this.format(this.state.tribeData, params.name);
      return (
      <Container>
        <Content>
          <List>
            <Separator bordered>
              <Text style={styles.text}>{params.name}</Text>
            </Separator>
            {tribeData.map(member => (
                <ListItem key={member[0]} avatar>
                  <Body>
                    <Text>{member[1]}</Text>
                    <Text note>{member[2]}</Text>
                  </Body>
                </ListItem>
              ))}
          </List>
        </Content>
      </Container>
      );
    }
    return <Container />;
  }
}
