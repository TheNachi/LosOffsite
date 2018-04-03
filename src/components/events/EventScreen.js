/* eslint-disable class-methods-use-this */
/* eslint-disable global-require  */
import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Container, Content } from 'native-base';
import schedule from './EventSchedule';
import styles from './EventStyles';

/**
 * Event Screen component
 */
class EventScreen extends React.Component {
  /**
   * Component render method
   *
   * @returns {Node} jsx
   */
  render() {
    return (
      <ImageBackground
      style={styles.imageBackground}
      source={require('../../assets/app-background.jpg')}
      >
        <Container>
          <Content padder>
            <View style={styles.tableView}>
              <Table borderStyle={{ borderColor: '#D3D3D3' }} style={{ backgroundColor: '#FFFFFF' }}>
                <Row
                  data={schedule.tableHead}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.text}
                />
                <Row
                  style={styles.row}
                  data={['Bootcamp']}
                  textStyle={styles.headersText}
                />
                <Rows
                  data={schedule.bootcampGames}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.text}
                />
                <Row
                  style={styles.row}
                  data={['Minefield']}
                  textStyle={styles.headersText}
                />
                <Rows
                  data={schedule.minefieldGames}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.text}
                />
                <Row
                  style={styles.row}
                  data={schedule.ingredientE}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.headersText}
                />
                <Rows
                  data={schedule.ingredientEAnnouncement}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.text}
                />
                <Row
                  style={styles.row}
                  data={schedule.lunch}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.headersText}
                />
                <Row
                  style={styles.row}
                  data={['Survivor']}
                  textStyle={styles.headersText}
                />
                <Rows
                  data={schedule.survivorGames}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.text}
                />
                <Row
                  style={styles.row}
                  data={['Ingredient E']}
                  textStyle={styles.headersText}
                />
                <Rows
                  data={schedule.ingredientESchedule}
                  flexArr={[1, 1, 2, 1, 1, 1]}
                  textStyle={styles.text}
                />
              </Table>
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default EventScreen;
