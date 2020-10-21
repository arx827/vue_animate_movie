<template>
<div class="theater__procedure d-flex justify-content-center align-items-md-center">
    <div class=" d-flex flex-md-column flex-wrap flex-md-column-reverse justify-content-start">
        <!-- <div class="procedure__stepItem procedure__stepItem--active"></div>
    <div class="procedure__stepItem" @click="stepClick($event)"></div>
    <div class="procedure__stepItem" @click="stepClick($event)"></div> -->

        <template v-for="item in getHistroyMax">
            <div class="procedure__stepItem" :class="{'procedure__stepItem--active':(item <= getHistroyNums)}" @click="stepClick($event, item)" :key="item"></div>
        </template>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
export default {
    name: "TheaterProcedure",
    computed: {
        ...mapGetters("ScenceManger", ["getHistroyNums", "getHistroyMax"]),
    },
    methods: {
        stepClick(event, item) {
            console.log(event.target, item);
        }
    },
    created() {

    }
};
</script>

<style lang="scss" scoped>
.theater {
    &__procedure {
        position: static;
        // background: #ffc107;
        z-index: 40;

        // margin-top: 1rem;
        // margin-bottom: 1rem;
        @include md-media {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            margin-right: 38px;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
}

.procedure {
    &__stepItem {
        width: 16px;
        height: 16px;
        margin: 0.5rem;
        border-radius: 50%;
        background: var(--btn-step);
        cursor: pointer;

        &--active {
            background: var(--btn-step-active);
        }

        +.procedure__stepItem {
            // margin-left: 1rem;
            // @include md-media {
            //   margin-bottom: 1rem;
            //   margin-left: 0;
            // }
        }
    }
}
</style>
