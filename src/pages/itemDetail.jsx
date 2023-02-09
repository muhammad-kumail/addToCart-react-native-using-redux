import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity as Button,
    Image
} from 'react-native'
import {useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements'
import HeaderCart from '../components/headerCart';
import { addToCart } from '../services/actions/action';
import styles from '../styles';

export default function ItemDetail({navigation, route}) {
    const {name, price, image,description} = route.params
    console.log(name, price, image,description)
    const dispatch = useDispatch();
    return (
        <View style={[{flex: 1}]}>
            <HeaderCart name={route.name} />
            <View style={{ flex: 4 }}>
                <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ flex: 6 }}>
                <View style={[{flexDirection: 'row',alignItems: 'center'},styles.itemCard]}>
                    <View style={{flex: 8.5}}>
                        <Text style={{fontSize: 20, color: 'black'}}>{name}</Text>
                    </View>
                    <View style={{flex: 2.5,  alignItems: 'center'}}>
                        <Text style={{fontSize: 20, color: 'black',fontWeight: 'bold'}}>Price</Text>
                        <Text style={{fontSize: 20, color: 'black'}}>{price}/-</Text>
                    </View>
                </View>
                <View style={[{alignItems: 'baseline'},styles.itemCard]}>
                    {description.map((item, index)=>{
                        return(
                            <View key={index} style={{flexDirection: 'row'}}>
                                <Icon
                                    type='entypo'
                                    name='dot-single'
                                    size={25}
                                />
                                <Text style={{fontSize: 16, color: 'gray',alignSelf: 'baseline'}}> {item}</Text>
                            </View>
                        );
                    })}
                </View>
                <Button style={[styles.button,{width: '60%',alignSelf: 'center'}]} activeOpacity={0.4}
                    onPress={()=>dispatch(addToCart({name: name, price: price, image: image}))}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </Button>
                <Button style={[styles.button,{width: '60%',alignSelf: 'center',backgroundColor: '#951117'}]} activeOpacity={0.4}
                    onPress={()=>console.log("pressed buy")}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Button>
            </View>
        </View>
    );
}