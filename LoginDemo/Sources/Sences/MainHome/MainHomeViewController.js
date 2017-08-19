

//主页
//现在又一个问题
// NavigatorIOS, 有IOS后缀的控件只能使用在IOS系统 是否存在一个控件可以在andorid OR IOS 上都可以使用的空间
// 现在刚开始搞React-native 应该已经有前辈 遇到了相同的问题 找到了解决办法，随着后期的学习继续跟进
////yarn add react-native-tab-navigator 添加库

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AlertIOS,
    NavigatorIOS,
    TabBarIOS,
    TextInput
} from 'react-native';
//import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
var Dimensions = require('Dimensions');
//获取屏幕宽度
var screenWidth = Dimensions.get('window').width;

var  MainHomeViewController = React.createClass({

   render(){
       return(
       <View style={styles.container} >
           <TabBarIOS style={{
               height:40,
               width:screenWidth
           }} >
               <TabBarIOS.Item
                    //systemIcon ='bookmarks'
                    title = '首页'
               >
               </TabBarIOS.Item>
                <TabBarIOS.Item
                    //systemIcon="bookmarks"
                    title="收藏"
                >
                </TabBarIOS.Item>


           </TabBarIOS>
       </View>
       );
   }




});


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA', //'#FAFAFA',
        flex: 1,
        alignItems: 'center'
    }
})


module.exports = MainHomeViewController;