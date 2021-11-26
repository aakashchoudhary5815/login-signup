import React, {useEffect, UseEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function SnackBar({isVisible, timeout = 5000, text, type, boxStyle, textStyle, onClose}){
    useEffect(()=> {
        setTimeout(
            function() {
                console.log("Hiding SnackBar in 5 seconds")
                onClose()
            }, timeout
        )
    },[])
    function renderTypeStyle(type) {
        if (type === "error") {
            return styles.errorBox;
        } else if (type === "success") {
            return styles.successBox;
        } else if (type === "info") {
            return styles.infoBox;
        }

        return "";
    }
    return(
        isVisible?
        <View style={styles.container}>
            <View style={[styles.content, renderTypeStyle(type), boxStyle]}>
                <TouchableOpacity style={styles.closeIcon} onPress = {onClose}>
                    <Text style={styles.closeIconText}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, textStyle]}>{text}</Text>
            </View>
        </View>
        :null
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },

    content: {
        margin: "auto",
        width: "80%",
        borderRadius: 6,
        shadowColor: 'grey',
        shadowOpacity: .8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
        backgroundColor: "#303030",
    },

    closeIcon: {
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        width: 17,
        height: 17,
        marginTop: 2,
        marginRight: 2,
        borderRadius: 50,
        // backgroundColor: "red",
    },

    closeIconText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
    },

    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingHorizontal: 4,
    },

    text: {
        textAlign: "center",
        fontSize: 15,
        color: '#f1f1f1',
    },

    errorBox: {
        backgroundColor: "#da0b0b",
    },

    successBox: {
        backgroundColor: "#00cc00",
    },

    infoBox: {
        backgroundColor: "#00ace6",
    }
});