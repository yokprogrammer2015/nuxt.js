<template>
    <div>
        <h1 v-if="ok">Hello {{ name }} Age {{ age }}</h1>
        <h2 v-show="ok">{{ upperName }}</h2>
        <input type="text" :value="name"><br>
        <input type="text" v-model="name"><br>
        <button @click="doSave">SAVE</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ok: true,
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
            this.ok = !this.ok
            console.log('save', this.name)
        }
    }
}
</script>
