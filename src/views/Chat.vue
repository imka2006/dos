<template>
    <section class="chat">
        <div class="chat-wrapper another"></div>
        <div class="container">
            <div class="chat-wrapper">
                <div class="chat-left" :class="{ active: isActive }">
                    <label class="chat-label">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 19.2812C15.4183 19.2812 19 15.6995 19 11.2812C19 6.86297 15.4183 3.28125 11 3.28125C6.58172 3.28125 3 6.86297 3 11.2812C3 15.6995 6.58172 19.2812 11 19.2812Z"
                                stroke="#C6C6C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.0004 21.2813L16.6504 16.9313" stroke="#C6C6C6" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type="text" placeholder="Поиск">
                    </label>
                    <div v-for="item in contactList" :key="item.id"
                        @click="online = item.lastMessage; name = item.name; isActive = !isActive" class="chat-block">
                        <div class="chat-block-left">
                            <div class="chat-ava-wrapper">
                                <svg width="50" height="51" viewBox="0 0 50 51" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.28125" width="50" height="50" rx="25" fill="#222324" />
                                    <path
                                        d="M19.832 16.2188V33.2812H16.9141V16.2188H19.832ZM25.1875 16.2188V18.5625H11.6055V16.2188H25.1875ZM30.3789 16.2188V33.2812H27.4375V16.2188H30.3789ZM37.3398 23.6836V26.0156H29.6289V23.6836H37.3398ZM38.3125 16.2188V18.5625H29.6289V16.2188H38.3125Z"
                                        fill="white" />
                                </svg>

                                <div class="chat-circle"></div>
                            </div>
                            <div class="chat-info">
                                <h4 class="chat-name">{{ item.name }}</h4>
                                <div class="chat-message">{{ item.message }}</div>

                            </div>
                        </div>
                        <div class="chat-block-right">
                            <span class="chat-time">{{ item.lastMessage }}</span>
                            <div class="chat-number">{{ item.quantityMessage }}</div>
                        </div>
                    </div>
                </div>
               
                <div v-if="store.state.chatActive" class="chat-right" :class="{ active: !isActive }">
                    <div class="chat-head">
                        <span @click="isActive = !isActive">Назад</span>
                        <h3 class="chat-title">{{ name }}</h3>
                        <div class="chat-last-online">был(а) в {{ online }}</div>
                    </div>
                    <div class="chat-content">
                        <div v-for="item in messageList" :key="item.id" class="chat-item" :class="{my: item.userId == user.id}">
                            {{ item.text }}
                            <div class="chat-item-time">
                                {{item.time}}
                            </div>
                        </div> 
                    </div>
                    <label class="chat-label">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_630_5846)">
                                <path
                                    d="M21.4398 11.3312L12.2498 20.5212C11.124 21.647 9.59699 22.2795 8.0048 22.2795C6.41262 22.2795 4.88565 21.647 3.7598 20.5212C2.63396 19.3953 2.00146 17.8684 2.00146 16.2762C2.00146 14.684 2.63396 13.157 3.7598 12.0312L12.9498 2.84117C13.7004 2.09061 14.7183 1.66895 15.7798 1.66895C16.8413 1.66895 17.8592 2.09061 18.6098 2.84117C19.3604 3.59173 19.782 4.60971 19.782 5.67117C19.782 6.73263 19.3604 7.75061 18.6098 8.50117L9.4098 17.6912C9.03452 18.0665 8.52553 18.2773 7.9948 18.2773C7.46407 18.2773 6.95508 18.0665 6.5798 17.6912C6.20452 17.3159 5.99369 16.8069 5.99369 16.2762C5.99369 15.7454 6.20452 15.2365 6.5798 14.8612L15.0698 6.38117"
                                    stroke="#222324" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_630_5846">
                                    <rect y="0.28125" width="24" height="24" rx="4" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <input class="chat-another" type="text" placeholder="Введите сообщение">

                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_630_5857)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.3877 4.34993L3.57143 11.1563H10.8752C11.4965 11.1563 12.0002 11.66 12.0002 12.2813C12.0002 12.9026 11.4965 13.4063 10.8752 13.4063H3.57143L2.3877 20.2127L20.8943 12.2813L2.3877 4.34993ZM1.4833 12.2813L0.0956953 4.30256C-0.0164816 3.65754 0.192231 2.99828 0.655175 2.53533C1.23685 1.95366 2.11407 1.78472 2.87018 2.10876L22.9737 10.7246C23.5964 10.9914 24.0002 11.6038 24.0002 12.2813C24.0002 12.9588 23.5964 13.5712 22.9737 13.8381L2.87018 22.4538C2.11407 22.778 1.23685 22.6089 0.655175 22.0274C0.192231 21.5643 -0.0164819 20.9051 0.0956953 20.2601L1.4833 12.2813Z"
                                    fill="#D6001C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_630_5857">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.28125)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </label>
                </div>
                <div v-else class="chat-right unActive">
                    <div class="chat-none-active">Выберите чат!</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
const currentTime = ref('');
const time = ref("")
const store  = useStore()
console.log(store.state.chatActive);
function updateCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  currentTime.value = `${hours}:${minutes}`;
  time.value = currentTime.value
}


onMounted(() => {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000); 
});


const online = ref("")
const name = ref("")
const isActive = ref(true)
const user = JSON.parse(localStorage.getItem("user_info")) 

