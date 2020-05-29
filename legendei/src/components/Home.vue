<template>
<v-container fluid>
    <v-form>
        <v-file-input 
        multiple label="Selecione as Legendas"
        chips v-model="files" prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send" @click:append-outer="processSubtitles" />
    </v-form>
    <div class="pills">
        <Pill v-for="word in groupedWords" :key="word.name" 
            :name="word.name" :amount="word.amount" />
    </div>
</v-container>
</template>

<script>
import {ipcRenderer} from 'electron'
import Pill from './Pill'

export default{
    components: {Pill},
    data: function () {
        return{
            files: [],
            groupedWords: []
        }
    },
    methods:{
        processSubtitles(){
            if(this.files != null && this.files != '')
            {
                const paths = this.files.map(f => f.path)

                //ipc é a forma padrão de comunicação com o backend do electron 
                ipcRenderer.send('process-subtitles', paths)
                ipcRenderer.on('process-subtitles', (event, resp)=>{
                    this.groupedWords = resp
                })
            }
            else
                alert('Selecione algum arquivo!')

        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>