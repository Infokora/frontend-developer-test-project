import React, { memo } from 'react'

import { Project } from 'app/types/Project'
import { Task } from 'app/types/Task'

import { View, Text, Card, Pressable, SelectCircle } from 'app/ds'

import styles from './ProjectsListView.styles'

export const ProjectItemView: React.FC<{
  multiselect?: boolean,
  selected: boolean,
  data: Project | Task,
  onPress: () => void
}> = memo(({
  multiselect = false,
  selected = false,
  data,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Card my={4} selected={selected}>
        <View style={styles.rowCardContent}>
          <View style={styles.flexShrinkDefault}>
            <Text typeface='default/14' color='default' mb={2}>
              {data.name}
            </Text>
            <Text typeface='default/12' color='dimmed'>
              {data.description}
            </Text>
          </View>
          
          {multiselect && <SelectCircle selected={selected} />}
        </View>
        
      </Card>
    </Pressable>
  )
})
