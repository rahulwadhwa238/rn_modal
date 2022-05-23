import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backdrop: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#C2C2C2',
        opacity: 0.9,
    }
})