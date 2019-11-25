<template>
  <div>
    <div class="wrap">
      <Aside />
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/customer/Navbar';
import Aside from '../../components/customer/Aside';
import Footer from '../../components/customer/Footer';
export default {
  components: {
    Navbar,
    Aside,
    Footer
  },

  methods: {
    getOrder () {
      const vm = this;
      const orderList = new Set();
      for (let i = 1; i <= 10; i++) {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders`; // 從後端取的orderId
        this.$http.get(api).then(response => {
          response.data.orders.forEach((item, i) => {
            orderList.add(item.id);
          });
        });
      }
      vm.orders = orderList;
    }
  }
};
</script>

<style lang='scss'>
.wrap {
  transition: transform 0.3s;
  position: relative;
}

.wrap.active {
  transform: translateX(450px);
}
</style>
