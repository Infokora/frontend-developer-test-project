import React, { memo } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'

import { Header } from 'app/ds'

import { ProjectItemView } from './ListItemView'
import styles from './ProjectsListView.styles'

export const ProjectsListView: React.FC<{
  headerTitle: string,
  selectedItem?: string[],
  projects: any
  onProjectPress: (project: Project) => void,
}> = memo(({
  headerTitle,
  selectedItem = [],
  projects,
  onProjectPress,
}) => {
  const renderItem = ({ item }: { item: Project }) =>
    <ProjectItemView
      data={item}
      onPress={() => onProjectPress(item)}
      selected={selectedItem.indexOf(item.id) !== -1}
    />

  return (
    <FlatList
      data={projects}
      ListHeaderComponent={<Header mb={12}>{headerTitle}</Header>}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  )
})
