<template>
    <div>
        <input class="new-reminder" v-model="newReminder">
        <button @click="addReminder">Add Reminder</button>

        <ul v-if="reminders.length">
            <li v-for="reminder in reminders" v-text="reminder" :key="reminder"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ReminderComponent",
        data() {
            return {
                newReminder: '',
                reminders: []
            }
        },
        methods: {
            addReminder() {
                this.reminders.push(this.newReminder)
                this.newReminder = ''
            }
        }
    }
</script>

<style scoped>

</style>