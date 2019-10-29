import React, { useEffect, useCallback } from 'react'
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import { toggleFavorite } from '../store/actions/meal'


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals)
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler])

    useEffect(()=>{
        props.navigation.setParams({isFav:currentMealIsFavorite})
    },[currentMealIsFavorite])

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity}</Text>
                <Text>{selectedMeal.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient} >{ingredient}></ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step} >{step}</ListItem>
            ))}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const isFavorite = navigationData.navigation.getParam('isFav')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorites'
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
        )
    }

}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }
})

export default MealDetailScreen;
