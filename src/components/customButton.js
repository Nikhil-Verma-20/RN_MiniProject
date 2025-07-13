import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")

const CustomButton = ({ title,onPress,backgroundColor,marginTop}) => {
    return (
        <TouchableOpacity
            style={{
                width: width * 0.9,
                height: 40,
                backgroundColor: backgroundColor ? backgroundColor : 'black',
                alignItems: "center",
                justifyContent: "center",
                alignSelf:"center",
                borderRadius:20,
                marginTop:marginTop
            }}
            onPress={onPress}
        >
            <Text
                style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20,
        color: "white",
    }
})