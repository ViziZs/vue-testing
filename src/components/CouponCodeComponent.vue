<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">
        <p v-if="valid">
            Coupon Redeemed: {{ message }}
        </p>
        <p v-else>
            Invalid coupon code
        </p>
    </div>
</template>

<script>
    export default {
        name: "CouponCodeComponent",
        data() {
            return {
                code: '',
                valid: false,
                coupons: [
                    {
                        code: '50OFF',
                        message: '50% Off!',
                        discount: 50
                    },
                    {
                        code: 'FREE',
                        message: 'Free',
                        discount: 100
                    },
                ]
            }
        },

        computed: {
            selectedCoupon() {
                return this.coupons.find(coupon => coupon.code == this.code)
            },
            message() {
                return this.selectedCoupon.message
            }
        },

        methods: {
            validate() {
                this.valid = !! this.selectedCoupon

                if (this.valid) {
                    this.$emit('applied', this.selectedCoupon.discount)
                }
            }
        }
    }
</script>

<style scoped>

</style>