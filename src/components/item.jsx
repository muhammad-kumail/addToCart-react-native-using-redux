import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Item({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('Detail', item) }}
            style={styles.itemContainer}>
            <View style={{flex: 0.7, width: '100%'}}>
                <Image
                    style={styles.itemImage}
                    source={{ uri: item.image }}
                //   resizeMode="cover"
                />
            </View>
            <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rs: {item.price}</Text>
            </View>
        </TouchableOpacity>
    );
};