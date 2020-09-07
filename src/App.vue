<template>
    <div>
        <header-app></header-app>
        <router-view :movies="movies"></router-view>
    </div>
</template>

<script>
    import header from './component/header.vue';
    import Overview from "./component/Overview.vue";

    export default {
        components: {
            headerApp: header,
            Overview:Overview
        },
        data() {
            return {
                movies : []
            }
        },
        created(){
            this.$http.get("/api")
                .then(response=>{
                    this.movies = response.data;
                })
        }
    }
</script>

<style>
    * {
        background: #343333;
        margin: 0;
        padding: 0;
        color: white;
    }
</style>