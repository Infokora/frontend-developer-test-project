import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { View } from './View';

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'
import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'

import styles from './SelectCircle.style';

export const SelectCircle: React.FC<
  React.PropsWithChildren<
    {
      selected?: boolean,
      style?: StyleProp<ViewStyle>
    } & PropsWithStyles
  >
> = ({ style, selected = false, children, ...rest }) => {
  return (
    <View style={
      useMergedStyle<ViewStyle>(
        styles.multiselectCircle,
        selected && styles.multiselectCircleSelected,
        useStylesInProps(rest),
        style
      )
    }></View>
  )
}
