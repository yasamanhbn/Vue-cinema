<template>
    <section>
        <movie-list :genresFilter=genresFilter
                    :timesFilter="timesFilter"></movie-list>
        <movie-filter @checkFilter="filterGenres($event)"></movie-filter>
    </section>
</template>

<script>
    import MovieList from "./MoviesSection/movieList.vue";
    import MovieFilter from "./filterSection/movieFilter.vue";
    export default {
        data(){
            return{
                genresFilter:[],
                timesFilter:[]
            }
        },
        components: {
            movieList: MovieList,
            movieFilter: MovieFilter
        },
        methods:{
            filterGenres(data){
                if(data.check) {
                    if(data.genre)
                        this.genresFilter.push(data.genre);
                    if(data.time)
                        this.timesFilter.push(data.time);
                }
                else {
                    this.genresFilter.splice(this.genresFilter.indexOf(data.genre),1)
                    this.timesFilter.splice(this.timesFilter.indexOf(data.time),1)
                }
            }

        }
    }
</script>

<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
    }
</style>