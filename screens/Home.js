import React, {useState, useContext} from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    Switch,
    FlatList
} from "react-native";
import themeContext from "../constants/config/themeContext";
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import {EventRegister} from "react-native-event-listeners";
import theme from "../constants/config/theme";

const Home = ({ navigation }) => {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);
   
    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Hungrr",
        gps: {
            latitude: 19.20603,
            longitude: 72.874606
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Biryani",
            icon: icons.biryani,
        },
        
        {
            id: 4,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 5,
            name: "Pizza",
            icon: icons.pizza,
        },
       
        {
            id: 6,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 7,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 8,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Burger",
            rating: 4.8,
            categories: [4],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 19.214764,
                longitude: 72.8688,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Aastha"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 299
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 349
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 99
                }
            ]
        },
        {
            id: 2,
            name: "Pizza",
            rating: 4.8,
            categories: [5],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 19.20599,
                longitude: 72.866675,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Sanjib"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 349
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 299
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 199
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 149
                }
            ]
        },
        {
            id: 3,
            name: "Chicken Biryani",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 19.206831,
                longitude: 72.877354,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Dhruv"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicken Biryani",
                    photo: images.chicago_hot_dog,
                    description: "Dum Chicken Biryani",
                    calories: 100,
                    price: 777
                }
            ]
        },
        {
            id: 4,
            name: "Fish Curry",
            rating: 4.8,
            categories: [10],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 19.210184,
                longitude: 72.872943,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Suraj"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Fish Fry",
                    photo: images.sushi,
                    description: "Tasty Curry with Fried Fish",
                    calories: 100,
                    price: 699
                }
            ]
        },
        {
            id: 5,
            name: "Rice Dishes Menu",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 19.203619,
                longitude: 72.851988,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Hetal"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Chicken Fried Rice",
                    photo: images.kolo_mee,
                    description: "Tasty Fried Rice with Chicken",
                    calories: 200,
                    price: 499
                },
                {
                    menuId: 11,
                    name: "Prawn Curry",
                    photo: images.sarawak_laksa,
                    description: "Curry with cooked prawns",
                    calories: 300,
                    price: 649
                },
                {
                    menuId: 12,
                    name: "Rajma Chawal",
                    photo: images.nasi_lemak,
                    description: "A traditional Indian rice dish",
                    calories: 300,
                    price: 699
                },
                {
                    menuId: 13,
                    name: "Chicken Biryani",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with chicken",
                    calories: 300,
                    price: 799
                },

            ]
        },
        {

            id: 6,
            name: "Sweet Dessets",
            rating: 4.9,
            categories: [7],
            priceRating: affordable,
            photo: images.rabdi,
            duration: "35 - 40 min",
            location: {
                latitude: 19.210225,
                longitude: 72.864234,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Shweta"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Falooda",
                    photo: images.teh_c_peng,
                    description: "Yummy mix falooda",
                    calories: 100,
                    price: 150
                },
                {
                    menuId: 13,
                    name: "Rabdi",
                    photo: images.ice_kacang,
                    description: "Indian Sweet Desert",
                    calories: 100,
                    price: 150
                },
                {
                    menuId: 14,
                    name: "Ras Malai",
                    photo: images.kek_lapis,
                    description: "Tasty Sweet Ras Malai",
                    calories: 300,
                    price: 199
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
       
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />

                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>
                     <View
    style={{
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center',
        backgroundColor: "lightGray",
        top:0,
    }}
>
    <Switch 
      value={mode} 
      onValueChange={(value) => {
        setMode(value);
        EventRegister.emit("changeTheme", value);
    }} 
/>
      
</View>
               
            </View>
        );
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
        
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? "#571a91" : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                            
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
          
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }

}
);

export default Home;