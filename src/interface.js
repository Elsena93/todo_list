import {projectFormHandling, taskFormHandling} from "./manager";

function interfaceDOMConstructor() {

    const addProject = document.querySelector('#project-form button');
    addProject.addEventListener('click', projectFormHandling);

    const addTask = document.querySelector('#task-form button');
    addTask.addEventListener('click', taskFormHandling);

    return {

    }
}
/**
 * @description Object to manage interface
 */
const interFace = interfaceDOMConstructor();
export default interFace
