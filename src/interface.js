import { projectFormHandling, taskFormHandling, renderProjects, renderTasks } from './manager'

function interfaceDOMConstructor () {
  const projectsButton = document.querySelector('.menu .projects')
  projectsButton.addEventListener('click', renderProjects)

  const tasksButton = document.querySelector('.menu .tasks')
  tasksButton.addEventListener('click', renderTasks)

  const displayContainer = document.querySelector('div.content')

  // Form interface

  const addProject = document.querySelector('#project-form button')
  addProject.addEventListener('click', projectFormHandling)

  const addTask = document.querySelector('#task-form button')
  addTask.addEventListener('click', taskFormHandling)

  const projectOptions = document.querySelector('#task-form #project')

  return {
    addProject, addTask, projectOptions, displayContainer
  }
}
/**
 * @description Object to manage interface
 */
const interFace = interfaceDOMConstructor()
export default interFace
