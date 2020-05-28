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
import Pill from './Pill'

export default{
    components: {Pill},
    data: function () {
        return{
            files: [],
            groupedWords: [{
                name: 'you', amount: 900
            },
            {
                name: 'i', amount: 1200
            },
            {
                name: 'name', amount: 500
            },
            ]
        }
    },
    methods:{
        processSubtitles(){
            console.log(this.files)
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