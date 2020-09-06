<template>
    <div class="col-md-3 col-sm-10 movie-filter">
        <h1>Filter Result</h1>
        <hr style="height:4px;color:white;background-color:white"/>
        <h3>By time of day</h3>
        <div>
            <filter-box v-for="time in times" :title="time"
                        :time="true"
                        @checkFilter="checkFilter($event)"></filter-box>
        </div>
        <br/>
        <br/>
        <h3>By genre</h3>
        <div>
            <filter-box v-for="genre in genres" :title="genre"
                        :time="false"
                        @checkFilter="checkFilter($event)"></filter-box>
        </div>
    </div>
</template>

<script>
    import genres from '../../util/genres'
    import filterBox from "./filterBox.vue";
    import times from "../../util/times";
    export default {
        data(){
            return{
                genres,
                times
            }
        },
        components:{
            filterBox:filterBox
        },
        methods:{
            checkFilter(data){
                this.$emit("checkFilter",data)
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: white;
    }
    @media (max-width: 500px) {
        h1{
            font-size: 22px;
        }
    }
</style>