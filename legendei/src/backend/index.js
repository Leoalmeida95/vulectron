const {ipcMain} = require('electron')

const pathToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitles', (event, paths)=> {

    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
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