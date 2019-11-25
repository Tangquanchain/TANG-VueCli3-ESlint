<template>
  <div>
     {{ CartNumber }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      CartNumber: ''
    }
  },
  methods: {
    getCartNum (cartNum) {
      this.CartNumber = cartNum;
    }
  },
  created () {
    const vm = this;
    vm.$bus.$on('cartnum:push', cartNum => {
      vm.getCartNum(cartNum);
    })
  }
}
</script>
