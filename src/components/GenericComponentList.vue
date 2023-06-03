<script setup lang="ts" generic="T extends string | number">
const { items } = defineProps<{
  items: T[]
}>()
</script>


<template>
  <Label v-for="(item, i) in items" :key="i" class="bg-[#40b8843f] p-2 mx-2 rounded-xl text-base">
    {{ typeof item === 'number' ? 'item number' : 'item string' }}
  </Label>
</template>


