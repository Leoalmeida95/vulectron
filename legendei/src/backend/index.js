const {ipcMain} = require('electron')

ipcMain.on('process-subtitles', (event, paths)=> {
    console.log(paths)

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