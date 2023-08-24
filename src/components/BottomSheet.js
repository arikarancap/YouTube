import { StyleSheet, Text, View, Dimensions, Animated, PanResponder, useColorScheme } from 'react-native'
import React, { useRef } from 'react';
import { GestureDetector } from 'react-native-gesture-handler'
import { COLORS } from '../constants'
const { height, width } = Dimensions.get('window')
const BOTTOM_SHEET_MAX_HEIGHT = height * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = height * 0.1;
const BottomSheet = () => {
    const colorScheme = useColorScheme();
    const BOTTOM_SHEET_MAX_HEIGHT = height * 0.6;
    const BOTTOM_SHEET_MIN_HEIGHT = height * 0.1;
    const MAX_UPWARD_TRANSLATE_Y =
        BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
    const MAX_DOWNWARD_TRANSLATE_Y = 100;
    const DRAG_THRESHOLD = 50;
    const animatedValue = useRef(new Animated.Value(100)).current;
    const lastGestureDy = useRef(0);
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log('grant', lastGestureDy.current)
                animatedValue.setOffset(lastGestureDy.current);
            },
            onPanResponderMove: (e, gesture) => {
                console.log('Move', gesture.dy)

                animatedValue.setValue(gesture.dy)
            },
            onPanResponderRelease: (e, gesture) => {
                console.log('Release', gesture.dy)

                lastGestureDy.current += gesture.dy;
                // if (gesture.dy > 0) {
                //     // dragging down
                //     if (gesture.dy <= DRAG_THRESHOLD) {
                //         springAnimation('up');
                //     } else {
                //         springAnimation('down');
                //     }
                // } else {
                //     // dragging up
                //     if (gesture.dy >= -DRAG_THRESHOLD) {
                //         springAnimation('down');
                //     } else {
                //         springAnimation('up');
                //     }
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
            <Animated.View style={[styles.bottomSheet, bottomSheetAnimation, { backgroundColor: colorScheme === 'light' ? COLORS.white : '#2C2C2C', }]} >
                <View style={styles.draggableArea} {...panResponder.panHandlers} >
                    <View style={styles.dragHandle} />
                </View>
                <View style={{ position: 'relative', borderRadius: 1, borderColor: 'red' }} >
                    <Text>X</Text>
                </View>
                <Text style={{ color: 'red' }} >BottomSheet{BOTTOM_SHEET_MAX_HEIGHT}min {BOTTOM_SHEET_MIN_HEIGHT} Upward{MAX_UPWARD_TRANSLATE_Y}
                    Min Upward {MAX_DOWNWARD_TRANSLATE_Y}
                </Text>
            </Animated.View>
        </View>
    )
}

export default BottomSheet;

const styles = StyleSheet.create({
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
        // backgroundColor: 'white',
        // borderTopLeftRadius: 32,
        // borderTopRightRadius: 32,
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

