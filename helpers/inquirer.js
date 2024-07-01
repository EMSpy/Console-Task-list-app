import inquirer from 'inquirer';
import readline from 'readline';
import 'colors';


const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Please select an option',
        choices: [
            {
                value: '1',
                name: `${'1.'.red}Create a new task`
            }, 
            {
                value: '2',
                name: `${'2.'.red}List tasks`
            }, 
            {
                value: '3',
                name: `${'3.'.red}List completed tasks`
            }, 
            {
                value: '4',
                name: `${'4.'.red}List pending tasks`
            }, 
            {
                value: '5',
                name: `${'5.'.red}Complete tasks`
            }, 
            {
                value: '6',
                name: `${'6.'.red}Errase tasks`
            }, 
            {
                value: '0',
                name: `${'6.'.red}Exit`
            }
        ]

    }
]



export const inquirerMenu = async() => {

    console.clear()
    console.log("====================".blue)
    console.log("   Select a Option   ".white)   
    console.log("====================\n".blue)

   const { opcion } = await inquirer.prompt(questions);


   return opcion;

}

export const pause = async () => {

    const questions = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.blue}  to continue`
        }
    ];

    console.log('\n');
    await inquirer.prompt(questions);
  }

export const readInput = async ( message) => {

    const questions = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please enter a value';
                }
                return true;

            }
    
        }
    ];

    const { desc } = await inquirer.prompt(questions);
    return desc;

}


