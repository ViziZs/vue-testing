import {mount} from "@vue/test-utils";
import expect from 'expect';
import RemindersComponent from "../src/components/RemindersComponent.vue";

describe ('Reminders', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(RemindersComponent)
    })

    it ('hides the reminders list if there are none', () => {
        expect(wrapper.contains('ul')).toBe(false);
    })

    it ('can add reminders', async () => {
        expect(wrapper.contains('ul')).toBe(false);

        let newReminder = wrapper.find('.new-reminder')

        newReminder.element.value = 'Go to the store'
        newReminder.trigger('input')

        await wrapper.find('button').trigger('click')

        expect(wrapper.contains('ul')).toBe(true);
        expect(wrapper.find('ul').text()).toContain('Go to the store')
    })
})