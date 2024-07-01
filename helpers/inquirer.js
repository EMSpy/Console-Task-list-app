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
                name: '1.Create a new task'
            }, 
            {
                value: '2',
                name: '2.List tasks'
            }, 
            {
                value: '3',
                name: '3.List completed tasks'
            }, 
            {
                value: '4',
                name: '4.List pending tasks'
            }, 
            {
                value: '5',
                name: '5.Complete tasks'
            }, 
            {
                value: '6',
                name: '6.Errase tasks'
            }, 
            {
                value: '0',
                name: '0.Exit'
            }
        ]

    }
]



export const inquirerMenu = async() => {

    console.clear()
    console.log("====================".blue)
    console.log("   Select a Option   ".blue)   
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

const readInput = async ( message) => {

    const questions = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (this.validate.length === 0) {
                    return 'Please enter a value';
                }
                return true;

            }
    
        }
    ];

}


