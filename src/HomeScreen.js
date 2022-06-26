import React from 'react';
import {
  View,
  Text,
  LogBox,
  StatusBar,
  Dimensions,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, Card, Title, Paragraph, Searchbar} from 'react-native-paper';

import UserAvatar from 'react-native-user-avatar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CardCustom from './CardCustom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import {ScrollView} from 'react-native-gesture-handler';
import CaroselSlider from './CaroselSlider';
import MyCarousel from './MyCarousel';

const Stack = createStackNavigator();
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

var heigh = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: width * 0.048,
        height: heigh * 0.9,
      }}>
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <View style={{}}>
        <Text
          style={{
            color: 'black',
            fontSize: width * 0.071,
            fontWeight: 'bold',
            textAlign: 'left',
          }}>
          {' '}
          Discover{'\n'} A New World
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: heigh * 0.04,
        }}>
        <View style={styles.mainbox}>
        
            <Searchbar
            iconColor='tomato'
              placeholder="Search Places"
              placeholderTextColor={'tomato'}
              
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{borderRadius:22 ,backgroundColor:'white', width:width*0.75,
            
            }}
              
            />
      
        </View>
        <View
          style={{
            backgroundColor: 'tomato',
            borderRadius: 13,
            elevation: 0,
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 2}, // change this for more shadow
            shadowOpacity: 0.2,
            shadowRadius: 8,
            padding: 12,
          }}>
          <Ionicons name="options-outline" style={{color: 'white'}} size={22} />
        </View>
      </View>

      <CaroselSlider navigation={navigation} />
    </View>
  );
}

const globalStyles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 13,
    backgroundColor: 'white',
    width: width * 0.7,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0}, // change this for more shadow
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
    marginLeft: 1,
    borderRadius: 33,
    color: 'tomato',
  },
});
const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 15,
    fontSize: 35,
  },
  mainbox: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  databeBox: {
    margin: 10,
    textAlign: 'center',
  },
  databeHeader: {
    margin: 10,
    textAlign: 'left',
  },
});
