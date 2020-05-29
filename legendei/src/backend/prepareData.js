module.exports = rows => {
    return new Promise((resolver, reject) => {
        try{

            const words = rows
                            .filter(filterValidRow)
                            .map(removePunctuation)
                            .map(removeTags)
                            .reduce(mergeRows)
                            .split(' ')
                            .map(word => word.toLowerCase())
                            .map(word => word.replace('"', ''))
            resolver(words)
        }
        catch (err) {
            reject(err)
        }
    })
}

function filterValidRow(row){
    //se o parse retornar algo valido, significa que é um número
    const notNumber = !parseInt(row.trim())

    //a dupla negação converte o valor pra boolean
    //se for string vazia, retorna falso
    const notEmpty = !!row.trim()

    //exclui as linhas do intervalo de tempo das legendas
    const notInteval = !row.includes('-->')

    return notNumber && notEmpty && notInteval
}

//substitui caracateres por string vazia
const removePunctuation = row => row.replace(/[,?!.-]/g, '')

const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()

const mergeRows = (fullText, row) => `${fullText} ${row}`