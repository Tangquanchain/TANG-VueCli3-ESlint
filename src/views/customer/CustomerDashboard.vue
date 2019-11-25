<template>
  <div>
    <Alert />
    <div class="wrap">
      <Aside :cartsLen="cartsLen" :carts="carts" :cartsTotal="cartsTotal" />
      <Navbar :cartsLen="cartsLen" :carts="carts" />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/customer/Navbar';
import Aside from '../../components/customer/Aside';
import Footer from '../../components/customer/Footer';
import Alert from '../../components/customer/AlertMessage';

export default {
  components: {
    Alert,
    Navbar,
    Aside,
    Footer
  },

  data () {
    return {
      cartsLen: '',
      carts: [],
      cartsTotal: '',
      orders: []
    };
  },

  methods: {
    getCartProduct () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(api).then(response => {
        vm.cartsLen = response.data.data.carts.length;
        vm.carts = response.data.data.carts;
        vm.cartsTotal = response.data.data.total;
        vm.$bus.$emit('cartnum:push', response.data.data.carts.length);
      });
    }
  },

  created () {
    const vm = this;
    vm.$bus.$on('cartfinish:push', () => {
      vm.getCartProduct();
    });
    vm.getCartProduct();
  }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

.wrap {
  transition: transform 0.3s;
  position: relative;
}

.wrap.active {
  transform: translateX(-450px) !important;
}
</style>
