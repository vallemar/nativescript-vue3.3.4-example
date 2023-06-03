<script setup lang="ts">


const { title = "Default Title" } = defineProps<{ title?: string }>()

defineSlots<{
  default?: () => any
  title?: (props: { text: string }) => any
}>()
</script>

 
<template>
  <slot name="title" :text="title"></slot>
  <StackLayout class="bg-[#252529] rounded-2xl text-white p-3 mt-1">
    <slot></slot>
  </StackLayout>
</template>


