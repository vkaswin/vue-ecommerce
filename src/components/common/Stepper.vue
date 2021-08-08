<template>
    <div class="stepper-container">
        <div class="stepper-wrapper"  v-for="(list,index) in steps" :key="index" :style="{width: `calc(100%/${steps.length})`}" >
            <div class="stepper-dot" :style="{borderColor: index <= activeStep ? activeDot : inactiveDot }"></div>
            <label class="stepper-label" :style="{color: index <= activeStep ? activeColor : inactiveColor }">{{list}}</label>
            <div class="stepper-connector" :style="{borderColor: index <= activeStep ? activeConnector : inactiveConnector}" v-if="index !== 0"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stepper",
    props: ['steps', 'activeColor','inactiveColor', 'activeStep','activeDot','inactiveDot','activeConnector','inactiveConnector'],
}
</script>

<style lang="scss" scoped>
.stepper-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFF;
    padding: 20px 0px;
    margin-top: 20px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
    .stepper-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: relative;
        .stepper-dot{
            width: 24px;
            height: 24px;
            background: white;
            border: 6px solid;
            border-radius: 100%;
            z-index: 1;
        }
        .stepper-label{
            font-weight: bold;
            text-transform: uppercase;
        }
        .stepper-connector{
            position: absolute;
            width: 100%;
            border: 2px solid;
            margin-right: 100%;
            top: calc(25% - 4px);
            z-index: 0;
        }
    }
}
</style>