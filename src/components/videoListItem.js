import { StyleSheet, Text, View, Image, ColorSchemeName, useColorScheme, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SHADOWS, SIZES, FONTS } from '../constants'
import Entypo from 'react-native-vector-icons/Entypo';
import  VideoPLayer  from './videoPlayer';

const VideoListItem = (props) => {
    // console.log(props)
    // const video =props.video;
    const { video } = props;
    const colorScheme = useColorScheme();
    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;
    let viewsString = video.views;
    if (viewsString > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + 'm';
    } else if (viewsString > 1_000) {
        console.log(viewsString)
        viewsString = (video.views / 1_000).toFixed(1) + 'k';
        console.log(viewsString)

    }
    return (
        <View style={styles.videoCard} >
            {/* thumbNail */}
            <View>
                <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
                <View style={styles.timeContainer} >
                    <Text style={styles.time} > {minutes}:{seconds < 10 ? '0' : ''}{seconds}  </Text>
                </View>
            </View>
            {/* Title Row */}
            <View style={styles.titleRow} >
                {/* Avatar */}
                <Image style={styles.avatar} source={{ uri: video.user.image }} />

                {/* Middle container: Title,subTitle,etc.., */}
                <View style={styles.middleContainer} >
                    <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.black : COLORS.white }]} >{video.title}</Text>
                    <Text style={[styles.subTitle, { color: colorScheme === 'light' ? COLORS.black : COLORS.gray }]} > {video.user.name} {viewsString} {video.createdAt}</Text>
                </View>
                {/* Icon */}
                <Entypo name={'dots-three-vertical'} size={SIZES.medium} color={colorScheme === 'light' ? COLORS.black : COLORS.white} />
                {/* <Button title='Press'
            onPress={() => {
              console.log('Press', colorScheme)
            }}
          /> */}
            </View>

        </View>

    )
}

export default VideoListItem;

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    timeContainer: {
        backgroundColor: COLORS.lightblack,
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    time: {
        color: 'white',
        fontWeight: 'bold'
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25.
    },
    middleContainer: {
        marginHorizontal: 10,
        flex: 1,
        // backgroundColor: 'green'

    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,
        // borderWidth: 1,
        // borderColor: 'white',
        // margin: 10
    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: '500',
        marginBottom: 5
    },
    subTitle: {
        fontSize: SIZES.font,
        fontWeight: '500',
        // textAlign: 'justify',

    },
    videoCard: {

    }


})