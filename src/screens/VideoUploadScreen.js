import { StyleSheet, Text, View, Dimensions, Animated, PanResponder } from 'react-native'
import React, { useRef } from 'react';
import { GestureDetector } from 'react-native-gesture-handler'
import { COLORS } from '../constants'
const { height, width } = Dimensions.get('window')
const BOTTOM_SHEET_MAX_HEIGHT = height * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = height * 0.1;
const VideoUploadScreen = () => {
  const BOTTOM_SHEET_MAX_HEIGHT = height * 0.6;
  const BOTTOM_SHEET_MIN_HEIGHT = height * 0.1;
  const MAX_UPWARD_TRANSLATE_Y =
    BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
  const MAX_DOWNWARD_TRANSLATE_Y = 0;
  const DRAG_THRESHOLD = 50;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // console.log('grant', lastGestureDy.current)
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        console.log('Move', gesture.dy)
        // animatedValue.setValue(gesture.dy)
      },
      onPanResponderRelease: (e, gesture) => {
        // console.log('Release', gesture.dy)
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        }
        if (gesture.dy > 0) {
          // dragging down
          console.log("fdsdfs", gesture.dy)
          if (gesture.dy <= DRAG_THRESHOLD) {
            console.log("if part", gesture.dy)
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        }
        // else {
        //   // dragging up
        //   if (gesture.dy >= -DRAG_THRESHOLD) {
        //     springAnimation('down');
        //   } else {
        //     console.log("else part", gesture.dy)

        //     springAnimation('up');
        //   }
        // }
      },


    }),
  ).current
  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const springAnimation = (direction) => {
    console.log('direction', direction);
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]} >
        <View style={styles.draggableArea} {...panResponder.panHandlers} >
          <View style={styles.dragHandle} />

        </View>
        <Text style={{ color: 'red' }} >BottomSheet{BOTTOM_SHEET_MAX_HEIGHT}min {BOTTOM_SHEET_MIN_HEIGHT} Upward{MAX_UPWARD_TRANSLATE_Y}
          Min Upward {MAX_DOWNWARD_TRANSLATE_Y}
        </Text>
      </Animated.View>
    </View>
  )
}

export default VideoUploadScreen

const styles = StyleSheet.create({
  // container: {
  //     height: 500,
  //     width: '100%',
  //     backgroundColor: 'white',
  //     top: height / 1.7,
  //     borderRadius: 25
  // },
  // line: {
  //     width: 75,
  //     height: 4,
  //     backgroundColor: 'grey',
  //     alignSelf: 'center',
  //     borderRadius: 2,
  //     marginVertical: 15,



  // }
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen'
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
})