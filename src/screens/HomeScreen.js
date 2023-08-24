import { StyleSheet, Text, View, Image, ColorSchemeName, useColorScheme, FlatList, Button } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SHADOWS, SIZES, FONTS } from '../constants'
import Entypo from 'react-native-vector-icons/Entypo';
import { VideoListItem } from '../components';
import VideoUploadScreen from './VideoUploadScreen';
const HomeScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={{
      flex: 1,
      backgroundColor: colorScheme === 'light' ? COLORS.white : COLORS.black,
    }} >
      {/* video component */}
      <FlatList
        data={IMAGES.videos}
        renderItem={({item})=> <VideoListItem video={item} />  }

      />
      {/* <VideoListItem video={IMAGES.videos[0]} />
      <VideoListItem video={IMAGES.videos[1]} />
      <VideoListItem video={IMAGES.videos[2]} /> */}


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
})