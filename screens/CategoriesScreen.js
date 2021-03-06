import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/dummy-data'
// import Colors from '../constants/Colors'
import CategoryGridTitle from '../components/CategoryGridTitle'



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
                color={itemData.item.color}
            />

        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Meals Category',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='menu' iconName='ios-menu'
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>

        // headerStyle:{
        //     backgroundColor:Platform.OS === 'android' ?  Colors.primaryColor : ''
        // },
        // headerTintColor:Platform.OS === 'android' ? 'white'  : Colors.primaryColor
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen;
