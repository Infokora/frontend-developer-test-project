import { Task } from './Task'

export type Project = {
  id: string,
  name: string
  description: string
  tasks: Task[]
}
