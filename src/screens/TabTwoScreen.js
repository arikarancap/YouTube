import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player'
import { IMAGES } from '../constants'
const TabTwoScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);
  return (
    <View>
      <View style={{ width: '100%', height: 300 }}>
        {/* <Text>VideoPlayer</Text> */}
        {/* <Video
          //  ref={ref => (videoPlayer.current = ref)}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}   // Can be a URL or a local file.
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          paused={!isPlaying}
          controls={true}
          muted={isMuted}
          filter={true}
          filterEnabled={true}
        /> */}
        <VideoPlayer
          video={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}   // Can be a URL or a local file.
          autoplay={false}
          videoWidth={1500}
          videoHeight={800}
          thumbnail={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg" }}
          // resizeMode={'cover'}
          mainColor="#333"
        />
        {/* <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}   // Can be a URL or a local file.
                style={{ width: '100%', height: 200 }}
            /> */}
      </View>
    </View>
  )
}

export default TabTwoScreen

const styles = StyleSheet.create({})