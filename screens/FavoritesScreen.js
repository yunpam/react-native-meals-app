import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'



const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='menu' iconName='ios-menu'
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>


    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;
