import inquirer from 'inquirer';
import 'colors';


const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Please select an option',
        choices: ['opt1', 'opt2', 'opt3']

    }
]



export const inquirerMenu = async() => {

    console.clear()
    console.log("====================".blue)
    console.log("   Select a Option   ".blue)   
    console.log("====================\n".blue)

   const opt = await inquirer.prompt(questions);


   return opt;

}




