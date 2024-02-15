<template>
    <div class="container">
      <div class="text-end mt-2">
        <h2>{{ point }}</h2>
      </div>
      <h3 class="mt-2">Question</h3>
      <div class="card my-3 p-2">
        <draggable
          class="row"
          :list="listQuestions"
          group="people"
          animation="300"
          itemKey="name"
          :disabled="submitable"
        >
          <template #item="{ element, index }">
            <div class="col-md-2">
              <div class="rounded list-group-item m-1 bg-secondary text-light">
                {{ element }}
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="row">
        <template
          v-for="(itemQuestion, indexQuestion) in topics"
          :key="indexQuestion"
        >
          <div class="col-12 col-md-3">
            <h3>{{ itemQuestion.title }}</h3>
            <draggable
              class="list-group"
              :list="itemQuestion.items"
              group="people"
              itemKey="name"
              animation="300"
              :effect-allowed="{ drop: 'move', copy: 'copy', none: 'none' }"
              ghost-class="custom-ghost-class"
              :disabled="submitable"
            >
              <template #item="{ element, index }" >
                <div
                  class="list-group-item mb-1"
                  :class="
                    submitable ? checkAnswer(element, itemQuestion.answers) : ''
                  "
                  @click="deleteElement(element,index,indexQuestion)"
                >
                <b> {{ element }}</b>
                </div>
              </template>
            </draggable>
          </div>
        </template>
      </div>
      <div class="text-end mt-2">
        <button class="btn btn-primary m-1" @click="submit">Submit</button>
        <button class="btn btn-success m-1" @click="redo">Redo</button>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import draggable from "vuedraggable";
  
  const submitable = ref(false);
  const point = ref(0);
  
  const listQuestions = ref([
    "Dog",
    "Red",
    "Teacher",
    "Onion",
    "Police",
    "Watermelon",
    "Strawberry",
    "Fish",
    "Cat",
    "Doctor",
    "Banana",
    "White",
    "Cow",
  ]);
  
  const topics = ref([
    {
      title: "Animals",
      key: "animals",
      items: [],
      answers: ["Dog", "Fish", "Cat", "Cow"],
    },
    {
      title: "Vegetables",
      key: "vegetables",
      items: [],
      answers: ["Onion", "Watermelon", "Strawberry", "Banana"],
    },
    {
      title: "Colors",
      key: "colors",
      items: [],
      answers: ["Red", "White"],
    },
    {
      title: "Jobs",
      key: "jobs",
      items: [],
      answers: ["Teacher", "Police", "Doctor"],
    },
  ]);
  
  const checkAnswer = (item, answers) => {
    let className = '';
    if(answers.includes(item))
    {
      className = "bg-success text-light"
    }
    else{
      className = "bg-danger text-light"
    }
   
    return className;
  };
  
  const submit = () => {
    submitable.value= true;
    topics.value.forEach((value) => {
      value.items.forEach((item) => {
          if(value.answers.includes(item))
          {
            point.value++;
          }
      })
    })
  }
  
  const deleteElement = (element,indexItem,indexTopic) => {
    if(!submitable.value)
    {
      listQuestions.value.push(element);
      topics.value[indexTopic].items.splice(indexItem,1)
    }
  }
  
  const redo = () => {
    submitable.value = false;
    point.value = 0;
  }
  </script>
  
  <style>
  .list-group {
    background: #f5f5f5;
    width: 100%;
    min-height: 400px;
  }
  
  .list-group-item {
    cursor: pointer;
  }
  
  .card {
    min-height: 100px;
  }
  
  .custom-ghost-class {
    opacity: 1; /* Make the ghost fully opaque */
    transform: translateY(-10px); /* Lift the ghost slightly above the cursor */
    transition: transform 0.3s ease, opacity 0.3s ease; /* Add a smooth transition */
  }
  </style>