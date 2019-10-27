import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import {MEALS} from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealList = props => {

    const renderMealItem = itemData =>{
        return (
            <MealItem title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            onSelectMeal={()=>{
                props.navigation.navigate({routeName:'MealDetail', params:{
                    mealId : itemData.item.id
                }})
            }}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />


            {/* <Text>The Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Meal Detail' onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' })
            }} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList;