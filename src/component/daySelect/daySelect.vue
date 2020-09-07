<template>
    <div id="day-select" class="col-12">
        <ul class="days">
            <li :class="{day:true, active:isActive(day)}"
                v-for="day in days"
                @click="daySelected(day)">
                {{ formatDay(day) }}
            </li>
            <li class="day-selector" @click="changeDay(1)"><</li>
            <li class="day-selector" @click="changeDay(-1)">></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected:this.$moment(),
                days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, 'days'))
            }
        },
        methods: {
            formatDay(day) {
                if (day.isSame(this.$moment(), 'day'))
                    return 'Today'
                return day.format('ddd DD/MM')
            },
            isActive(day){
                return day.isSame(this.selected,'day')
            },
            daySelected(day){
                this.selected = day;
                this.$emit("day-select",day);
            },
            changeDay(index){
                const newDay = this.$moment(this.selected).add(index,'days');
                this.daySelected(newDay);
            }
        }
    }
</script>

<style scoped>
    #day-select{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0;
    }
    .days {
        padding: 0;
        width: 90%;
        display: flex;
        justify-content: space-around;
        background: #232323 ;
        list-style: none;
    }
    .day{
        font-size: 25px;
        background: #232323;
        display: inline;
        padding: 1%;
    }
    .day:hover{
        cursor: pointer;
    }
    .active{
        background: black;
        text-decoration: underline;
        color: darkred;
    }
    @media (max-width: 800px) {
        .day-selector{
            font-size: 40px;
        }
        .day{
            display: none;
        }
        .active{
            display: inline;
         }
    }
    @media (min-width: 800px) {
        .day-selector{
            display: none;
        }
    }
</style>