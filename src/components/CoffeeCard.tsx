import { StyleSheet, Text, View, ImageBackground, ImageProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';


const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
    id: string,
    index: number,
    type: string,
    rosted: string,
    imagelink_square: ImageProps,
    name: string,
    special_ingredient: string,
    average_rating: number,
    price: any,
    buttonPressHandler: any,
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
    name,
    index,
    type,
    rosted,
    imagelink_square,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler,
}) => {
  return (
    <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.CardLinearGradient}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
        <ImageBackground 
            source={imagelink_square}
            style={styles.cardImageBG}
            resizeMode='cover'
        >
            <View style={styles.cardRatingContainer}>
                <CustomIcon name='star' color={COLORS.primaryOrangeHex} size={FONTSIZE.size_16} />
                <Text style={styles.cardRatingText}>{average_rating}</Text>
            </View>
        </ImageBackground>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardSubtitle}>{special_ingredient}</Text>
        <View style={styles.cardFooterRow}>
            <Text style={styles.cardPriceCurrency}>
                $ <Text style={styles.cardPrice}>{price.price}</Text>
            </Text>
            <TouchableOpacity>
                <BGIcon name='add' color={COLORS.primaryWhiteHex} BGColor={COLORS.primaryOrangeHex}
                    size={FONTSIZE.size_10}
                />
            </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default CoffeeCard

const styles = StyleSheet.create({
    CardLinearGradient: {
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
    cardImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden',
    },
    cardRatingContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primaryBlackRGBA,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_10,
        paddingHorizontal: SPACING.space_15,
        position: 'absolute',
        borderBottomLeftRadius: BORDERRADIUS.radius_20,
        borderTopRightRadius: BORDERRADIUS.radius_20,
        top: 0,
        right: 0,
    },
    cardRatingText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        lineHeight: 22,
        fontSize: FONTSIZE.size_14,
    },
    cardFooterRow: {

    },
    cardTitle: {

    },
    cardSubtitle: {

    },
    cardPriceCurrency: {

    },
    cardPrice: {

    }
})