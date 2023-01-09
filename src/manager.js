import { taskFactory, projectFactory, taskElementFactory, projectElementFactory } from './factory'
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

// Coordinator to show projects or tasks
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
      expandTasks()
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
    const el = projectElementFactory(obj)

    container.appendChild(el)
  })

  // Add delete event listener
  const deleteButtons = document.querySelectorAll('.project-el .delete')
  deleteButtons.forEach(element => {
    element.addEventListener('click', deleteProjectEl)
  })

  // Show all task
  const showButtons = document.querySelectorAll('.project-el .expand')
  showButtons.forEach(element => {
    element.addEventListener('click', expandTasks)
  })
}
// Coordinator to render all tasks from project
function expandTasks (e) {
  if (e.target.classList.contains('tasks')) {
    const list = storageManager.taskKeys()
    renderTasks(list)
  } else if (e.target.classList.contains('expand')) {
    const list = storageManager.taskKeys()
    const id = e.target.closest('.project-el').dataset.key
    const filtered = filterTaskOfProject(list, id)
    renderTasks(filtered)
  }
}

/**
 * @description filter tasks array assosiacited with a project
 * @param {Array} param1 List of all task keys
 * @param {string} param2 id of project
 */
function filterTaskOfProject (param1, param2) {
  const filtered = []
  param1.forEach(key => {
    const obj = storageManager.readItem(key)
    console.log(obj.project)
    const project = storageManager.readItem(param2)
    console.log(project.name)
    if (obj.project === storageManager.readItem(param2).name) {
      filtered.push(obj.id)
    }
  })
  return filtered
}
/**
 * @param {Array} keys list of rendered keys
 */
function renderTasks (keys) {
  const container = interFace.displayContainer
  container.replaceChildren()
  container.classList = 'tasks-container'

  keys.forEach(key => {
    const obj = storageManager.readItem(key)
    const el = taskElementFactory(obj)

    container.appendChild(el)
  })

  // Add delete event listener
  const deleteButtons = document.querySelectorAll('.task-el .control .delete')
  deleteButtons.forEach(element => {
    element.addEventListener('click', deleteTaskEl)
  })

  const clearButtons = document.querySelectorAll('.task-el .control .clear')
  clearButtons.forEach(element => {
    element.addEventListener('click', clearTask)
  })
}

function deleteTaskEl (e) {
  const parentEl = e.target.closest('.task-el')
  const container = interFace.displayContainer
  container.removeChild(parentEl)

  storageManager.removeItem(parentEl.dataset.key)
}

function deleteProjectEl (e) {
  const parentEl = e.target.closest('.project-el')
  const container = interFace.displayContainer
  container.removeChild(parentEl)

  storageManager.removeItem(parentEl.dataset.key)
  updateProjectOptions()
}

function clearTask (e) {
  console.log(e.target)
}

export { renderProjects, expandTasks }
