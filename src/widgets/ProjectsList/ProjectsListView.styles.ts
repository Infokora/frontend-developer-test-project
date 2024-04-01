import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

export default StyleSheet.create({
  list: {
    backgroundColor: colors.background.contrast,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  rowCardContent: {
    flexDirection: 'row',
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexShrinkDefault: {
    flexShrink: 1,
  },
})
