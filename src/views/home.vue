<template>
    <div>
        <ul>
            <li v-for="todo in todos" :value="todo.text" :key="todo.text">
                {{todo.text}}
            </li>
        </ul>
        <button @click="btnClick()">点击</button>
    </div>
</template>
<script>
export default {
    name: 'indexPage',
    data() {
        return {
            todos:[
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    },
    methods: {
        btnClick() {
            console.log('click btn!');
        }
    }
}
</script>

