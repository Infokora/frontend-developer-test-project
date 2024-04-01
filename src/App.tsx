import { useMemo, useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { Task } from 'app/types/Task'

import { ProjectsListView, TaskListView } from 'app/widgets/ProjectsList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const [activeProject, selectProject] = useState<string>('');
  const [selectedTasks, selectTask] = useState<string[]>([]);
  const [tasksList, changeTaskList] = useState<Task[]>([]);

  const allTasks = useMemo(() => {
    let allTasks: Task[] = [];

    PROJECTS.forEach((project) => {
      allTasks = [...allTasks, ...project.tasks];
    });

    return [...allTasks];
  }, [PROJECTS]);

  useEffect(() => {
    changeTaskList(allTasks);
  }, [])

  useEffect(() => {
    generateTaskList(activeProject);
  }, [activeProject])

  const onProjectPress = useCallback((project: Project) => {
    if(activeProject != project.id) {
      selectProject(project.id);
    } else {
      selectProject('');
    }
  },[activeProject]);
  
  const onTaskPress = useCallback((task: Task) => {
    let newSelectedTask: string[] = [...selectedTasks];
    const positionSelectedTask = newSelectedTask.indexOf(task.id);

    if (positionSelectedTask == -1) {
      newSelectedTask = [
        ...newSelectedTask,
        task.id,
      ];
    } else {
      newSelectedTask.splice(positionSelectedTask, 1);
    }
    selectTask(newSelectedTask);
  }, [selectedTasks]);

  const generateTaskList = (activeProject: string) => {
    const newTaskList: Task[] = PROJECTS.find((project) => project.id === activeProject)?.tasks || [];
    newTaskList.length ? changeTaskList(newTaskList) : changeTaskList(allTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView
          headerTitle="Projects"
          projects={PROJECTS}
          onProjectPress={onProjectPress}
          selectedItem={[activeProject]}
        />
      </View>
      <View style={styles.column}>
        <TaskListView
          multiselect
          headerTitle="All Tasks"
          tasks={tasksList}
          onTaskPress={onTaskPress}
          selectedItem={selectedTasks}
        />
      </View>
    </View>
  )
}

export default App
