import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, StatusBar, SafeAreaView, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

export default class Login extends React.Component {
    isUserEqual = (googleUser, firebaseUser) => {
        if(firebaseUser){
            var providerData = firebaseUser.providerData;
            for(var i = 0; i < providerData.length; i++) {
                if(
                    providerData[i].providerId ===
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()
                ){
                    return true;
                }
            }
        }
        return false;
    };

    onSignIn = googleUser => {
        var unsubsribe = firebase.auth().onAuthStateChanged(firebaseUser => {
            unsubsribe();
            if(!this.isUserEqual(googleUser, firebaseUser)){
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );

                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(function(result){
                        if (result.additionalUserInfo.isNewUser) {
                        firebase
                            .database()
                            .ref("/users/" + result.user.uid)
                            .set({
                                gmail: result.user.email,
                                profile_picture: result.additionalUserInfo.profile.picture,
                                locale: result.additionalUserInfo.profile.locale,
                                first_name: result.additionalUserInfo.profile.given_name,
                                last_name: result.additionalUserInfo.profile.family_name
                            })
                            .then(function(snapshot){});
                        }
                    })
                    .catch(error => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        var email = error.email;
                        var credential = error.credential;
                    })
            } else {
                console.log("User already signed in.");
            }
        });
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behavior: "web",
                androidClientId: "473276612089-8rqbbun5rtu181s8i5somf3393c24jth.apps.googleusercontent.com",
                iosClientId: "473276612089-q91m25i7bvq9a2mpmre316velt9992f4.apps.googleusercontent.com",
                scopes: ['profile', 'email']
            });

            if(result.type === "success"){
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { canceled: true }
            }
        } catch(e){
            console.log(e.message);
            return { error: true }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <Image
                        style={styles.appIcon}
                        source={require('../assets/logo.png')}
                    />
                    <Text style={styles.appTitleText}>Spectagram</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.signInWithGoogleAsync()}>
                        <Image
                            style={styles.googleIcon}
                            source={require('../assets/google_icon.png')}
                        />
                        <Text style={styles.googleText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    appTitle: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appIcon: {
        width: RFValue(130),
        height: RFValue(130),
        resizeMode: "contain"
    },
    appTitleText: {
        color: "white",
        textAlign: 'center',
        fontSize: RFValue(40),
    },
    buttonContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: RFValue(30),
        backgroundColor: "white"
    },
    googleIcon: {
        width: RFValue(30),
        height: RFValue(30),
        resizeMode: "contain"
    },
    googleText: {
        color: "black",
        fontSize: RFValue(20),
    }
});