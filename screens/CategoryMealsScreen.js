import React from 'react'
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {


    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        // headerStyle:{
        //     backgroundColor:Platform.OS === 'android' ?  Colors.primaryColor : ''
        // },
        // headerTintColor:Platform.OS === 'android' ? 'white'  : Colors.primaryColor
    }

}

const styles = StyleSheet.create({

})

export default CategoryMealsScreen;
