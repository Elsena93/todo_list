import { taskFactory, projectFactory, taskElementFactory } from './factory'
import projectStorage from './storage'
import interFace from './interface'

/**
 * @typedef {import('./factory').Task} Task
 * @typedef {import('./factory').Project} Project
 */

function storageManagerConstructor () {
// STRUCTURE
  const objList = []
  /**
     * @description add item to storage
     * @param {Task|Project} obj
     * @returns {Void}
     */
  const addItem = (obj) => {
    objList.push(obj.id)
    projectStorage.addItem(obj)
  }

  /**
     * @description remove item to storage
     * @param {String} id of Task or Project object inside localStrorage
     * @returns {Void}
     */
  const removeItem = (id) => {
    objList.splice(objList.indexOf(id), 1)
    projectStorage.removeItem(id)
  }

  /**
     * @param {String} id of Task or Project Object
     * @returns {Task | Project}
     */
  const readItem = (id) => {
    return projectStorage.readItem(id)
  }

  const projectKeys = () => {
    return objList.filter(key => key.substring(0, 1) === 'P')
  }

  const taskKeys = () => {
    return objList.filter(key => key.substring(0, 1) === 'T')
  }

  return {
    objList, addItem, removeItem, readItem, projectKeys, taskKeys
  }
}

/**
 * @description Manager of localStorage AND current object ids in arrays
 */
const storageManager = storageManagerConstructor()
export { storageManager }

/**
 * @description handler for a click on add project form button
 * @param {Event} e
 */

// COORDINATOR/CONTROLLER

function projectFormHandling (e) {
  e.preventDefault()
  const projectName = document.querySelector('#project-form #name')
  if (projectName.value === '') {
    return alert('Please fill project name')
  } else {
    const newObj = projectFactory(projectName.value)
    projectName.value = ''
    storageManager.addItem(newObj)
    updateProjectOptions()
    updateDisplayFromForm('project')
  }
}

/**
 * @description handler for a click on add task form button
 * @param {Event} e
 */
function taskFormHandling (e) {
  e.preventDefault()
  const taskName = document.querySelector('#task-form #name')
  const taskDesc = document.querySelector('#task-form #description')
  const taskDue = document.querySelector('#task-form #dueDate')
  const taskPrio = document.querySelector('#task-form #priority')
  const taskProj = document.querySelector('#task-form #project')
  if (taskName.value === '' || taskDesc.value === '' || taskDue.value === '') {
    return alert('Fill the necessary form')
  }
  let projVal = 'default'
  if (taskProj.value !== '') {
    projVal = taskProj.value
  }
  const newObj = taskFactory(taskName.value, taskDesc.value,
    taskDue.value, taskPrio.value, projVal)
  storageManager.addItem(newObj)
  taskName.value = taskDesc.value = taskDue.value = taskProj.value = ''
  taskPrio.value = 'lowest'

  updateDisplayFromForm('task')
}

/**
 * @description Update project select drop-down in interface, called each time new project added to storage
 */
function updateProjectOptions () {
  const container = interFace.projectOptions
  container.replaceChildren()
  for (const i in storageManager.objList) {
    const j = storageManager.objList[i]
    if (j.substring(0, 1) === 'P') {
      const option = document.createElement('option')
      const x = storageManager.readItem(j)
      option.setAttribute('value', `${x.name}`)
      option.innerText = x.name
      container.appendChild(option)
    }
  }
}

export { projectFormHandling, taskFormHandling, updateProjectOptions }

function updateDisplayFromForm (obj) {
  const container = interFace.displayContainer
  if (obj === 'project') {
    if (container.classList.contains('projects-container')) {
      renderProjects()
    } else {
      // Left empty
    }
  } else if (obj === 'task') {
    if (container.classList.contains('tasks-container')) {
      renderTasks()
    } else {
      // Left empty
    }
  } else {
    // Left empty
  }
}

function renderProjects (e) {
  const list = storageManager.projectKeys()

  // Need to be outside function
  const container = interFace.displayContainer
  container.replaceChildren()
  container.classList = 'projects-container'

  list.forEach(key => {
    const obj = storageManager.readItem(key)

    const project = document.createElement('div')
    const title = document.createElement('h3')
    title.innerText = obj.name

    const sub = document.createElement('sub')
    sub.innerText = 'Project'

    project.setAttribute('data-key', `${key}`)
    project.classList.add('project')

    project.appendChild(sub)
    project.appendChild(title)

    container.appendChild(project)
  })
}

function renderTasks (e) {
  const list = storageManager.taskKeys()

  const container = interFace.displayContainer
  container.replaceChildren()
  container.classList = 'tasks-container'

  list.forEach(key => {
    const obj = storageManager.readItem(key)
    const el = taskElementFactory(obj)

    container.appendChild(el)
  })

  const deleteButtons = document.querySelectorAll('.task-el .control .delete')
  const clearButtons = document.querySelectorAll('.task-el .control .clear')

  deleteButtons.forEach(element => {
    element.addEventListener('click', deleteTaskEl)
  })

  clearButtons.forEach(element => {
    element.addEventListener('click', clearTask)
  })
}

function deleteTaskEl (e) {
  const parentEl = e.target.closest('.task-el')
  const container = interFace.displayContainer
  container.removeChild(parentEl)

  storageManager.removeItem(e.target.dataset.key)
}

function clearTask (e) {
  console.log(e.target)
}

export { renderProjects, renderTasks }
