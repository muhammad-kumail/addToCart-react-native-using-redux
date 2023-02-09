import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { Searchbar } from "react-native-paper";
import Header from '../components/header'
import Item from "../components/item";
import {items} from '../dummyData'

export default function Home({navigation}){
    const [searchQuery, setSearchQuery] = useState('')
    return(
        <View style={{flex: 1}}>
            <Header name={'Available Items'}/>
            <Searchbar
                placeholder="Search"
                onChangeText={query => setSearchQuery(query)}
                value={searchQuery}
            />
            <FlatList
                data={items}
                numColumns={2}
                renderItem={({item,index})=>{
                    if(searchQuery == ''||item.name.toLowerCase().includes(searchQuery.toLowerCase())){
                        return <Item item={item}/>
                    }
                }}
                keyExtractor={(item,index)=>{index.toString()}}
            />
        </View>
    );
}