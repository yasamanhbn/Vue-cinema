<template>
    <div v-if="movie">
        <MovieItem :movie="movie.movie">
            <div>
                <p>{{movie.movie.Genre}}</p>
                <p>{{movie.movie.Plot}}</p>
                <table>
                    <tr><td>Released date:</td><td>{{movie.movie.Released}}</td></tr>
                    <tr><td>Running Time:</td><td>{{movie.movie.RunTime}}</td></tr>
                    <tr><td>Directors:</td><td>{{movie.movie.Director}}</td></tr>
                    <tr><td>Cast:</td><td>{{movie.movie.Actors}}</td></tr>
                </table>
            </div>
        </MovieItem>
        <router-link to="/" class="home">Back to home</router-link>
    </div>
</template>

<script>
    import MovieItem from "./MovieItem.vue";

    export default {
        props: ["movies"],
        components: {
            MovieItem: MovieItem
        },
        computed: {
            movie() {
                let movie = this.movies.find(movie => movie.id === this.$route.params.id)
                return movie ? movie : null
            }
        }
    }
</script>

<style scoped>
    .home{
        margin: 5%;
        color: white;
        font-size: 25px;
        text-decoration: none;
    }
</style>