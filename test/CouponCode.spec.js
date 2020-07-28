import {mount} from "@vue/test-utils";
import expect from 'expect';
import CouponCodeComponent from "../src/components/CouponCodeComponent.vue";

describe ('CouponCode', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(CouponCodeComponent)
    })

    it ('accepts a coupon code', () => {
        expect(wrapper.find('input.coupon-code').exists()).toBe(true)
    })

    it ('validates a real coupon code', async () => {
        await enterCouponCode('50OFF')

        expect(wrapper.vm.valid).toBe(true)
        expect(wrapper.html()).toContain('Coupon Redeemed: 50% Off!')
    })

    it ('fails to validate a fake coupon code', async () => {
        await enterCouponCode('70OFF')

        expect(wrapper.vm.valid).toBe(false)
        expect(wrapper.html()).toContain('Invalid coupon code')
    })

    it ('broadcasts the percentage discount when a valid coupon codeis applied', async () => {
        await enterCouponCode('50OFF')

        expect(wrapper.emitted().applied).toBeTruthy()
        expect(wrapper.emitted().applied[0]).toEqual([50])
    })

    async function enterCouponCode(code) {
        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = code
        await couponCode.trigger('input')
    }
})
