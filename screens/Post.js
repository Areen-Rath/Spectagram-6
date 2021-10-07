import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Post extends React.Component {
    render(){
        if(!this.props.route.params){
            this.props.navigation.navigate("Home");
        } else {
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
                    <View style={styles.postContainer}>
                        <ScrollView style={styles.postCard}>
                            <View style={styles.authorContainer}>
                                <View style={styles.authorImageContainer}>
                                    <Image
                                        style={{width: 30, height: 30, borderRadius: 50}}
                                        source={require('../assets/profile_img.png')}
                                    />
                                </View>
                                <View style={styles.authorNameContainer}>
                                    <Text style={styles.authorNameText}>{this.props.route.params.post.author}</Text>
                                </View>
                            </View>
                            <Image
                                style={styles.image}
                                source={require('../assets/image_1.png')}
                            />
                            <View style={styles.dataContainer}>
                                <Text>{this.props.route.params.post.caption}</Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                    <Text style={styles.likeText}>12k</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
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
    postContainer: {
        flex: 1
    },
    postCard: {
        margin: RFValue(20),
        backgroundColor: "grey",
        borderRadius: RFValue(20)
    },
    authorContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    authorImageContainer: {
        margin: RFValue(10)
    },
    authorNameContainer: {
        margin: RFValue(10)
    },
    authorNameText: {
        fontSize: 15
    },
    image: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
    },
    dataContainer: {
        flexDirection: 'row',
        padding: RFValue(20)
    },
    actionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});