import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {View, Text} from 'react-native-animatable';
import CardCustom from './CardCustom';
const hD = Dimensions.get('window').height;
const wD = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Banner} from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from 'react-native-paper';
const Stack = createNativeStackNavigator();
const DetailScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          margin: hD * 0.01,
          paddingTop: hD * 0.001,
          position: 'relative',
        }}>
        <View style={{position: 'relative', zIndex: 2}}>
          <AntDesign
            name="leftcircle"
            size={30}
            color={'white'}
            style={{position: 'absolute', top: 18, left: 15, zIndex: 99999}}
            onPress={() => navigation.navigate('Home')}
          />
          <Text
            style={{
              position: 'absolute',
              top: 18,
              left: wD * 0.37,
              zIndex: 99999,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Trip Details
          </Text>

          <AntDesign
            name="infocirlce"
            size={30}
            color={'white'}
            style={{
              position: 'absolute',
              top: 18,
              left: wD * 0.853,
              zIndex: 99999,
            }}
          />

          <CardCustom h={hD * 0.9} w={wD*0.964} style={{}} r={22}/>
        </View>

        <View
          style={{
            position: 'absolute',
            zIndex: 23,

            marginTop: hD*0.36,
            display: 'flex',
            flexDirection: 'row',
            alignSelf:'center'
          }}>
          
            <CardCustom h={140} w={80} m={5} r={22} />
          

        
            <CardCustom h={140} w={80} m={5} r={22}/>
          

        
            <CardCustom h={140} w={80} m={5} r={22}/>


            <CardCustom h={140} w={80} m={5} r={22}/>

          
        </View>

        <View style={{margin: wD * 0.02}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hD * 0.02,
            }}>
            <Text
              style={{
                color: 'tomato',
                fontSize: wD * 0.04,
                fontWeight: 'bold',
                textAlign: 'left',
              }}>
              India
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: wD * 0.071,
                fontWeight: 'bold',
                textAlign: 'left',
              }}>
              $150.00
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: 'black',
                fontSize: wD * 0.071,
                fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Cappadocia
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: hD * 0.02,
            }}>
            <View
              style={{
                width: wD * 0.22,
                height: hD * 0.03,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <AntDesign name="star" size={18} color={'tomato'} />

              <Text>5.0</Text>
            </View>
            <View
              style={{
                width: wD * 0.22,
                height: hD * 0.03,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <AntDesign name="clockcircle" size={18} color={'tomato'} />

              <Text>35.0 min</Text>
            </View>
            <View
              style={{
                width: wD * 0.22,
                height: hD * 0.03,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Entypo name="location-pin" size={25} color={'tomato'} />

              <Text>20km</Text>
            </View>
          </View>

          <View style={{marginTop: hD * 0.02}}>
            <Text style={{color: 'grey', fontSize: hD * 0.02}}>
              React Native is an open-source UI software framework created by
              Meta Platforms, Inc. It is widely used to develop applications for
              Android, Android TV, tvOS, Web, Windows, iOS, macOS, and UWP. It
              offers native platform capabilities to build natively-rendered
              apps for iOS and Android using the same codebase.
            </Text>
          </View>

          <View style={{marginTop: hD * 0.02 ,display:'flex',alignItems:'center'}}>
            <TouchableOpacity style={styles.roundButton1}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
                Book Now
              </Text>

              <Entypo name="chevron-right" size={25} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    display: 'flex',
    flexDirection: 'row',
    width: wD * 0.8,
    height: hD * 0.077,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'tomato',

    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
});
