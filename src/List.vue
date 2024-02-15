<!-- List.vue -->
<template>
    <div class="list">
      <h3>{{ title }}</h3>
      <draggable v-model="items" :group="{ name: 'lists', pull: 'clone', put: false }">
        <div v-for="item in items" :key="item.id" class="list-item">
          {{ item.text }}
        </div>
      </draggable>
    </div>
  </template>
  
  <script setup>
  import { ref, toRefs } from 'vue';
  import draggable from 'vuedraggable';
  const props = defineProps( ['title', 'items']);
  const { tilte,items } = toRefs(props);
  </script>
  
  <style scoped>
  .list {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    background-color: #f9f9f9;
  }
  
  .list-item {
    background-color: #fff;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  </style>
  