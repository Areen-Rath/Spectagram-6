import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends React.Component {
    render(){
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => this.props.navigation.navigate("Post"), {post: this.props.post}}
            >
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                style={{width: 30, height: 30, borderRadius: 50}}
                                source={require('../assets/profile_img.png')}
                            />
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image
                        style={styles.postImage}
                        source={require('../assets/post.jpeg')}
                    />
                    <View style={styles.captionContainer}>
                        <Text style={styles.caption}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name="heart" size={RFValue(30)} color="white" />
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        marginLeft: RFValue(15),
        marginRight: RFValue(15),
        marginBottom: RFValue(60),
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
    postImage: {
        width: "95%",
        height: RFValue(250),
        alignSelf: 'center',
        resizeMode: "contain"
    },
    captionContainer: {
        margin: RFValue(10)
    },
    caption: {
        fontSize: 15
    },
    actionContainer: {
        padding: RFValue(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "pink",
        borderRadius: RFValue(30)
    },
    likeText: {
        marginLeft: RFValue(5),
        fontSize: RFValue(25),
        color: "white"
    }
});