const timeString = time.value;
const formattedTime = formatTime(timeString); 
function formatTime(timeString) {
    const [time, meridiem] = timeString.split(' ');
    const [hours, minutes] = time.split(':');

    let formattedHours = parseInt(hours, 10);
    if (meridiem === 'PM') {
        formattedHours += 12;
    }

    return `${formattedHours.toString().padStart(2, '0')}:${minutes} ${meridiem}`;
}





const messageList = ref([
    {
        id: 0,
        userId: 1,
        text: "Привет, как дела?",
        time: formatTime('16:40 AM'),
    },
    {
        id: 1,
        userId: 4,
        text: "Привет! Всё хорошо, а у тебя?",
        time: formatTime('17:30 PM'),
    },
])

const contactList = ref([
    {
        id: 0,
        name: "Команда Fly (Team Fly)",
        message: "Здравствуйте! (Hello!)",
        lastMessage: '16:57',
        quantityMessage: 1,
    },
    {
        id: 1,
        name: "Коллектив Небо (Sky Team)",
        message: "Привет! (Hi!)",
        lastMessage: '10:23',
        quantityMessage: 3,
    },
    {
        id: 2,
        name: "Группа Чудо (Wonder Group)",
        message: "Здорово! (Hey!)",
        lastMessage: '12:45',
        quantityMessage: 5,
    },
    {
        id: 3,
        name: "Супер Команда (Super Team)",
        message: "Приветствую! (Greetings!)",
        lastMessage: '08:30',
        quantityMessage: 2,
    },
    {
        id: 4,
        name: "Дружный Отряд (United Squad)",
        message: "Добрый день! (Good day!)",
        lastMessage: '19:15',
        quantityMessage: 1,
    },
    {
        id: 5,
        name: "Team Fly",
        message: "Hello!",
        lastMessage: '01:50',
        quantityMessage: 1,
    },
    {
        id: 6,
        name: "Team Fly",
        message: "Hi!",
        lastMessage: '06:5',
        quantityMessage: 1,
    },
    {
        id: 7,
        name: "Team Fly",
        message: "Greetings!",
        lastMessage: '11:57',
        quantityMessage: 1,
    },
    {
        id: 8,
        name: "Team Fly",
        message: "Hey!",
        lastMessage: '19:57',
        quantityMessage: 1,
    },
])

</script>

<style lang="scss">
.chat {
    padding-top: 10px;
    padding-bottom: 10px;
    background: white;

    &-wrapper.another {
        width: 100vw;
        height: 100vh;
        background: white;
        position: fixed;
        z-index: -1;
    }

    svg {
        cursor: pointer;
    }

    &-item {
        display: flex;
        padding: 8px 30px 30px 8px;
        border-radius: 0px 6px 6px 6px;
        background: #F2F2F7;
        margin-top: 15px;
        margin-left: 15px;
        color: #222324;
        font-size: 18px;
        font-weight: 400;
        position: relative;
        max-width: max-content;

        .chat-item-time {
            color: #222324;
            font-size: 14px;
            font-weight: 400;
        }

        &.my {
            margin-left: auto;
            margin-right: 15px;
            border-radius: 6px;
            background: #D6001C;
            border-radius: 6px 0px 6px 6px;
            color: #FFF;
            font-size: 18px;
            font-weight: 400;

            .chat-item-time {
                color: #FFF;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

    &-item-time {
        position: absolute;
        right: 10px;
        bottom: 4px;
    }

    &-another {
        width: 100%;
    }

    &-content {
        height: 65vh;
        overflow: auto;
        overflow: auto;

    }

    &-wrapper {
        display: flex;
        gap: 10px;
    }

    &-head {
        border-radius: 16px 16px 0px 0px;
        background: #FFF;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 0;
        gap: 4px;
        position: relative;

        span {
            position: absolute;
            left: 0px;
            cursor: pointer;
            top: 50%;
            transform: translate(0, -50%);
            display: none;
        }
    }

    &-last-online {
        color: #666668;
        font-size: 14px;
        font-weight: 400;
    }

    &-title {
        color: #2C2C2E;
        font-size: 16px;
        font-weight: 600;
    }

    &-left {
        max-width: 317px;
        padding: 12px;
        box-sizing: border-box;
        height: 80vh;
        overflow: auto;
    }

    &-right {
        width: 100%;

        &.unActive {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &-none-active {
        color: #222324;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    &-label {
        padding: 11px 14px;
        border-radius: 32px;
        border: 1px solid #E6E6E6;
        background: #FFF;
        display: flex;
        align-items: center;
        margin-bottom: 11px;
        display: flex;
        align-items: center;
        gap: 10px;

        input::placeholder {
            color: #C6C6C6;
            font-size: 16px;
            font-weight: 500;
        }
    }

    &-block {
        padding: 18px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        &-left {
            display: flex;
            align-items: center;
            gap: 10px;

        }

        &-right {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    &-name {
        color: #222324;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    &-message {
        color: #67646A;
        font-size: 16px;
        font-weight: 400;
    }

    &-time {
        color: #67646A;
        font-size: 14px;
        font-weight: 400;
    }

    &-number {
        background: #38A169;
        color: #FFF;
        font-size: 14px;
        font-weight: 500;
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-top: 14px;

    }

    @media screen and (max-width:750px) {
        &-right {
            width: 0;
            overflow: hidden;

            &.active {
                width: 100%;
            }
        }

        &-left {
            max-width: 0;
            padding: 0;
            overflow: hidden;

            &.active {
                max-width: unset;
                width: 100%;
                overflow: auto;
                padding-right: 20px;
            }
        }

        &-wrapper {
            gap: 0;
        }

        &-head {
            span {
                display: block;
            }
        }

    }
}
</style>