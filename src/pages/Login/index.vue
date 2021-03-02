<template>
    <div>
        <input v-model="account" type="text">
        <input v-model="password" type="text">
        <button @click="login">登入</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                account: 'admin',
                password: '123456'
            }
        },
        methods: {
            login() {
                const { account, password } = this
                this.$store.dispatch('user/login', {account,password}).then(() => {
                    this.$router.push({ path: '/' })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>