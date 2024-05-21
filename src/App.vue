<template>
    <div class="container mt-4">
        <table class="table table-stripered table-border table-hover">
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in data" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios  from "axios";

const data = ref(null);
const url = ref(import.meta.env.VITE_APP_API);
const fetchData = async() => {
    let response = await axios.get(url.value + 'employee')
    if(response.status)
    {
        data.value = response.data.data;
    }
}

onMounted(() => {
    fetchData();
})
</script>

<style>

</style> 