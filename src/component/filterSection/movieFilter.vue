<template>
    <div class="col-md-3 col-sm-5 movie-filter">
        <h1>Filter Result</h1>
        <hr style="height:5px;color:white;background-color:white"/>
        <div>
            <filter-box v-for="genre in genres" :title="genre"></filter-box>
        </div>
    </div>
</template>

<script>
    import genres from '../../util/genres'
    import filterBox from "./filterBox.vue";
    export default {
        data(){
            return{
                genres
            }
        },
        components:{
            filterBox:filterBox
        }
    }
</script>

<style scoped>
    h1 {
        color: white;
    }
</style>