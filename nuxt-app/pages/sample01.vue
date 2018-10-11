<template>
    <div>
        <h1>{{ age }} Hello {{ name }}</h1>
        <input type="text" :value="name">
    </div>
</template>
<script>
export default {
    data(){
        setInterval(() => {
            this.name += '*'
        }, 3000)

        return{
            name: 'Puchong',
            age: 31,
        }
    }
}
</script>
