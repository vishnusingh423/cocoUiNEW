import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Preview from './src/Preview';
import FlatListSlider from './CaroselCustom/FlatListSlider';
// import {FlatListSlider} from 'react-native-flatlist-slider';

export default class ImageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 1,
          image:
            'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          key: 1,

          image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
          desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
          key: 1,

          image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc: 'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc: 'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          desc: 'Sample Description below the image for representation purpose only',
        },
      ],
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatListSlider
            data={this.state.data}
            imageKey={'image'}
            local={false}
            width={screenWidth}
            separator={0}
            loop={true}
            autoscroll={true}
            currentIndexCallback={index => console.log('Index', index)}
            onPress={item => alert(JSON.stringify(item))}
            indicator
            animation
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
});
