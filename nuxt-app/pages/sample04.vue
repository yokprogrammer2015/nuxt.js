<template>
    <div>
        <h1>Hello {{ name }} Age {{ age }}</h1>
        <h2>{{ upperName }}</h2>
        <input type="text" :value="name"><br>
        <input type="text" v-model="name"><br>
        <v-btn @click="doSave"><v-icon>favorite</v-icon>SAVE</v-btn>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: 'Puchong',
            age: 31,
            salary: 100000,
        }
    },
    computed: {
        upperName(){
            return this.name.toUpperCase()
        },
    },
    methods: {
        doSave(){
            console.log('save', this.name)
        }
    }
}
</script>
