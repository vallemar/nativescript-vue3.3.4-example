<script lang="ts" setup>
import { ref } from 'nativescript-vue';
import GenericComponentList from './GenericComponentList.vue';
import DefineModelComponent from './DefineModelComponent.vue';
import Card from './Card.vue';

const textModel = ref("");
const reactiveSlotTitle = ref("Define Slots example");
const genericComponentData = ref(["string 1", 1, "string 2", 2, "string 3", 3, "string 4", 4, "string 5", 5, "string 6", 6]);

</script>

<template>
  <Frame>
    <Page actionBarHidden="true" class="bg-[#1e1e20]">
      <StackLayout rows="*, auto, auto, *" class="px-4">
        <GridLayout height="150" class="mt-8">
          <ContentView height="150" width="150" class="rounded-full bg-[#40b8843f]"></ContentView>
          <Image height="100" width="100" src="~/assets/logo.png"></Image>
        </GridLayout>
        <Label class="mt-2 text-2xl text-center">NativeScript-Vue 3.3.4</Label>

        <!-- Define Model -->
        <Label class="mt-8">Define Model example</Label>
        <StackLayout class="bg-[#252529] rounded-2xl text-white p-3 mt-1">
          <Label>{{ textModel }}</Label>
          <DefineModelComponent v-model="textModel"></DefineModelComponent>
        </StackLayout>

        <!-- Define Slots -->
        <Card :title="reactiveSlotTitle">
          <template v-slot:title="{ text }">
            <Label class="mt-12">{{ text }}</Label>
          </template>
          <template #default>
            <DefineModelComponent v-model="reactiveSlotTitle"></DefineModelComponent>
          </template>
        </Card>

        <Label class="mt-12">Generic Components example</Label>
        <ScrollView orientation="horizontal">
          <StackLayout orientation="horizontal" class="mt-4 pb-2">
            <!-- Generic Components -->
            <GenericComponentList :items="genericComponentData"></GenericComponentList>
          </StackLayout>
        </ScrollView>

      </StackLayout>
    </Page>
  </Frame>
</template>
