import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Separator, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { database } from '../../firebase';
import TribeScreen from './TribeScreen';

export default class ListAvatarExample extends Component {
  state: { user: null }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      tribeData: null,
    };
  }

  async componentWillMount() {
    const result = await AsyncStorage.getItem('@authUser')
    this.setState({ user: JSON.parse(result).user });
    database.ref(`tribes/`)
      .once('value')
      .then(data => {
        return this.setState({
          tribeData: data.val()
          
        })
      })
      .catch(err => {
        console.log(err, "an error occured")
      })
  }

  format (d, tn) {
    const formatedData = []
    const tribe = d[Object.keys(d).find(t => d[t].tribeName === tn)] // find the tribe
    Object.keys(tribe).forEach((t) => {
      if (t !== 'tribeName') {
        formatedData.push(Object.values(tribe[t]))
      }
    })
    return formatedData
  }
  render() {
    // const hdgd = TribeScreen. ;
    const { params } = this.props.navigation.state

    const tribes = this.state.tribeData
    if (this.state.tribeData) {
      const tribeData = this.format(this.state.tribeData, params.name)
    return (
      <Container>
        <Content>
          <List>
            <Separator bordered>
              <Text>{params.name}</Text>
            </Separator>
            {tribeData.map((member) => {
              return (
                <ListItem key={member[0]} avatar>
                  <Left>
                    <Thumbnail/>
                  </Left>
                  <Body> 
                    <Text>{member[1]}</Text>
                    <Text note>{member[2]}</Text>
                  </Body>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
  return <Container />
  }
}
