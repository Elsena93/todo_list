import {v4 as uuidv4} from 'uuid';

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
function taskFactory(title, description, dueDate, priority = 'lowest', project = 'default') {
    let _id = 'T' + uuidv4();
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _project = project;
    
    return {
        get id() {
            return _id;
        },
        set id(id) {
            _id = id;
        },
        get title() {
            return _title;
        },
        set title(title) {
            return _title = title;
        },
        get description() {
            return _description;
        },
        set description(description) {
            return _description = description;
        },
        get dueDate() {
            return _dueDate;
        },
        set dueDate(dueDate) {
            return _dueDate = dueDate;
        },
        get priority() {
            return _priority;
        },
        set priority(priority) {
            return _priority = priority;
        },
        get project() {
            return _project;
        },
        set project(project) {
            return _project = project;
        }
    }
}

/**
 * @function factory of Project Object
 * @param {String} name name of The Project
 * @returns {Project} Project Object
 */
function projectFactory(name) {
    let _id = 'P' + uuidv4();
    let _name = name;
    return {
        get id() {
            return _id;
        },
        set id(id) {
            _id = id;
        },
        get name() {
            return _name;
        },
        set name(name) {
            return _name = name;
        },
    }
}

export {taskFactory, projectFactory};