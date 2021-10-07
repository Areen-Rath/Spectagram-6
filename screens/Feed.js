import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PostCard from './PostCard';

let posts = require('../temp_posts.json');

export default class Feed extends React.Component {
    renderItem = ({ item: post }) => {
        return (
            <View style={styles.cardContainer}>
                <PostCard post={post} navigation={this.props.navigation} />
            </View>
        );
    }

    keyExtractor = (item, index) => index.toString();

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/logo.png')}
                        />
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <FlatList
                    data={posts}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    style={{marginTop: 40}}
                />
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
        marginTop: 20,
        flex: 0.07,
        flexDirection: 'row'
    },
    appIcon: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center'
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(30)
    },
    cardContainer: {
        flex: 0.25
    }
});