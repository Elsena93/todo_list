import { taskFactory, projectFactory } from './factory';
import projectStorage from './storage';
import interFace from './interface';

/**
 * @typedef {import('./factory').Task} Task
 * @typedef {import('./factory').Project} Project
 */

function storageManagerConstructor() {
    let objList = [];
    /**
     * @description add item to storage
     * @param {Task|Project} obj
     * @returns {Void}
     */
    const addItem = (obj) => {
        objList.push(obj.id);
        projectStorage.addItem(obj)
    }

    /**
     * @description remove item to storage
     * @param {String} id of Task or Project object inside localStrorage
     * @returns {Void}
     */
    const removeItem = (id) => {
        objList.splice(objList.indexOf(id, 1));
        projectStorage.removeItem(id);
    }

    /**
     * @param {String} id of Task or Project Object
     * @returns {Task | Project}
     */
    const readItem = (id) => {
        return projectStorage.readItem(id);
    }

    return {
        objList, addItem, removeItem, readItem
    }
}

/**
 * @description Manager of localStorage AND current object ids
 */
const storageManager  = storageManagerConstructor();
export {storageManager}

/**
 * @description handler for a click on add project form button
 * @param {Event} e
 */
function projectFormHandling(e) {
    e.preventDefault();
    const projectName = document.querySelector('#project-form #name');
    if(projectName.value === '') {
        return alert('Please fill project name');
    } else {
        const newObj = projectFactory(projectName.value);
        projectName.value = '';
        storageManager.addItem(newObj);
        updateProjectOptions();
    }
}

/**
 * @description handler for a click on add task form button
 * @param {Event} e
 */
function taskFormHandling(e) {
    e.preventDefault();
    const taskName = document.querySelector('#task-form #name');
    const taskDesc = document.querySelector('#task-form #description');
    const taskDue = document.querySelector('#task-form #dueDate');
    const taskPrio = document.querySelector('#task-form #priority');
    const taskProj = document.querySelector('#task-form #project');
    if (taskName.value === '' || taskDesc.value === '' || taskDue.value === '') {
        return alert('Fill the necessary form');
    }
    let projVal = 'default';
    if (taskProj.value !== '') {
        projVal = taskProj.value;
    }
    const newObj = taskFactory(taskName.value, taskDesc.value,
                                taskDue.value, taskPrio.value, projVal);
    storageManager.addItem(newObj);
    taskName.value = taskDesc.value = taskDue.value = taskProj.value = '';
    taskPrio.value = 'lowest';
    console.log(newObj);   
}

/**
 * @description Update project select drop-down in interface, called each time new project added to storage
 */
function updateProjectOptions() {
    const container = interFace.projectOptions;
    container.replaceChildren();
    for(const i in storageManager.objList) {
        const j = storageManager.objList[i];
        if (j.substring(0, 1) === 'P') {
            const option = document.createElement('option');
            const x = storageManager.readItem(j);
            option.setAttribute('value', `${x.name}`);
            option.innerText = x.name;
            container.appendChild(option);
        }
    }
}

export {projectFormHandling, taskFormHandling, updateProjectOptions}