

import { inquirerMenu } from './helpers/inquirer.js';

import 'colors';


console.clear();


const main = async () => {
    console.log('Hola mundo');

    let opt = '';

    
    do {   
       opt = await  inquirerMenu();
       console.log({ opt });

       if (opt !== '0') {
           await pause();
       }

    } while (opt !== '0');

}


main();