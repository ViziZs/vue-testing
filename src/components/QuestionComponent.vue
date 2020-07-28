<template>
    <div>
        <!-- View -->
        <div v-if="!editing">
            <h1 v-text="question.title"></h1>
            <div v-text="question.body"></div>

            <button id="edit" @click="editing = !editing">Edit</button>
        </div>

        <!-- Edit -->
        <div v-if="editing">
            <input type="text" name="title" v-model="form.title">
            <textarea name="body" v-model="form.body"></textarea>

            <button id="update" @click="update">Update</button>
            <button id="cancel" @click="cancel">Cancel</button>
        </div>

    </div>

</template>

<script>
    export default {
        name: "QuestionComponent",
        props: {
            dataQuestion: Object
        },
        data() {
            return {
                question: this.dataQuestion,
                editing: false,
                form: {
                    title: this.dataQuestion.title,
                    body: this.dataQuestion.body
                }
            }
        },
        methods: {
            cancel() {
                this.editing = !this.editing
            },
            update() {
                this.question.title = this.form.title
                this.question.body = this.form.body
                this.editing = !this.editing
            }
        }
    }
</script>

<style scoped>

</style>