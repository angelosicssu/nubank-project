import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    news: {
        flexDirection: 'row',
        gap: 20
    },
    containerNews: {
        backgroundColor: '#F0F1F5',
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
        borderRadius: 20
    },
    textNews: {
        fontSize: 15
    },
    textColor: {
        color: '#6954DE'
    }
})