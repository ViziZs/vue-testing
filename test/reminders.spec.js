import {mount} from "@vue/test-utils";
import expect from 'expect';
import RemindersComponent from "../src/components/RemindersComponent.vue";

describe ('Reminders', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(RemindersComponent)
    })

    it ('hides the reminders list if there are none', () => {
        expect(wrapper.find('ul').exists()).toBe(false);
    })

    it ('can add reminders', async () => {
        expect(wrapper.find('ul').exists()).toBe(false);

        let newReminder = wrapper.find('.new-reminder')

        newReminder.element.value = 'Go to the store'
        newReminder.trigger('input')

        await wrapper.find('button').trigger('click')

        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('ul').text()).toContain('Go to the store')
    })

    it ('can remove any reminder', async () => {
        await wrapper.setData({
            reminders: [
                'Go to the store',
                'Do the homework',
                'Chill'
            ]
        })

        await wrapper.find('ul > li:first-child .remove-reminder').trigger('click')

        expect(wrapper.find('ul').text()).not.toContain('Go to the store')
    })
})