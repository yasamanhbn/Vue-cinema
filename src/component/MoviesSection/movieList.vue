<template>
    <div class="col-md-8 col-sm-7">
        <div>
        <p v-for="movie in filterMovies">{{movie.title}}</p>
        </div>
    </div>
</template>

<script>
    import genre from '../../util/genres'
    export default {
        props:["genresFilter"],
        data() {
            return {
                movies : [
                    {title: "Home alone",genre:genre.COMEDY},
                    {title: "Narnia",genre:genre.CRIME},
                    {title: "harry potter",genre:genre.ANIMATION}
                ]
            }
        },
        computed:{
            filterMovies(){
                return this.movies.filter((movie)=>{
                    if(!this.genresFilter.length)
                        return true
                    return this.genresFilter.find(genre =>movie.genre === genre)
                })
            }
        }
    }
</script>

<style scoped>
div{
    color: white;
}
</style>