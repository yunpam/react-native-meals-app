import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'


const FiltersScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Filter Meals',
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

export default FiltersScreen;
