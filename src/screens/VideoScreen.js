import { Button, StyleSheet, Text, View, Image, SafeAreaView, useColorScheme, ScrollView, FlatList, Pressable, TouchableOpacity, Easing, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { IMAGES, SIZES, COLORS } from '../constants'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheet from 'react-native-simple-bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { BottomSheet } from 'react-native-btr';
// import BottomSheet from 'reanimated-bottom-sheet';

import { SocialIcon } from '@rneui/themed';

import { VideoListItem, VideoPlayers } from '../components';

import { ActionListItem } from '../components';

const VideoScreenRecommendation = () => {
    const { video } = IMAGES;
    const colorScheme = useColorScheme();
    let viewsString = video.views;
    if (viewsString > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + 'm';
    } else if (viewsString > 1_000) {
        console.log(viewsString)
        viewsString = (video.views / 1_000).toFixed(1) + 'k';
        console.log(viewsString)

    }

    const [open, setOpen] = useState(false)
    const openComments = () => {

    }
    const panelRef = React.useRef(null);

    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: colorScheme === 'light' ? COLORS.white : '#2C2C2C',
        }} >
            {/* Video Player */}
            <VideoPlayers videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

            {/* <Image style={styles.videoPlayer} source={{ uri: IMAGES.video.thumbnail }} /> */}
            {/* Video Info */}
            <View style={styles.videoInfoContainer} >
                <Text style={[styles.tags,]} >{video.tags}</Text>
                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.black : COLORS.white }]} >{video.title}</Text>
                <Text style={[styles.subTitle, { color: colorScheme === 'light' ? COLORS.black : COLORS.gray }]} > {video.user.name} {viewsString} {video.createdAt}</Text>
            </View>
            {/* Action List */}
            <View style={styles.actionListContainer} >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.actionListItem}>
                        <Foundation name={'like'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <Foundation name={'dislike'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>
                    <TouchableOpacity style={styles.actionListItem}
                    // onPress={toggleBottomNavigationView}
                    >
                        <MaterialCommunityIcons name={'share'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </TouchableOpacity>
                    <View style={styles.actionListItem}>
                        <Octicons name={'download'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <Entypo name={'scissors'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <AntDesign name={'export'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <AntDesign name={'export'} color={COLORS.lightgrey} size={30} />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>
                </ScrollView>
            </View>
            {/* user Info */}
            <View style={styles.userInfo}>
                <Image style={styles.avatar} source={{ uri: video.user.image }} />
                <View style={{ marginHorizontal: 10, flex: 1 }} >
                    <Text style={{ color: COLORS.white, fontSize: SIZES.large, fontWeight: 'bold' }} > {video.user.name} </Text>
                    <Text style={{ color: COLORS.grey, fontSize: SIZES.font }}> {video.user.subscribers} Subscribers </Text>
                </View>
                <Text style={{ color: COLORS.red, fontSize: SIZES.large, fontWeight: 'bold', padding: 10 }} >SUBSCRIBE</Text>
            </View>
            {/* Comments */}
            <Pressable onPress={openComments} style={{ padding: 10, marginVertical: 10 }} >
                <Text style={{ fontWeight: 'bold', color: COLORS.white, }} >Comments 333</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between', borderWidth: 1, borderColor: 'red' }} >
                    <View style={{ width: '10%', borderWidth: 1, borderColor: 'red' }} >
                        <Image style={{ width: 35, height: 35, borderRadius: 20, }} source={{ uri: video.user.image }} />
                    </View>
                    <View style={{ width: '80%' }} >
                        <Text style={{ marginLeft: 10, color: COLORS.white, marginRight: 20, width: '80%' }}>this channel is addictive for me..</Text>
                    </View>
                    <View style={{ width: '8%' }} >
                        <Entypo name={'chevron-small-right'} color={COLORS.lightgrey} size={25}
                            onPress={() => panelRef.current.togglePanel()}
                        />
                    </View>
                </View>
            </Pressable>
            {/* All Comments Bottom sheet */}
            <BottomSheet
                sliderMinHeight={100}
                animation={Easing.quad}
                wrapperStyle={{
                    backgroundColor: 'green',
                borderRadius: 4
                }}
                lineStyle={{borderRadius: 10, height: 5, width: 60}}
                sliderMaxHeight={Dimensions.get('window').height * 0.6 +5}
                ref={ref => panelRef.current = ref}>


                <Text style={{ color: 'black', backgroundColor: 'red' }}>
                    Some random content
                </Text>
                <View style={{ backgroundColor: 'blue', height: 500 }} />
            </BottomSheet>
            {/* Recommended Videos */}

        </SafeAreaView >
    )
}
const VideoScreen = () => {
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: colorScheme === 'light' ? COLORS.white : '#2C2C2C',
        }} >
            <FlatList
                data={IMAGES.videos}
                renderItem={({ item }) => <VideoListItem video={item} />}
                ListHeaderComponent={VideoScreenRecommendation}
            />

        </SafeAreaView>
    )
}
export default VideoScreenRecommendation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoPlayer: {
        aspectRatio: 16 / 9,
        width: '100%',

    },
    videoInfoContainer: {
        margin: 10

    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: '500',
        marginBottom: 5
    },
    tags: {
        fontSize: SIZES.medium,
        fontWeight: '500',
        color: COLORS.lightblue
    },
    subTitle: {
        fontSize: SIZES.font,
        fontWeight: '500',

    },
    // action List
    actionListContainer: {
        marginVertical: 5,
        // backgroundColor: 'red'

    },
    actionListItem: {
        width: 70,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        // flexDirection: 'row-reverse'
    },
    actionText: {
        color: COLORS.white
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25.
    },
    userInfo: {
        flexDirection: 'row',
        borderColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        padding: 10
    }

})