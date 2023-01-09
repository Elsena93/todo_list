// INFORMATION HOLDER

import { v4 as uuidv4 } from 'uuid'

/**
 * @typedef Task Task Object
 * @type {Object}
 * @property {String} id Generate by char 'T' + UUID4
 * @property {String} title
 * @property {String} description
 * @property {String} dueDate
 * @property {String} priority
 * @property {String} Project
 */

/**
 * @typedef Project Project Object
 * @type {Object}
 * @property {String} id Generate by char 'T' + UUID4
 * @property {String} name
 */

/**
 * @function factory of Task Object
 * @param {String} title title of The Task
 * @param {String} description description of The Task
 * @param {String} dueDate due date of The Task
 * @param {String} priority priority of The Task
 * @param {String} project The Task is a member of project
 * @returns {Task} Task Object
 */
function taskFactory (title, description, dueDate, priority = 'lowest', project = 'default') {
  let _id = 'T' + uuidv4()
  let _title = title
  let _description = description
  let _dueDate = dueDate
  let _priority = priority
  let _project = project

  return {
    get id () {
      return _id
    },
    set id (id) {
      _id = id
    },
    get title () {
      return _title
    },
    set title (title) {
      _title = title
    },
    get description () {
      return _description
    },
    set description (description) {
      _description = description
    },
    get dueDate () {
      return _dueDate
    },
    set dueDate (dueDate) {
      _dueDate = dueDate
    },
    get priority () {
      return _priority
    },
    set priority (priority) {
      _priority = priority
    },
    get project () {
      return _project
    },
    set project (project) {
      _project = project
    }
  }
}

/**
 * @function factory of Project Object
 * @param {String} name name of The Project
 * @returns {Project} Project Object
 */
function projectFactory (name) {
  let _id = 'P' + uuidv4()
  let _name = name
  return {
    get id () {
      return _id
    },
    set id (id) {
      _id = id
    },
    get name () {
      return _name
    },
    set name (name) {
      _name = name
    }
  }
}

/**
 * @description turn Task Object into DOM element
 * @param {Task} param1 Task Object
 */
function taskElementFactory (param1) {
  const taskEl = document.createElement('div')
  taskEl.classList = 'task-el'
  taskEl.setAttribute('data-key', `${param1.id}`)
  const taskTitleEl = document.createElement('h3')
  const taskDateEl = document.createElement('div')
  const taskDescEl = document.createElement('div')

  const taskControl = document.createElement('div')
  taskControl.classList = 'control'
  const deleteButton = document.createElement('button')
  const clearButton = document.createElement('button')

  taskTitleEl.innerText = param1.title
  taskDateEl.innerText = param1.dueDate
  taskDescEl.innerText = param1.description
  deleteButton.innerText = 'Delete Task'
  deleteButton.classList = 'delete'
  deleteButton.setAttribute('data-key', `${param1.id}`)
  clearButton.innerText = 'UNCLEARED'
  clearButton.classList = 'clear'
  clearButton.setAttribute('data-key', `${param1.id}`)

  taskControl.appendChild(deleteButton)
  taskControl.appendChild(clearButton)
  taskEl.appendChild(taskTitleEl)
  taskEl.appendChild(taskDateEl)
  taskEl.appendChild(taskDescEl)
  taskEl.appendChild(taskControl)

  return taskEl
}

/**
 * @description turn Project Object into DOM element
 * @param {Project} param1 Project Object
 */
function projectElementFactory (param1) {
  const proEl = document.createElement('div')
  proEl.classList = 'project-el'
  proEl.setAttribute('data-key', `${param1.id}`)

  const title = document.createElement('h3')
  title.innerText = param1.name
  const sub = document.createElement('sub')
  sub.innerText = 'Project'

  const showTask = document.createElement('button')
  showTask.innerText = 'Show Tasks'
  showTask.classList = 'expand'

  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Delete Project'
  deleteButton.classList = 'delete'

  proEl.appendChild(sub)
  proEl.appendChild(title)
  proEl.appendChild(showTask)
  proEl.appendChild(deleteButton)

  return proEl
}

export { taskFactory, projectFactory, taskElementFactory, projectElementFactory }
