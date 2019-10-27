import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridTitle = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem} >
            <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }} >
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: "hidden"
    },
    container: {
        flex: 1,
        borderRadius: 10,
        elevation: 3, // For Android Because Shadow does not Work on Adroid
        padding: 15,
        shadowColor: 'black', // for Ios
        shadowOpacity: 0.26, // for Ios
        shadowOffset: { width: 0, height: 2 }, // for Ios
        shadowRadius: 10, // for Ios
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
})

export default CategoryGridTitle;