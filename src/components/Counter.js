export default {
    template: `
        <div>
            <span class="count" v-text="count"></span>
        </div>
    `,

    data () {
        return {
            count: 0
        }
    }
}