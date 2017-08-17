import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NavigatorIOS,
    Image
} from 'react-native';



var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var LoginViewController = require('./LoginViewController')


var LoginView = React.createClass({


//class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />*/}
                {/*<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />*/}
                {/*<View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />*/}
                <View style={styles.topViewContainer}>
                    <Image source={require('./Sources/Image/login_large_ic.png')}
                           style={styles.topImageStyle}/>
                </View>
                {/** 用于与登录相关的按钮 */}
                <View style={styles.bottomViewContainer}>
                    <TouchableOpacity onPress={()=>this.loginInAction()}>
                    <View style={styles.loginByPhoneButtonContainer}>
                        <Text style={styles.loginByPhoneBtnTitle}>手机登录</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerButtonTitle}>立即注册</Text>
                    </View>
                    <View style={styles.loginByOtherContainer}>

                        {/*分割线*/}
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={styles.splitLine}></View>
                            <Text style={styles.loginThirdTipTitle}>其它方式登录</Text>
                            <View style={styles.splitLine}></View>
                        </View>
                        <View style={styles.loginThirdButtonContainer}>
                            <Image source={require('./Sources/Image/ic_qq_login_normal.png')}
                                   style={styles.loginThirdButtonStyle}/>
                            <Image source={require('./Sources/Image/ic_weixin_login_normal.png') }
                                    style={styles.loginThirdButtonStyle} />
                            <Image source={require('./Sources/Image/ic_weibo_login_normal.png')}
                                    style={styles.loginThirdButtonStyle} />
                            <Image source={require('./Sources/Image/ic_tencent_login_normal.png')}
                                   style={styles.loginThirdButtonStyle} />
                            <Image source={require('./Sources/Image/ic_renren_login_normal.png')}
                                    style={styles.loginThirdButtonStyle}/>


                        </View>


                    </View>

                </View>
            </View>

        );

    },

    loginInAction:function () {
        console.log('手机号登录');
        this.props.navigator.push({
            component:LoginViewController,
            title:'手机号登录'
        });
    }


});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    topViewContainer: {
        flex: 3,
        marginTop: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //底部样式
    bottomViewContainer: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    //顶部图片的样式
    topImageStyle: {
        width: screenWidth * 0.5,
        height: screenWidth * 0.5
    },
    //手机号登陆按钮样式
    loginByPhoneButtonContainer: {
        backgroundColor: 'red',
        width: 0.5 * screenWidth,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //按钮文字样式
    loginByPhoneBtnTitle: {
        color: 'white',
        fontSize: 18
    },
    //立即注册按钮样式
    registerButtonContainer: {
        //backgroundColor:
        width: 0.5 * screenWidth,
        height: 35,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10

    },
    registerButtonTitle: {
        color: 'red',
        fontSize: 18,
    },
    loginByOtherContainer: {
        backgroundColor:'white',
        width: screenWidth,
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    //分割线
    splitLine: {
        backgroundColor: 'gray',
        height: 1,
        width: screenWidth * 0.25,
        marginLeft: 10,
        marginRight: 10
    },
    loginThirdTipTitle: {
        color: 'gray',
        fontSize: 17
    },

    loginThirdButtonContainer:{
        flexDirection:'row',
        marginTop:10
    },
    loginThirdButtonStyle:{
      height:40,
      width:40,
      marginLeft:5

    }


});
module.exports = LoginView;