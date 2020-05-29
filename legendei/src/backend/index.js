const {ipcMain} = require('electron')

const pathToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths)=> {

    pathToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply('process-subtitles', [
                {
                    name: 'you', amount: 900
                },
                {
                    name: 'i', amount: 1200
                },
                {
                    name: 'name', amount: 500
                },
                {
                    name: 'she', amount: 750
                },
                {
                    name: 'out', amount: 133
                },
                {
                    name: 'house', amount: 23
                },
            ])
        })

})