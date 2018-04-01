/* eslint-disable class-methods-use-this */
import React from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Container, Content } from 'native-base';
import schedule from './EventSchedule';

/**
 * Event Screen component
 */
class EventScreen extends React.Component {
  /**
   * Called when component has mounted
   *
   * @returns {undefined}
   */
  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  /**
   * Component render method
   *
   * @returns {Node} jsx
   */
  render() {
    return (
      <Container>
        <Content padder>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Table>
              <Row data={schedule.tableHead} />
              <Row data={['Bootcamp']} />
              <Rows data={schedule.bootcampGames} />
              <Row data={['Minefield']} />
              <Rows data={schedule.minefieldGames} />
              <Row data={schedule.ingredientE} />
              <Rows data={schedule.ingredientEAnnouncement} />
              <Row data={schedule.lunch} />
              <Row data={['Survivor']} />
              <Rows data={schedule.survivorGames} />
              <Row data={['Ingredient E']} />
              <Rows data={schedule.ingredientESchedule} />
            </Table>
          </View>
        </Content>
      </Container>
    );
  }
}

export default EventScreen;
