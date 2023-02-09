import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles';

export default function Header({ name }) {
   return (
      <View style={styles.headerContainer}>
         <View style={{ flex: 1 }}>
            {/* <Icon
               type='material'
               name='arrow-back'
               color={'white'}
            /> */}
         </View>
         <View style={styles.headerText}>
            <Text style={{ color: 'white', fontSize: 22 }}>{name}</Text>
         </View>
         <View style={styles.headerCartRightIcon}>
            <Icon
               type='entypo'
               name='dots-three-vertical'
               color={'white'}
               onPress={()=>console.log('Three dots icon clicked!')}
            />
         </View>
      </View>
   );
}
