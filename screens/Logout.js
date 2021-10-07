import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Logout extends React.Component {
    componentDidMount(){
        firebase.auth().signOut();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Logout</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});