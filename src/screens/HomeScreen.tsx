import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import CustomIcon from '../components/CustomIcon'
import CoffeeCard from '../components/CoffeeCard'



const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for(let i = 0; i < data.length; i++) {
    if(temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    }else{
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
}

const getCoffeeList = (category: string, data: any) => {
  if(category === 'All'){
    return data;
  }else{
    let coffeeList = data.filter((item: any) => item.name === category);
  }
}

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList));
  const [searchText, setSearchText] = useState('')
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  })
  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categoryIndex.category, CoffeeList))
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView 
        showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}
      >
        <HeaderBar />
        <Text style={styles.screenTitle}>Find the best {`\n`}coffee for you</Text>

        <View style={styles.inputContainerComponent}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon 
              style={styles.inputIcon}
              name='search' 
              size={FONTSIZE.size_18}
              color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
          <TextInput
            placeholder='Find Your coffee ...'
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInputContainer}
          />
        </View>

        <ScrollView 
         horizontal
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={styles.categoryScrollViewStyle}
        >
          {categories.map((data, index) => (
            <View key={index.toString()}
              style={styles.categoryScrollViewContainer}
            >
              <TouchableOpacity 
                onPress={() => {
                  setCategoryIndex({index: index, category: categories[index]})
                  setSortedCoffee([...getCoffeeList(categories[index], CoffeeList)])
                }} 
                style={styles.categoryScrollViewItem}>
                <Text 
                  style={[styles.categoryText, categoryIndex.index === index ? { color: COLORS.primaryOrangeHex } : {}]}
                >{data}</Text>
                {categoryIndex.index === index ? <View style={styles.activeCategory} /> : <></>}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee flatlist */}
          <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            data={sortedCoffee}
            contentContainerStyle={styles.flatListContainer}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <TouchableOpacity>
                <CoffeeCard 
                  id={item.id}
                  name={item.name}
                  index={item.index}
                  type={item.type}
                  rosted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.price[2]}
                  buttonPressHandler={() => {}}
                />
              </TouchableOpacity>
            }}
          />
        {/* Beans flatlist */}

      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,  
  },
  screenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  },
  textInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  inputContainerComponent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  inputIcon: {
    marginHorizontal: SPACING.space_20
  },
  categoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  activeCategory: {
    width: SPACING.space_10,
    height: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  categoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  categoryScrollViewItem: {
    alignItems: 'center',
  },
  flatListContainer: {

  }
})