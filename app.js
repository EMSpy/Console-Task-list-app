
import 'colors';

import { inquirerMenu , pause } from './helpers/inquirer.js';
import { Tasks } from './model/tasks.js';




const main = async () => {
    console.log('Hola mundo');

    let opt = '';
    const tasks =  new Tasks();

    
    do {   
       opt = await  inquirerMenu();
       
       switch (opt) {
        case '1':
            //create task
            break;


        case '2':
            console.log(tasks._list);
            break;
       
        default:
            break;
       }
   

       if (opt !== '0') {
           await pause();
       }

    } while (opt !== '0');

}


main();