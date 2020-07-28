import {mount} from "@vue/test-utils";
import expect from "expect";
import QuestionComponent from "../src/components/QuestionComponent.vue";
import moxios from "moxios";

describe ('Question', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(QuestionComponent, {
            propsData: {
                dataQuestion: {
                    title: 'The title',
                    body: 'The body'
                }
            }
        })
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it ('displays the title and the body', () => {
        see('The title')
        see('The body')
    })

    it ('can be edited', () => {
        expect(wrapper.find('input[name=title]').exists()).toBe(false)

        click('#edit')

        see('The title')
        see('The body')
    })

    it ('hides the edit button during edit mode', async () => {
        expect(wrapper.find('#edit').exists()).toBe(true)

        await click('#edit')

        expect(wrapper.find('#edit').exists()).toBe(false)
    })

    it ('updates the edited question', async () => {
        await click('#edit')

        type('Changed title', 'input[name=title]')
        type('Changed body', 'textarea[name=body]')

        moxios.stubRequest('/questions/1', {
            status: 200,
            response: {
                title: 'Changed title',
                body: 'Changed body'
            }
        })

        await click('#update')

        await wrapper.vm.$nextTick()
        await wrapper.vm.$nextTick()

        see('Changed title')
        see('Changed body')

        see('Question updated')
    })

    it ('can cancel out of edit mode', async () => {
        await click('#edit')

        type('Changed title', 'input[name=title]')

        await click('#cancel')

        see('The title')
    })

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper

        expect(wrap.html()).toContain(text)
    }

    let type = async (text, selector) => {
        let node = wrapper.find(selector)

        node.element.value = text
        await node.trigger('input')
    }

    let click = (selector) => {
        wrapper.find(selector).trigger('click')
    }
})