import * as React from 'react';
import {Text, View, SafeAreaView, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class CaroselSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'India',
          text: 'https://picsum.photos/700',
        },
        {
          title: 'Turkey',
          text: 'https://picsum.photos/700',
        },
        {
          title: 'Usa',
          text: 'https://picsum.photos/200',
        },
        {
          title: 'Uk',
          text: 'https://picsum.photos/300',
        },
        {
          title: 'London',
          text: 'https://picsum.photos/400',
        },
      ],
    };
    this._renderItem = this._renderItem.bind(this);

    // this.onPress = this.onPress.bind(this);
    // this.naVigate=this.props.navigation.navigate('Details');
  }
  // onPress(){
  //   this.props.navigation.navigate('Details')
  // }
  // onPress={this.props.navigation.navigate('Details')}
  _renderItem({item, index}) {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Details')}
        style={{
          height: height * 0.57,
          borderRadius: 32,
          marginTop: 0,
          position: 'relative',
          zIndex: 2,
        }}>
        <View style={{position: 'relative'}}>
          <Card
            style={{
              height: height * 0.57,
              borderRadius: 32,
              marginTop: 0,
              position: 'relative',
              zIndex: 2,
            }}>
            <Card.Cover
              style={{borderRadius: 32, height: height * 0.57, marginTop: 0}}
              source={{uri: item.text}}
            />
          </Card>

          <Card
            style={{
              height: height * 0.2,
              width: width * 0.746,
              borderRadius: 32,
              backgroundColor: 'gainsboro',
              opacity: 0.8,
              position: 'absolute',
              zIndex: 9,
              left: 10,
              bottom: 0,
              top: height * 0.358,
              marginTop: 0,
            }}>
            <Card.Content style={{paddingTop:height*0.049}}>
              <View>

              <Text
                style={{
                  backgroundColor: 'white',
                  width: width*0.2,
                  height:height*0.023,
                  borderRadius: 33,
                  color: 'tomato',
                  fontSize: width*0.029,
                  textAlign:'center',
                  fontWeight:'bold'
                }}>
                {item.title}
              </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                 
                }}>

                <Paragraph style={{fontSize: 20, fontWeight: '900',paddingTop:height*0.02}}>
                  Cappadocia
                </Paragraph>
                <View style={{backgroundColor:'white',width:34,height:32,
                borderRadius:73,alignItems:'center'}}>

                <Ionicons
                  name="cart"
                  style={{color: 'black',padding:3}}
                  size={22}
                />
                </View>

              </View>
              <Title style={{paddingLeft:2,fontSize:18,fontWeight:'bold'}}>$50.0</Title>
            </Card.Content>
          </Card>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'white', marginTop: height * 0.029}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Carousel
            layout={'default'}
            layoutCardOffset={333}
            // ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={width * 0.3}
            itemWidth={width * 0.8}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
            ref={c => {
              this._carousel = c;
            }}
            onPress={() => {
              this._carousel.snapToItem({index});
            }}
            enableSnap={true}
            
            
          />
        </View>
      </SafeAreaView>
    );
  }
}
