import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Separator, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class ListAvatarExample extends Component {
  state: { user: null }

  async componentWillMount() {
    const result = await AsyncStorage.getItem('@authUser')
    this.setState({ user: JSON.parse(result).user });
  }
  
  render() {
    if (this.state) {
    return (
      <Container>
        <Content>
          <List>
            <Separator bordered>
              <Text>TRIBE 1</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: this.state.user.photoUrl }} />
              </Left>
              <Body> 
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: this.state.user.photoUrl }} />
              </Left>
              <Body> 
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: this.state.user.photoUrl }} />
              </Left>
              <Body> 
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: this.state.user.photoUrl }} />
              </Left>
              <Body> 
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: this.state.user.photoUrl }} />
              </Left>
              <Body> 
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
  return <Container />
  }
}
