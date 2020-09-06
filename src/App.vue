<template>
    <div>
        <header-app></header-app>
        <section>
            <movie-list :genresFilter=genresFilter
                        :timesFilter="timesFilter"></movie-list>
            <movie-filter @checkFilter="filterGenres($event)"></movie-filter>
        </section>
    </div>
</template>

<script>
    import header from './component/header.vue';
    import MovieList from './component/MoviesSection/movieList.vue';
    import MovieFilter from './component/filterSection/movieFilter.vue';

    export default {
        data(){
            return{
                genresFilter:[],
                timesFilter:[]
            }
        },
        components: {
            headerApp: header,
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

<style>
    * {
        background: #343333;
        margin: 0;
        padding: 0;
        color: white;
    }
    section{
        display: flex;
        flex-wrap: wrap;
    }
</style>