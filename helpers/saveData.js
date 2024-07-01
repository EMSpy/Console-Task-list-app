import fs from 'fs';

 export const saveDB =  ( data ) => {

    const arch = './db/data.json'

    fs.writeFileSync( arch, JSON.stringify( data));

}