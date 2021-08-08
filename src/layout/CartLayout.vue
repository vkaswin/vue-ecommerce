<template>
    <stepper :steps="steps" :activeStep="activeStep" activeColor="#fbca55" inactiveColor="#B8B8B8" activeDot="#fbca55" inactiveDot="#ccc" activeConnector="#fbca55" inactiveConnector="#ccc" />
    <slot></slot>
</template>

<script>
import Stepper from '@/components/common/Stepper'
export default {
    name: "CartLayout",
    components: {
        Stepper
    },
    data(){
        return{
            steps: ["My Cart", "Choose Address", "Payment"]
        }
    },
    computed: {
        activeStep() {
            let active = "";
            switch (this.$route.name) {
                case "Cart":
                    active = 0
                    break;
                case "Address":
                    active = 1;
                    break
                case "Payment":
                    active = 2
                default:
                    break;
            }
            return active;
        }
    }
}
</script>