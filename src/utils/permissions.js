import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

import { showError } from './helperFunction';



export const chekLocationPermission = (showAlert = true) =>
  new Promise(async (resolve, reject) => {
    try {
      check(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      )
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              showError("LOCATION_UNAVAILABLE");
              break;
            case RESULTS.DENIED:
              request(
                Platform.OS === 'ios'
                  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              )
                .then((result) => {
                  return resolve(result);
                })
                .catch((error) => {
                  return reject(error);
                });

              break;
            case RESULTS.LIMITED:
              showError("LOCATION_LIMITED");
              break;
            case RESULTS.GRANTED:
              return resolve(result);
            case RESULTS.BLOCKED:
              if (showAlert) {
                Alert.alert('', LOCATION_DISABLED_MSG, [
                  {
                    text:"CANCEL",
                    onPress: () => resolve('goback'),
                  },
                  {
                    text: "CONFIRM",
                    onPress: () => {
                      const locationPath = 'LOCATION_SERVICES';
                      openAppSetting(locationPath);
                    },
                  },
                ]);
              }
              return resolve(result);
          }
        })
        .catch((error) => {
          console.log('errorrrrrrrrr', error);
          return reject(error);
        });
    } catch (error) {
      return reject(error);
    }
  });

export const checkContactPermission = () => {
  return new Promise(async (resolve, reject) => {
    try {
      check(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CONTACTS
          : PERMISSIONS.ANDROID.READ_CONTACTS,
      )
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              showError("LOCATION_UNAVAILABLE");
              break;
            case RESULTS.DENIED:
              request(
                Platform.OS === 'ios'
                  ? PERMISSIONS.IOS.CONTACTS
                  : PERMISSIONS.ANDROID.READ_CONTACTS,
              )
                .then((result) => {
                  return reject(result);
                })
                .catch((error) => {
                  return reject(error);
                });

              break;
            case RESULTS.LIMITED:
              showError('The permission is limited: some actions are possible');
              break;
            case RESULTS.GRANTED:
              return resolve(result);
            case RESULTS.BLOCKED:
              Alert.alert('', 'Contact permission permanantly disabled!!', [
                {
                  text:" CANCEL",
                  onPress: () => console.log('Cancle pressed'),
                },
                {
                  text:CONFIRM,
                  onPress: () => {
                    // const locationPath = 'LOCATION_SERVICES';
                    // openAppSetting(locationPath);
                    console.log('Confirm pressed');
                  },
                },
              ]);

              return reject(result);
          }
        })
        .catch((error) => {
          return reject(error);
        });
    } catch (error) {
      return reject(error);
    }
  });
};
