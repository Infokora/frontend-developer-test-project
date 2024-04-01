import { Project } from '../types/Project'

export const PROJECTS: Project[] = [
  {
    id: 'Twitter29867',
    name: 'Twitter',
    description: 'Twitter is a web application that allows users to post and share messages.',
    tasks: [
      {
        id: 'Create230948657',
        name: 'Create a new project',
        description: 'Setup a new project with React Native',
        completed: true
      },
      {
        id: 'Addsign23498657',
        name: 'Add sign in',
        description: 'Add sign in functionality to the application',
        completed: false
      },
      {
        id: 'Addsign28579346',
        name: 'Add sign up',
        description: 'Add sign up functionality to the application'
      }
    ]
  },

  {
    id: 'CompleteTest0934856',
    name: 'Complete Test Task',
    description: 'Complete a test task for Factorial Complexity.',
    tasks: [
      {
        id: 'Forka827345',
        name: 'Fork a project on GitHub',
        description: 'Create a github account if you do not have one and fork the project'
      },
      {
        id: 'Showtasks029834765',
        name: 'Show tasks for a selected project',
        description: 'When user presses on a project, show all of the tasks for that project'
      }
    ]
  }
]
