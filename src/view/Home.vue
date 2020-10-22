<template>
<div class="Home">
    <TheaterHeader :description="getCurrentData.description" v-if="isShow == 'Scence'" />
    <div class="theater theater__pcCover">
        <div class="theater__mbCover">
            <!-- 圖片為定義寬高比例用 -->
            <img class="img-fluid theater__ratio" src="@/assets/images/demo/img_testbg.jpg" />
            <transition name="trans" mode="out-in">
                <Loading v-if="$store.state.isLoading" />
            </transition>
            <div class="theater__main">
                <transition name="fade" mode="out-in">
                    <Opening v-if="isShow == 'Opening'" @emitOpeningBtn="openingBtn" />
                </transition>
                <transition name="fade" mode="out-in">
                    <Scence v-if="isShow == 'Scence'" :currentData="getCurrentData" />
                </transition>
            </div>
        </div>
        <Procedure v-if="isShow == 'Scence'" />
        <!-- 開始/再玩一次 - 按鈕 -->
        <transition name="fade" mode="out-in">
            <button v-if="isShow == 'Opening'" class="startBtn" @click="openingBtn">
                開場
            </button>
        </transition>
        <transition name="fade" mode="out-in">
            <button v-if="$store.state.isFinally" class="scence__reStartBtn" @click="reStart">
                再玩一次
            </button>
        </transition>
        <transition name="fade" mode="out-in">
            <TheaterOptions :questionOpt="getCurrentData.questionOpt" @next="nextScence" v-if="$store.state.isOptShow" />
        </transition>
    </div>
</div>
</template>

<script>
import TheaterHeader from "@/components/Theater/TheaterHeader.vue";
import Loading from "@/components/Loading.vue";
import Opening from "@/components/Opening.vue";
import Scence from "@/components/Scence.vue";
import Procedure from "@/components/Theater/Procedure.vue";
import TheaterOptions from "@/components/Theater/TheaterOptions.vue";
// import { SceneManager } from "@/plugins/scenceFactory.js";
import {
    scenesAll
} from "@/static/json/scenes.js";
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    name: "Home",
    data() {
        return {
            ScenceManger: {},
            isShow: "Opening",
            // 測試
            // isShow: "Scence",
            isTranform: false
            //   defaultOptions: {
            //     animationData: animationData.default
            //   }
        };
    },
    components: {
        TheaterHeader,
        Loading,
        Opening,
        Scence,
        Procedure,
        TheaterOptions
        // Lottie
    },
    created() {
        // 實體化
        // this.ScenceManger = SceneManager(scenesAll);
        this.init([scenesAll, 8]);
    },
    mounted() {
        // 第一場景開始
        // this.ScenceManger.createStart();
        this.createStart();
        // if (this.getIsFinally) {
        //   this.$store.dispatch("ScenceManger/AfterAnimate", () => {
        //     this.isFinally = true;
        //   });
        // }
    },
    computed: {
        ...mapGetters("ScenceManger", ["getCurrentData", "getScenceDataById"])
    },
    methods: {
        ...mapActions("ScenceManger", ["goToNext", "init", "createStart"]),
        // 開始
        openingBtn() {
            this.isShow = "Scence";
        },
        // 下一頁
        nextScence(sIds) {
            this.isShow = "";
            this.goToNext(sIds);
            this.$nextTick(() => {
                this.isShow = "Scence";
            });
        },
        // 再玩一次
        reStart() {
            // this.init([scenesAll, 8]);
            this.isShow = "Opening";
            this.createStart();
        }
    }
};
</script>

<style lang="scss">
.Home {
    width: 100%;
    max-width: var(--scenes_w);
    margin: 0 auto;
}

.theater {
    position: relative;
    z-index: 10;

    &__pcCover {
        @include md-media {
            // height: var(--scenes_h);
            overflow: hidden;
        }
    }

    &__mbCover {
        position: relative;
        overflow: hidden;

        @include md-media {
            // height: var(--scenes_h);
            overflow: visible;
        }
    }

    &__ratio {
        opacity: 0;
        pointer-events: none;
    }

    &__main {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        // height: calc(1000 / 100 * 670);
        // min-height: var(--scenes_h);
        background: var(--Home-bg);
        box-shadow: 0 0 15px var(--box-shadow);
        // overflow: hidden;
        z-index: 10;
    }
}

.fitLayout {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.startBtn,
.scence__reStartBtn {
    background: var(--color-main);
    position: static;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    z-index: 30;

    @include md-media {
        position: absolute;
        width: 200px;
        bottom: 20px;
        left: calc((100% - 200px) / 2);
    }

    &:focus {
        outline: 0;
    }

    &:active {
        opacity: 0.8;
    }
}

// 開場、場景淡出淡入
.fade-enter-active {
    transition: opacity 2s;
}

.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

// 轉場淡出淡入
.trans-enter-active {
    transition: opacity 0s;
}

.trans-leave-active {
    transition: opacity 1s;
}

.trans-enter,
.trans-leave-to {
    opacity: 0;
}
</style>
