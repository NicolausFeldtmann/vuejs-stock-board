<template>
    <div class="card">
        <div class="card-head">
            <h1 class="name">{{ name }}</h1>
            <img class="logo" :src="logoPath" alt="Logo image" v-if="logoPath">
        </div>
        <div class="subline">Revenue {{ lastQuartalRev }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseCard',
    props: {
        name: {
            type: String,
            required: true
        },
        logoPath: {
            type: String,
            required: true
        },
        lastQuartalRev: {
            type: String,
            required: true
        }
    },
}
</script>

<style>
.card{
    background-color: #011F35;
    border-radius: 16px;
    width: auto;
    height: 148px;
    margin: 0px 12px 0px 12px;
}

.name{
    color: white;
    margin: 0px 8px 0px 0px;
    font-size: 20px;
}

.card-head{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px 32px 0px 32px;
}

.logo{
    width: 20px;
    height: 20px;
}

.subline{
    color: white;
}
</style>