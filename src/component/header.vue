<template>
    <div id="title">
        <img src="public/logo.png" alt="logo">
        <h1>Vue.js Cinema</h1>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    #title{
        display: flex;
        padding: 2%;
        font-family: 'Orbitron', sans-serif;
    }

    img {
        width: 9%;
        margin:10px;
    }

    h1 {
        margin-top: 3%;
        font-size: 50px;
        color: white;
    }
    @media (max-width: 500px) {
        h1{
            font-size: 25px;
        }
    }
</style>