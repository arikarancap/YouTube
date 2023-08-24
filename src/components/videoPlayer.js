import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useRef } from 'react'
import { IMAGES } from '../constants';
import VideoPlayer from 'react-native-video-player'
const VideoPlayers = ({ videoURI, thumbnailURI, endthumbnail, props }) => {
    // const { vieoURI, thumbnailURI } = props;
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isMuted, setIsMuted] = React.useState(false);

    const togglePlaying = () => { };
    const videoPlayer = React.useRef();

    const goFullScreen = () => {
        if (videoPlayer.current) {
            videoPlayer.current.presentFullscreenPlayer();
        }
    };
    return (
        <View>
            {/* <Text>VideoPlayer</Text> */}
            <VideoPlayer
                // video={IMAGES.big_buck_bunny}
                video={{ uri: videoURI }}
                // autoplay={true}
                // videoWidth={1500}
                // videoHeight={800}
                style={{ maxHeight: 300, width: '100%' }}
                thumbnail={{ uri: thumbnailURI }}
                // endThumbnail={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg" }}
                resizeMode={'cover'}
                mainColor="#333"
                controlsTimeout={2000}
                disableControlsautoHide={true}
                showDuration={true}
                hideControlsOnStart={true}
                fullScreenOnLongPress={true}
                seekBarBackground='green'
            // defaultMuted={true}
            // pauseOnPress={true}
            // duration={20}
            // onStart
            // pauseOnPress={true}
            />
        </View>
    )
}

export default VideoPlayers;

// const styles = StyleSheet.create({})