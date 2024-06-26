import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'
import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'

import styles from './Card.styles'

export const Card: React.FC<
  React.PropsWithChildren<
    {
      selected?: boolean,
      style?: StyleProp<ViewStyle>
    } & PropsWithStyles
  >
> = ({ style, selected = false, children, ...rest }) => {
  return (
    <View
      style={useMergedStyle<ViewStyle>(
        styles.container,
        selected && styles.selectedCard,
        useStylesInProps(rest),
        style
      )}>
      {children}
    </View>
  )
}
