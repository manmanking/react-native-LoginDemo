/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

var LoginView = require('./LoginView');


// export default class LoginDemo extends Component {
//   render() {
//     return (
//         <LoginView></LoginView>
//     );
//   }
// }

var LoginDemo = React.createClass({
    render() {
        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
                    component: LoginView,

                    title: '登录',
                }}
                style={{flex: 1}}
            />


        );
    }


});


AppRegistry.registerComponent('LoginDemo', () => LoginDemo);
