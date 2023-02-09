import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles';
import ShopCart from './shopCart';

export default function HeaderCart({ name }) {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <View style={{ flex: 1 }}>
                <Icon
                    type='material'
                    name='arrow-back'
                    color={'white'}
                    onPress={()=>navigation.goBack()}
                />
            </View>
            <View style={styles.headerText}>
                <Text style={{ color: 'white', fontSize: 22 }}>{name}</Text>
            </View>
            <View style={styles.headerCartRightIcon}>
                <ShopCart/>
            </View>
        </View>
    );
}
