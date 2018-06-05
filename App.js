/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { RNCamera } from 'react-native-camera';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homework'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={{height: 70}}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'classroom'}
            title='课堂'
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.tabIcon}
                                     source={{uri: 'classroom'}} />}
            renderSelectedIcon={() => <Image style={[styles.tabIcon]}
                                             source={{uri: 'classroom'}} />}
            onPress={()=>this.setState({ selectedTab:'classroom' })}>
            <View style={styles.classroom}>
              <Text style={{fontSize:18, padding:15, color:'blue'}}>classroom page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'homework'}
            title='搜题'
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.tabIcon}
                                     source={{uri: 'homework'}} />}
            renderSelectedIcon={() => <Image style={[styles.tabIcon]}
                                             source={{uri: 'homework'}} />}
            onPress={()=>this.setState({ selectedTab:'homework' })}>
            <View style={styles.container}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
              />
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                <TouchableOpacity
                  onPress={this.takePicture.bind(this)}
                  style = {styles.capture}
                >
                  <Image style={[styles.tabIcon]} source={{uri: 'picture'}} />
                  <Text style={{fontSize: 14}}> 拍照搜题 </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'remark'}
            title='批阅'
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.tabIcon}
                                     source={{uri: 'remark'}} />}
            renderSelectedIcon={() => <Image style={[styles.tabIcon]}
                                             source={{uri: 'remark'}} />}
            onPress={()=>this.setState({ selectedTab:'remark' })}>
            <View style={styles.homework}>
              <Text style={{fontSize:18, padding:15, color:'blue'}}>remark page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title='我'
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.tabIcon}
                                     source={{uri: 'profile'}} />}
            renderSelectedIcon={() => <Image style={[styles.tabIcon]}
                                             source={{uri: 'profile'}} />}
            onPress={()=>this.setState({ selectedTab:'profile' })}>
            <View style={styles.profile}>
              <Text style={{fontSize:18, padding:15, color:'blue'}}>profile page</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  tabText: {
    fontSize: 16,
    color: '#333'
  },
  selectedTabText: {
    fontSize: 16,
    color: 'green'
  },
  tabIcon: {
    width: 32,
    height: 32
  },
  classroom: {
    backgroundColor: 'white'
  },
  homework: {
    backgroundColor: 'white'
  },
  remark: {
    backgroundColor: 'white'
  },
  profile: {
    backgroundColor: 'white'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
