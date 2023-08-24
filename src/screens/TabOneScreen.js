// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const TabOneScreen = () => {
//   return (
//     <View>
//       <Text>TabOneScreen</Text>
//     </View>
//   )
// }

// export default TabOneScreen

// const styles = StyleSheet.create({})import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const TabOneScreen = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onProgress = (data) => {
    setCurrentTime(data.currentTime);
  };

  const onLoad = (data) => {
    setDuration(data.duration);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoWrapper} onPress={onPlayPausePress}>
        <Video
          ref={videoRef}
          source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
          style={styles.video}
          paused={paused}
          onProgress={onProgress}
          onLoad={onLoad}
          resizeMode="contain"
        />
        {!paused && (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{currentTime.toFixed(2)}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.playButton} onPress={onPlayPausePress}>
        <Text style={styles.playButtonText}>{paused ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(currentTime / duration) * 100}%` },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 9,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
  },
  playButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
  playButtonText: {
    color: 'white',
    fontSize: 18,
  },
  progressContainer: {
    marginTop: 16,
    width: '100%',
    height: 4,
    backgroundColor: '#D3D3D3',
    borderRadius: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
});

export default TabOneScreen;