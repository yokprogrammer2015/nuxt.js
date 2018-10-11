<template>
    <div>
        <h1>Hello {{ name }} Age {{ age }}</h1>
        <h2>{{ upperName }}</h2>
        <h2>{{ salary }}</h2>
        <h2>{{ tax }}</h2>
        <input type="text" :value="name"><br>
        <input type="text" v-model="name"><br>
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
        income(){
            return this.salary * 12
        },
        tax(){
            let income = this.income
            let tax = (income * 5) / 100
            return tax
        }
    }
}
</script>
