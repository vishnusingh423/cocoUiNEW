import * as React from 'react';
import {Dimensions, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CardCustom from './src/CardCustom';
import UserAvatar from 'react-native-user-avatar';
import TopBar from './src/TopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import CaroselSlider from './src/CaroselSlider';
import MyCarousel from './src/MyCarousel';

const Stack = createStackNavigator();
var xH = Dimensions.get('window').height;
var xW = Dimensions.get('window').width;
function MapNavigate() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>MapNavigate!</Text>
    </View>
  );
}

function Whishlist() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Whishlist!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = 27;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'ios-home';
          } else if (route.name === 'Map') {
            iconName = focused ? 'bandage' : 'bandage';
          } else if (route.name === 'Whish') {
            iconName = focused ? 'bookmark-sharp' : 'bookmark-sharp';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'person-sharp' : 'person-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => {
          return null;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {borderTopWidth: 0, elevation: 0},
        tabBarIconStyle: {
          elevation: 0,
          borderRadius: 2,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 0}, // change this for more shadow
          shadowOpacity: 0.3,
          shadowRadius: 6,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapNavigate} />
      <Tab.Screen name="Whish" component={Whishlist} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            shadowOffset: {width: 0, height: 0},
          },
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: () => (
              <View
                style={{
                  width: xW * 0.91,
                  marginBottom: xH * 0.01,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {/* <TopBar /> */}
                <MaterialIcons
                  name="short-text"
                  size={xW*0.09}
                  color={'grey'}
                  onPress={() => alert(1)}
                />

                <Text
                  style={{
                    color: 'tomato',
                    fontSize: xW*0.049,
                    padding: 5,
                    letterSpacing: 2,
                    fontWeight: '900',
                  }}>
                  TOURX
                </Text>

                <UserAvatar
                
                  size={xW*0.091}
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                />
              </View>
            ),
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
