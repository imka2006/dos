<template>
    <div class="edit">
        <div class="edit-content">
            <svg class="edit-svg" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 14.91V20.25C20 20.7804 19.7893 21.2891 19.4142 21.6642C19.0391 22.0393 18.5304 22.25 18 22.25H4C3.46957 22.25 2.96086 22.0393 2.58579 21.6642C2.21071 21.2891 2 20.7804 2 20.25V6.25C2 5.71957 2.21071 5.21086 2.58579 4.83579C2.96086 4.46071 3.46957 4.25 4 4.25H9.34"
                    stroke="#010E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 2.25L22 6.25L12 16.25H8V12.25L18 2.25Z" stroke="#010E52" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Редактировать
        </div>
        <svg class="edit-svg another" width="24" height="25" viewBox="0 0 24 25" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 14.91V20.25C20 20.7804 19.7893 21.2891 19.4142 21.6642C19.0391 22.0393 18.5304 22.25 18 22.25H4C3.46957 22.25 2.96086 22.0393 2.58579 21.6642C2.21071 21.2891 2 20.7804 2 20.25V6.25C2 5.71957 2.21071 5.21086 2.58579 4.83579C2.96086 4.46071 3.46957 4.25 4 4.25H9.34"
                stroke="#010E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 2.25L22 6.25L12 16.25H8V12.25L18 2.25Z" stroke="#010E52" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.edit {
    cursor: pointer;

    &-content {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #010E52;
        font-size: 18px;
        font-weight: 700;
    }

    &-svg.another {
        display: none;
    }

    @media screen and (max-width:650px) {
        &-svg.another {
            display: block;
        }

        &-content {
            display: none;
        }
    }
}
</style>