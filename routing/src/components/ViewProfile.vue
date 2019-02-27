<template>
    <div class="view-profile">
        <h2>Profilie</h2>
        {{ userId }}
    </div>
</template>

<script>
export default {
    name: 'ViewProfile',
    data() {
        return {
            userId: this.$route.params.user_id
        }
    }
}
</script>


<style scoped>

</style>
