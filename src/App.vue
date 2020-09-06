<template>
    <div>
        <header-app></header-app>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './component/header.vue';
    import Overview from "./component/Overview.vue";

    export default {
        components: {
            headerApp: header,
            Overview:Overview
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