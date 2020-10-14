<template>
<div class="fitLayout">
    <button class="startBtn" @click="$emit('emitOpeningBtn')">開場</button>
</div>
</template>

<script>
export default {
    name: "Opening",
    data() {
        return {
            loadingTimer: ""
        };
    },
    beforeCreate() {
        this.$store.dispatch("updateLoading", true);
    },
    mounted() {
        let vm = this;
        // this.loadingTimer = setTimeout(function() {
        vm.$store.dispatch("updateLoading", false);
        // }, vm.$store.state.loadingDelay);
    },
    beforeDestroy() {
        // clearTimeout(this.loadingTimer);
    }
};
</script>

<style lang="scss" scoped>
.fitLayout {
    background: #dbfaff;
    // width: inherit;
    // min-height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.startBtn {
    background: var(--color-main);
    position: absolute;
    width: 200px;
    bottom: 20px;
    left: calc((100% - 200px) / 2);
    border: 0;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

    &:focus {
        outline: 0;
    }

    &:active {
        opacity: 0.8;
    }
}
</style>
