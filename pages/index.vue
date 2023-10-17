<script setup lang="ts">
const date = new Date(12940839999581)
const newDate = addMinutes(date, 20)
</script>

<template>
  <div>
    {{ newDate }}
  </div>
</template>