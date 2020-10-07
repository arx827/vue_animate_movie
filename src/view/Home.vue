<template>
<div class="Home">

    <Scence @next="nextScence" :Scence="[...ScenceManger]" />
    <!--<Lottie :options="defaultOptions"></Lottie>-->
    <transition name="bounce">
        <div class="transition" v-if="FadeInOut">淡入淡出</div>
    </transition>
    <!--
    <button @click="transitionFn">12</button>
    -->
</div>
</template>

<script>
import Scence from "@/components/Scence.vue";
import {
    SceneManager
} from "@/plugins/scenceFactory.js";
import {
    scenesAll
} from "@/static/json/scenes.js";
// import Lottie from '@/components/Lottie.vue';
// import * as animationData from '../static/home/home.json';

export default {
    name: "Home",
    data() {
        return {
            FadeInOut: true,
            ScenceManger: {},
            // defaultOptions: {
            //     animationData: animationData.default,
            // },
        };
    },
    components: {
        Scence,
        // Lottie
    },
    created() {
        // 初始化
        this.ScenceManger = SceneManager(scenesAll, this.transitionFn);

    },
    mounted() {
        // 第一場警開始
        this.ScenceManger.createStart();
    },

    methods: {
        // 轉場動畫
        transitionFn() {
            if (this.FadeInOut) {
                this.FadeInOut = false
            } else {
                this.FadeInOut = true
            }

        },
        // 下一頁
        nextScence(sIds) {
            this.ScenceManger.next(sIds, scenesAll);
        }
    }

};
</script>

<style lang="scss">
.bounce-enter-active {
    animation: bounce-in 1s;
}

.bounce-leave-active {
    animation: bounce-in 1s reverse;
}

.transition {
    position: absolute;
    z-index: 1001;
    top: 0px;
    pointer-events: none;
    width: 1000px;
    height: 576px;
    background-color: black;
    opacity: 0;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
