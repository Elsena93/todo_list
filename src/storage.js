import { taskFactory, projectFactory } from './factory';

/**
 * @typedef {import('./factory').Task} Task
 * @typedef {import('./factory').Project} Project
 */

function storageManager() {
    /**
     * @param {String} id Key to Stringified Object on localStorage
     * @returns {Task|Project} Task Object or Project Object 
     */
    const readItem = (id) => {
        if(id.substring(0,1) === 'T') {
            return readTask(id);
        } else if(id.substring(0,1) === 'P') {
            return readProject(id);
        } else {
            return
        }
    }

    /**
     * @param {String} id Key to Stringified Task Object on localStorage
     * @returns {Task} Task Object
     */
    const readTask = (id) => {
        let store = JSON.parse(localStorage.getItem(id));
        let obj = taskFactory(store.title, store.description,
            store.dueDate, store.priority, store.project);
        obj.id = id;
        return obj;
    }

    /**
     * @param {String} id Key to Stringified Project Object on localStorage
     * @returns {Project}  Project Object
     */
    const readProject = (id) => {
        let store = JSON.parse(localStorage.getItem(id));
        let obj = projectFactory(store.name);
        obj.id = id;
        return obj;
    }

    /**
     * @param {Task|Project} obj
     * @returns {Void}
     */
    const addItem = (obj) => {
        let store = JSON.stringify(obj);
        localStorage.setItem(obj.id, store);
    }

    /**
     * @param {String} id of Task/Project Object inside localStorage
     * @returns {void}
     */
    const removeItem = (id) => {
        localStorage.removeItem(id);
    }

    return {
        readItem, addItem, removeItem, 
    }
}

/**
 * @description interface for I/O operation to localStorage
 */
const obj = storageManager();
export default obj;