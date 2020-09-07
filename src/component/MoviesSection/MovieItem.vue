<template>
    <div class="movie-item col-12">
        <div>
            <router-link tag="h4"
                         class="title"
                         :to="{name: 'movie', params:{id:movie.imdbID}}">
                <img :src="movie.Poster" class="col-12" :alt="movie.Title">
            </router-link>
        </div>
        <div class="col-md-8 col-sm-7">
            <router-link tag="h4"
                         class="title"
                         :to="{name: 'movie', params:{id:movie.imdbID}}">
                {{movie.Title}}
            </router-link>
            <span class="rated col-5">{{movie.Rated}}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {
        props: ["movie"]
    }
</script>

<style scoped>
    .movie-item {
        display: flex;
        border-bottom: solid #555151 2px;
        padding: 1%;
        margin: 1%;
    }

    img{
        width: 100%;
    }

    .title {
        color: #ffa624;
        display: inline;
        margin: 1%;
    }
    .title:hover{
        cursor: pointer;
    }

    .rated {
        background: #b50010;
        padding: 1%;
        text-align: center;
        border-radius: 5px;
        margin: 1%;
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