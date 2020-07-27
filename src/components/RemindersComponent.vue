<template>
    <div>
        <input class="new-reminder" v-model="newReminder">
        <button @click="add">Add Reminder</button>

        <ul v-if="reminders.length">
            <li v-for="reminder in reminders" :key="reminder">
                {{reminder}}

                <button class="remove-reminder" @click="remove(reminder)"></button>
            </li>
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
            add() {
                this.reminders.push(this.newReminder)
                this.newReminder = ''
            },
            remove(reminder) {
                this.reminders.splice(reminder, 1)
            }
        }
    }
</script>

<style scoped>

</style>