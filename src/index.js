import './style.css';
import { storageManager } from './manager';
import { interFace } from './interface'; //Not called but necessary to make functiong
import { taskFactory, projectFactory } from './factory';


function hello() {
    return
}

hello();

function initialLoad() {


    //Test persistance storage manipulation
    localStorage.clear();

    // Add default project and sample tasks
    const sampleProject = projectFactory('default');

    const sampleTask1 = taskFactory('title1', 'description1', 'duedate1');
    const sampleTask2 = taskFactory('title2', 'description2', 'duedate2');
    const sampleTask3 = taskFactory('title3', 'description3', 'duedate3');

    storageManager.addItem(sampleProject);
    storageManager.addItem(sampleTask1);
    storageManager.addItem(sampleTask2);
    storageManager.addItem(sampleTask3);
    
}

initialLoad();