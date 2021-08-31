import fs from 'fs'

export function addScheduledLetter(letter) {
    const path = 'server/models/db.json'
    fs.readFile(path, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {  
            data = JSON.parse(data) //now it an object

            if (!Array.isArray(data.scheduledLetters)) data.scheduledLetters = []
            data.scheduledLetters.push(letter) //add some data

            data = JSON.stringify(data) //convert it back to json
            
            fs.writeFile(
                path, 
                data,       // write it back
                'utf8', 
                (err) => !err ? console.log('new letter written successfully') : console.log(err)
            )
        }
    })
}