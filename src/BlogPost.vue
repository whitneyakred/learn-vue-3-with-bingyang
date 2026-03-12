<template>
    <div class="blog-post">
        <p>{{ message }}</p>
    </div>
    <h2>{{ id }}- {{  blogPostTitle }}</h2>
    <h4>{{  blogPostContent }}</h4>
</template>

<script setup>
import {ref} from 'vue'

let message =ref('This is the Blog Post')
const props =defineProps(['id','blogPostTitle','blogPostContent'])
console.log(props.blogPostTitle)

</script>

<style scoped>

.blog-post{
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}
</style>