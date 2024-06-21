import 'colors';

const ShowMenu = () => {

   return new Promise ( resolve => {

        console.clear()
        console.log("====================".blue)
        console.log("   Select a Option   ".blue)   
        console.log("====================\n".blue)


        console.log(`${'2.'.blue} List tasks`)
        console.log(`${'1.'.blue} Create a new task`)
        console.log(`${'3.'.blue} List completed tasks`)
        console.log(`${'4.'.blue} List pending tasks`)
        console.log(`${'5.'.blue} Complete tasks`)
        console.log(`${'6.'.blue} Errase tasks`)
        console.log(`${'0.'.blue} Exit \n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Select an option: ', (opt) => {
            readline.close()
            resolve(opt)
        
    })


   })

}


const pause = () => {

   return new Promise ( resolve => { 
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`\nPress ${'ENTER'.blue}  to continue\n`, (opt) => {
      readline.close()
      resolve()
    })
  })

}


module.exports = {
    ShowMenu,
    pause
}