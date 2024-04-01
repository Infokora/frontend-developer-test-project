import { StyleSheet } from 'react-native'

import colors from 'app/theme/colors'

export default StyleSheet.create({
  multiselectCircle: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderColor: colors.card.border,
    borderWidth: 1,
    borderRadius: 10,
  },
  multiselectCircleSelected: {
    backgroundColor: colors.primary.main,
  }
})
