<template>
    <div class="col-md-8 col-sm-7">
        <div>
        <p v-for="movie in movies">{{movie.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies : [
                    {title: "Home alone"},
                    {title: "Narnia"},
                    {title: "harry potter"}
                ]
            }
        }
    }
</script>

<style scoped>
div{
    color: white;
}
</style>