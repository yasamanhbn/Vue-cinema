<template>
    <div>
        <header-app></header-app>
        <section>
            <movie-list></movie-list>
            <movie-filter></movie-filter>
        </section>
    </div>
</template>

<script>
    import header from './component/header.vue';
    import MovieList from './component/movieList.vue';
    import MovieFilter from './component/filterSection/movieFilter.vue';

    export default {
        components: {
            headerApp: header,
            movieList: MovieList,
            movieFilter: MovieFilter
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