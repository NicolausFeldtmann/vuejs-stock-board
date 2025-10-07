<template>
    <div class="card">
        <!-- Slot für belibigen Inhalt-->
         <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseCard'
}
</script>

<style>
.card{
    background-color: #011F35;
    border-radius: 16px;
    padding: 24px 32px;
}
</style>