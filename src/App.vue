<template>
    <div>
        <header-app></header-app>
        <section>
            <movie-list :genresFilter=genresFilter></movie-list>
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
                genresFilter:[]
            }
        },
        components: {
            headerApp: header,
            movieList: MovieList,
            movieFilter: MovieFilter
        },
        methods:{
            filterGenres(data){
                if(data.check)
                    this.genresFilter.push(data.genre)
                else {

                    this.genresFilter.splice(this.genresFilter.indexOf(data.genre),1)
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
    }
</style>