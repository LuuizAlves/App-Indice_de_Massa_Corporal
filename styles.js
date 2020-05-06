import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    containerInputs: {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 18,
        backgroundColor: '#E5E5E3'
    },

    creator: {
        marginTop: 50,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    
    TextHeader: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 22
    },

    header: {
        backgroundColor: '#00A507',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },

    container: {
        flex: 1,
        backgroundColor: '#334574',
        paddingTop: Constants.statusBarHeight
    },
    
    entradas: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    
    input: {
        height: 80,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '45%',
        fontSize: 40,
        marginTop: 15,
    },
    
    button:{
        marginTop: 9,
        marginBottom: 9,
        backgroundColor: '#00A507',
        borderRadius: 25,
        width: '95%',
        alignSelf: 'center'
    },
    
    buttonText: {
        alignSelf: 'center',
        padding: 30,
        fontSize: 25,
        fontWeight: 'bold',  
    },
    
    resultado: {
        marginTop: 10,
        padding: 10,
        width: '95%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
    
    resultadoNumber: {
        alignSelf: 'center',
        color: 'gray',
        fontSize: 60,
        padding: 15,
    },

    resultadoText: {
        alignSelf: 'center',
        color: 'gray',
        fontSize: 30,
        padding: 15,
    }
});