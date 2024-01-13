import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'


interface BGIconProps {
    name: string,
    size: number,
    color: string,
    BGColor: string,
}

const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.iconBg, {backgroundColor: BGColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  )
}

export default BGIcon

const styles = StyleSheet.create({
    iconBg: {
        width: SPACING.space_30,
        height: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})