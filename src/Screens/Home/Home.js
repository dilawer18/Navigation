import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import HeaderComp from '../../Components/HeaderComp';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import styles from './style';
import { requestUserNotificationPermission, requestUserPermission } from '../../utils/notificationService';
import { checkContactPermission, chekLocationPermission } from '../../utils/permissions';

const Home = () => {
  useEffect(() => {
    requestUserNotificationPermission()
    
    GoogleSignin.configure();
  }, []);

  const fbLogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('result>>>>>', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.reduce('email')
        ) {
          resCallback({message: 'email is requid'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start()
        }
      },
      function (error) {
        console.log('error', error);
      },
    );
  };
  const onFbLogin=async()=>{
    try {
      await fbLogin()
    } catch (error) {
      console.log('error', error);

    }
  }
  const _responseInfoCallBack= async(error,result)=>{
    if (error) {
      console.log('error', error);

    } else {
      const userData =result
      console.log("fb userData+++++++++",userData)
    }
  }

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo>>>>', userInfo);
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <Text>Home</Text> */}
        <TouchableOpacity style={styles.btnStyle} onPress={
          googleLogin 
        }>
          <Text>Google Login</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',padding:16}}>
        <Text style={{fontSize:18,fontWeight:'bold'}}>OR</Text>
        </View>
       
        <TouchableOpacity style={styles.btnStyle} onPress={onFbLogin}>
          <Text>Facebook Login</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',padding:16}}>
        <Text style={{fontSize:18,fontWeight:'bold'}}>OR</Text>
        </View>
       
        <TouchableOpacity style={styles.btnStyle} onPress={checkContactPermission}>
          <Text>Loction </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Home;
