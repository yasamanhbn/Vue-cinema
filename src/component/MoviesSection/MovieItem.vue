<template>
    <div class="movie-item col-12">
        <div class="col-md-4 col-sm-5">
            <img :src="movie.Poster" class="col-12" :alt="movie.Title">
        </div>
        <div class="col-md-8 col-sm-7">
            <h4 class="title">{{movie.Title}}</h4>
            <span class="rated col-5">{{movie.Rated}}</span>
            <div class="sessions">
                <div v-for="session in filterSessions(sessions)" class="session-time">
                    {{session.time | moment("h:mm A")}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import timesUtil from "../../util/times";

    export default {
        props: ["movie", "sessions", "timesFilter"],
        methods: {
            filterSessions(sessions) {
                return sessions.filter(this.filterSessionsTime)
            },
            filterSessionsTime(session) {
                if (!this.$moment(session.time).isSame(this.$moment(Date.now()), 'day')) {
                    return false
                }else if (!this.timesFilter.length || this.timesFilter.length===2) {
                    return true
                } else if (this.timesFilter[0] === timesUtil.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18
                } else if (this.timesFilter[0] === timesUtil.BEFORE_6PM) {
                    return this.$moment(session.time).hour() < 18
                }
            },
        },
    }
</script>

<style scoped>
    .movie-item {
        display: flex;
        border-bottom: solid #555151 2px;
        padding: 1%;
        margin: 1%;
    }

    .title {
        color: #ffa624;
        display: inline;
        margin: 1%;
    }

    .rated {
        background: #b50010;
        padding: 1%;
        text-align: center;
        border-radius: 5px;
        margin: 1%;
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

    @media (max-width: 500px) {
        .title {
            font-size: 18px;
        }

        .rated {
            margin: 0;
            font-size: 14px;
            display: block;
        }
    }

</style>