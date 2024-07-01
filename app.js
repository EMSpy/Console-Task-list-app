
import 'colors';

import { inquirerMenu , pause, readInput } from './helpers/inquirer.js';
import { Tasks }  from './model/tasks.js';
import { saveDB } from './helpers/saveData.js';




const main = async () => {

    let opt = '';
    const tasks =  new Tasks();

    
    do {   
       opt = await  inquirerMenu();
       
       switch (opt) {
        case '1':
            //create task
            const desc = await readInput('Create task');
            tasks.createTask(desc);
            break;


        case '2':
            console.log(tasks.listArr);
            break;
       
        default:
            break;
       }
   

       saveDB( tasks.listArr );

       if (opt !== '0') {
           await pause();
       }

    } while (opt !== '0');

}


main();