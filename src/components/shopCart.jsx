import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity as Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import styles from '../styles';
import { removeFromCart } from '../services/actions/action';

export default function ShopCart(props) {
    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartItems.cartData)
    const [isModal, setIsModal] = useState(false)
    useEffect(() => {
        console.log("HEllo: ", cartData)
    }, [cartData])
    const toggleModal = () => {
        setIsModal(!isModal);
    };
    const openCartModel = () => {
        return (
            <Modal
                isVisible={isModal}
                onBackdropPress={() => setIsModal(false)}
                onBackButtonPress={() => setIsModal(false)}
                swipeDirection="left"
                onSwipeComplete={() => setIsModal(false)}
                hideModal={() => setIsModal(false)}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                style={{
                    backgroundColor: 'white',
                    marginVertical: 180,
                    justifyContent: 'flex-start',
                    borderRadius: 10
                }}
            >
                <FlatList
                    data={cartData}
                    ListHeaderComponent={()=>{
                        return <Text style={styles.mediumText}>All Items</Text>
                    }}
                    ListFooterComponent={() => {
                        return (
                            <Button disabled={cartData.length == 0} style={[styles.button, { width: '60%', alignSelf: 'center', backgroundColor: cartData.length == 0?'gray':'#951117' }]} activeOpacity={0.4}
                                onPress={() => console.log("pressed buy")}>
                                <Text style={styles.buttonText}>Buy</Text>
                            </Button>
                        );
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ backgroundColor: 'white', flexDirection: 'row', elevation: 4, margin: 10, padding: 10, paddingRight: 1, borderRadius: 15 }}>
                                <View style={{ flex: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 2, marging: 5 }}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{ width: 50, height: 50, borderRadius: 10 }}
                                        />
                                    </View>
                                    <View style={{ flex: 8, marging: 5 }}>
                                        <Text style={{ marginVertical: 3, color: 'black' }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Price: </Text>
                                            <Text>{item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, top: -5, paddingTop: 5 }}>
                                    <Icon
                                        type='entypo'
                                        name='cross'
                                        color={'red'}
                                        size={25}
                                        onPress={() => dispatch(removeFromCart(index))}
                                    />
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Modal>
        );
    }
    useEffect(() => { openCartModel() }, [isModal])
    return (
        <View style={{ alignItems: 'center' }}>
            {openCartModel()}
            <View style={{ backgroundColor: cartData.length == 0 || !cartData ? null : 'white', borderRadius: 25, right: -10, top: 5 }}>
                {cartData.length == 0 || !cartData ?
                    <Text style={{ paddingHorizontal: 5, padding: 1 }}> </Text> :
                    <Text style={{ color: 'black', paddingHorizontal: 5, padding: 1 }}>{cartData?.length}</Text>
                }
            </View>
            <View style={{ top: -6 }}>
                <Icon
                    type='entypo'
                    name='shopping-cart'
                    color={'white'}
                    size={35}
                    onPress={() => toggleModal()}
                />
            </View>
        </View>
    );
}
