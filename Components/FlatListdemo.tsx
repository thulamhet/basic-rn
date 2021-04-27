import React from 'react';
import {SafeAreaView, Text, FlatList, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const DATA = [
    {title: 'dore', price: '100$'},
    {title: 'nobita', price: '100$'},
    {title: 'dekhi', price: '100$'},
    {title: 'chaien', price: '100$'},
    {title: 'suneo', price: '100$'},
    {title: 'xuka', price: '100$'}
];

const Item = ({ title, price}) => (
    <TouchableOpacity onPress={() => alert('price ' + `${price}`)}>
        <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>
        </View>
    </TouchableOpacity>
  );

const FlatListTest = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} price={item.price}/>
      );
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <FlatList
                data = {DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 12,
        width: 175,
        height: 150,
        backgroundColor: 'white',
        borderColor: '#dfe6e9',
        borderWidth: 0.5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 40,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginLeft: 25,
    }
  });
export default FlatListTest;