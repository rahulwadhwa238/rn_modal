import React, { useRef, useEffect, useState } from 'react'
import { Pressable, Animated } from 'react-native'
import style from './Modal.style'

export default function Modal({ visible, setVisible, children }) {

    const [hide, setHide] = useState(false)

    const opacity = useRef(new Animated.Value(0)).current

    const fadeAnimation = () => {
        if (visible)
            setHide(true)
        Animated.timing(opacity, {
            useNativeDriver: false,
            toValue: visible ? 1 : 0,
            duration: 200,
        }).start(() => {
            if (!visible)
                setHide(false)
        })
    }

    useEffect(() => {
        fadeAnimation()
    }, [visible])


    return (
        hide &&
        <Animated.View style={{ ...style.parent, opacity: opacity, }}>
            <Pressable
                onPress={() => setVisible(false)}
                style={style.backdrop}
            />
            {children}
        </Animated.View>
    )
}