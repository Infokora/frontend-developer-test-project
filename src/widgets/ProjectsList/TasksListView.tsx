import React, { memo } from 'react'
import { FlatList } from 'react-native'

import { Task } from 'app/types/Task'

import { Header } from 'app/ds'

import { ProjectItemView } from './ListItemView'
import styles from './ProjectsListView.styles'

export const TaskListView: React.FC<{
  headerTitle: string,
  multiselect?: boolean,
  selectedItem?: string[],
  tasks: any
  onTaskPress: (project: Task) => void,
}> = memo(({
  headerTitle,
  multiselect = false,
  selectedItem = [],
  tasks,
  onTaskPress,
}) => {
  const renderItem = ({ item }: { item: Task }) =>
    <ProjectItemView
      data={item}
      onPress={() => onTaskPress(item)}
      multiselect={multiselect}
      selected={selectedItem.indexOf(item.id) !== -1}
    />

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={<Header mb={12}>{headerTitle}</Header>}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  )
})
