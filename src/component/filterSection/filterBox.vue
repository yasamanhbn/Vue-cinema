<template>
    <div class="check-filter">
        <span :class="{'checkbox':true,active:checked}" @click="checkedFilter"></span>
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        props:["title","time"],
        data(){
            return{
                checked:false
            }
        },
        methods:{
            checkedFilter(){
                this.checked=!this.checked;
                let time=null
                let genre=null
                if(this.time) {
                    time = this.title
                }
                else {
                    genre = this.title
                }
                const data={
                    time:time,
                    genre:genre,
                    check:this.checked
                }
                this.$emit("checkFilter",data)
            }
        }
    }
</script>

<style scoped>
    .checkbox {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        border: 1px solid white;
        border-radius: 3px;
        user-select: none;
        box-shadow: 1px 2px 3px rgba(0,0,0,.2);
    }
    span{
        margin: 2px;
        font-size: 20px;
    }
    .active{
        background: #ffa624 ;
    }
</style>