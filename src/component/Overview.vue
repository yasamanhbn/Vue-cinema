<template>
    <section>
            <day-select @day-select="day=$event"></day-select>
            <movie-filter @checkFilter="filterGenres($event)"></movie-filter>
            <movie-list :genresFilter=genresFilter
                        :movies="movies"
                        :day="day"
                        :timesFilter="timesFilter"></movie-list>
    </section>
</template>

<script>
    import MovieList from "./MoviesSection/movieList.vue";
    import MovieFilter from "./filterSection/movieFilter.vue";
    import daySelect from "./daySelect/daySelect.vue";

    export default {
        props: ["movies"],
        data() {
            return {
                day:this.$moment(Date.now()),
                genresFilter: [],
                timesFilter: []
            }
        },
        components: {
            movieList: MovieList,
            movieFilter: MovieFilter,
            daySelect: daySelect
        },
        methods: {
            filterGenres(data) {
                if (data.check) {
                    if (data.genre)
                        this.genresFilter.push(data.genre);
                    if (data.time)
                        this.timesFilter.push(data.time);
                } else {
                    this.genresFilter.splice(this.genresFilter.indexOf(data.genre), 1)
                    this.timesFilter.splice(this.timesFilter.indexOf(data.time), 1)
                }
            }

        }
    }
</script>

<style scoped>
    section {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
    }
</style>