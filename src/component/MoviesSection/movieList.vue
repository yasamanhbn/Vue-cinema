<template>
    <div class="col-lg-8 col-md-11">
        <div v-if="filterMovies.length">
            <MovieItem v-for="movie in filterMovies"
                       :movie="movie.movie">
                <div class="sessions">
                    <div v-for="session in filterSessions(movie.sessions)" class="session-time">
                        {{session.time | moment("h:mm A")}}
                    </div>
                </div>
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
    import timesUtil from "../../util/times";

    export default {
        components: {
            MovieItem: MovieItem
        },
        props: ["movies", "genresFilter", "day", "timesFilter"],
        methods:{
            filterSessions(sessions) {
                return sessions.filter(this.filterSessionsTime)
            },
            filterSessionsTime(session) {
                if (!this.$moment(session.time).isSame(this.day, 'day')) {
                    return false
                } else if (!this.timesFilter.length || this.timesFilter.length === 2) {
                    return true
                } else if (this.timesFilter[0] === timesUtil.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18
                } else if (this.timesFilter[0] === timesUtil.BEFORE_6PM) {
                    return this.$moment(session.time).hour() < 18
                }
            }
        },
        computed: {
            filterMovies() {
                return this.movies.filter((movie) => {
                    if (!this.genresFilter.length)
                        return true
                    else {
                        let genres = movie.movie.Genre.split(", ")
                        let matched = true;
                        this.genresFilter.forEach(genre => {
                            if (genres.indexOf(genre) === -1)
                                matched = false
                        })
                        return matched
                    }
                })
            }
        }
    }
</script>

<style scoped>
    div {
        color: white;
        font-size: 20px;
    }

    .session-time {
        background-color: #6e6e6e;
        padding: 0.5rem;
        margin-right: 0.5rem;
        user-select: none;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: white;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        white-space: nowrap;
    }

    .sessions {
        margin: 3%;
        padding: 1%;
        display: flex;
        flex-wrap: wrap;
    }
</style>