<template>
    <div class="col-md-8 col-sm-12">
        <div v-if="filterMovies.length">
        <MovieItem v-for="movie in filterMovies"
                   :movie="movie.movie"
                   :sessions="movie.sessions"
                   :timesFilter="timesFilter"
        >
        </MovieItem>
        </div>
        <div v-else-if="movies.length">
            No results for <span v-for="genre in genresFilter"> {{genre}} </span>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
    import MovieItem from "./MovieItem.vue";
    export default {
        components: {
            MovieItem:MovieItem
        },
        props:["genresFilter","timesFilter"],
        data() {
            return {
                movies : []
            }
        },
        computed:{
            filterMovies(){
                return this.movies.filter((movie)=>{
                    if(!this.genresFilter.length)
                        return true
                    else {
                        let genres = movie.movie.Genre.split(", ")
                        let matched=true;
                        this.genresFilter.forEach(genre=>{
                            if(genres.indexOf(genre)===-1)
                                matched=false
                        })
                        return matched
                    }
                })
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

<style scoped>
div{
    color: white;
    font-size: 20px;
}
</style>