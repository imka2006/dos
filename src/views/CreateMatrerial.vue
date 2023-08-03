<template>
    <section class="material">
        <div class="container">
            <div class="df-aic-jcsb">
                <h2 class="title">Материал</h2>
                <Edit v-if="edit" @click="edit = !edit" />
                <div v-else class="material-btns">
                    <Btn @click="edit = !edit" style="padding: 15px 70px;" :disabled="false" text="Отмена" />
                    <Btn @click="edit = !edit" style="padding: 15px 70px;" text="Сохранить" />
                </div>
            </div>
            <div>
                <h4 class="material-name">Название</h4>
                <input type="text" class="material-input" placeholder="Введите" v-model="title">
                <h4 class="material-name">Аннотация</h4>
                <textarea class="material-input textarea" placeholder="Введите" v-model="textArea"></textarea>
                <h4 class="material-name">Область</h4>

                <div class="material-checkbox-wrapper">
                    <div class="material-checkbox">
                        <Checkbox @childClick="handleChildClick" v-for="item in store.state.sciences" :key="item.title"
                            :item="item.title" />
                    </div>
                </div>
                <h4 class="material-name">Автор</h4>
                <input type="text" class="material-input" placeholder="Введите" v-model="author">
                <div class="material-more">
                    <Plus />
                    Добавить автора
                </div>
                <h4 class="material-text">YouTube</h4>
                <input type="text" class="material-input" placeholder="Ссылка" v-model="youtube">
                <div class="material-more">
                    <Plus />
                    <input type="file" ref="fileInput" @change="handleFileChange">
                </div>
                <button @click="postFetch()" class="material-btn">Создать материал</button>
            </div>
        </div>
    </section>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import Edit from '../components/Edit.vue';
import Btn from '../components/btns/Btn.vue';
import Checkbox from '../components/checks/Checkbox.vue';
import Plus from '../assets/icons/global/Plus.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const edit = ref(false)
const store = useStore()
const item = ref(null);
const route = useRoute()

const title = ref("")
const textArea = ref("")
const author = ref("")
const youtube = ref("") 
const profession = ref([]) 
const fileInput = ref(null);
let selectedFile = null;

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0'); 

const formattedDate = `${year}-${month}-${day}`;

const handleFileChange = () => {
    selectedFile = fileInput.value.files[0];
};

const handleChildClick = (item, isActive) => {
    if (isActive) {
        profession.value.push(item)
    } else {
        const data = profession.value.filter(inner => inner !== item)
        profession.value = data
    }
};

const postFetch = async () => {
  const data = new FormData();
  data.append('title', title.value);
  data.append('year', formattedDate);
  data.append('description', textArea.value);
  data.append('youtube', youtube.value);
  data.append('disciplines', '1');
  data.append('authors', '1');
  data.append('pdf', selectedFile);

  try {
    const response = await fetch('http://89.208.106.189/api/v1/material/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('access_token'))}`,
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('File uploaded successfully:', result);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

onMounted(() => {
    store.dispatch("getSciences")
})
</script> 
<style lang="scss">
.material {
    margin-bottom: 95px;

    &-list {
        width: 375px;
        padding: 30px 0;
    }

    &-wrapper {
        display: flex;
        gap: 40px;
    }

    &-btn {
        color: #B81818;
        font-size: 18px;
        font-weight: 700;
        padding: 15px 35px;
        border-radius: 2px;
        border: 2px solid #B81818;
        display: block;
    }

    &-text {
        color: #181616;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    &-input {
        width: 100%;
        padding: 12px 10px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid #BABABA;
        margin-bottom: 30px;

        &::placeholder {
            color: #BABABA;
            font-size: 16px;
            font-weight: 400;
        }

        &.textarea {
            height: 150px;
            max-width: 100%;
        }

        &.another {
            max-width: 230px;
        }

    }

    &-more {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 30px;
        cursor: pointer;
    }

    &-item {
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 30px;
    }

    &-checkbox-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    &-checkbox {
        width: 17%;
    }

    &-btns {
        display: flex;
        gap: 30px;
    }


    &-name {
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    &-pointer {
        width: 40%;
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
    }

    &-host {
        width: 60%;
        text-align: left;
        color: #181616;
        font-size: 18px;
        font-weight: 500;
    }

    &-host-wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 60%;
    }

    &-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 77%;
    }

    &-block-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    &-block {
        border-radius: 2px;
        border: 1px solid #C9C9C9;
        background: #FFF;
        width: 100%;
        height: 396px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.max {
            width: 100%;
        }
    }

    @media screen and (max-width:1050px) {
        &-block {
            height: 300px;
        }
    }

    @media screen and (max-width:860px) {
        &-block {
            height: 200px;
        }

        &-checkbox {
            width: 25%;
        }
    }

    @media screen and (max-width:700px) {
        &-wrapper {
            flex-direction: column;
        }

        &-list {
            width: 100%;
            max-width: unset;
        }

        &-host {
            width: unset;
            text-align: right;
        }

        &-pointer {
            width: unset;
        }

        &-host-wrapper {
            width: unset;
        }

        &-content {
            width: 100%;
        }
    }

    @media screen and (max-width:650px) {
        &-btns {
            display: none;
        }

    }

    @media screen and (max-width:530px) {
        &-checkbox-wrapper {
            flex-direction: column;
        }

        &-checkbox {
            width: 100%;
        }

        &-input.another {
            width: 100%;
            max-width: unset;
        }

    }

    @media screen and (max-width:450px) {
        &-block-wrapper {
            flex-direction: column;
        }
    }


}
</style>