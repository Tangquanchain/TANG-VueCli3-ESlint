<template>
  <div>
    <div class="aside">
      <AlertAside />
      <loading :active.sync="isLoading"></loading>
      <div class="aside_title d-flex justify-content-center align-items-center text-center">
        <p class="mb-0 mr-1">CART LIST</p>
        <span class="badge badge-pill badge-danger" style="font-size:15px">
          <AlertCart cartLen></AlertCart>
        </span>
      </div>

      <div
        class="d-flex justify-content-center align-items-center text-center"
        style="height:75%;"
        v-if=" carts == ''"
      >
        <div class="text-center p-3">
          <p class="cartProduct_txt mb-0">CART IS EMPTY.</p>
          <button @click="goshop" class="btn btn-size btn-lg">GO SHOP</button>
        </div>
      </div>

      <table class="table table-sm mr-5">
        <tbody v-if="carts">
          <tr v-for="items in carts" :key="items.id">
            <td class="align-middle text-center p-3">
              <div
                :style="`width:100px; height:100px; background: url(${items.product.imageUrl}) center / cover no-repeat;`"
              ></div>
            </td>
            <td class="align-middle">
              <p class="cartProduct_txt mb-0">{{items.product.title}}</p>
            </td>
            <td class="align-middle">X{{items.qty}}</td>
            <td class="align-middle text-right">{{items.product.origin_price | currency }} TW</td>
            <td class="align-middle">
              <button class="btn" type="button" @click="removeCart(items.id)">
                <i class="fa fa-trash-alt" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot v-if=" carts != ''">
          <tr>
            <td class="text-left pl-3" colspan="2">
              <p class="cartProduct_txt mb-0">TOTAL</p>
            </td>
            <td class="text-right pr-4" colspan="3">
              <p class="cartProduct_txt mb-0">{{ cartsTotal | currency }} TW</p>
            </td>
          </tr>
        </tfoot>
      </table>
      <a
        href="#"
        v-if=" carts != ''"
        class="btn checkout btn-primary btn-block mt-2"
        style="border-radius:20px"
        @click.prevent="checkout"
      >
        <p class="cartProduct_txt mb-0">CHECKOUT</p>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import AlertCart from './AlertCartMessage';
import AlertAside from './AlertAside';
export default {
  props: ['cartsLen', 'cartsTotal', 'carts'],
  components: {
    AlertCart,
    AlertAside
  },
  data () {
    return {
      isLoading: false,
      cartProduct: [],
      cartLength: '',
      cartTotal: '',
      insidecart: false
    };
  },
  methods: {
    getCartProduct () {
      const vm = this;
      vm.$bus.$emit('cartnum:push', vm.cartsLen);
      vm.$bus.$emit('cartfinish:push', vm.carts);
    },

    removeCart (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        vm.isLoading = false;
        vm.getCartProduct();
        vm.$bus.$emit('remove:push', 'Remove item');
      });
    },

    goshop () {
      this.$router.push('/store/allproduct');
    },

    managerurl () {
      this.$router.push('/dashboard');
    },

    checkout () {
      this.$router.push('/checkout/cart');
      $('body').removeClass('scrollClose');
    }
  },
  created () {
    const vm = this;
    vm.$bus.$on('cart:push', () => {
      vm.getCartProduct();
    });
  }
};
</script>

<style lang='scss'>
$black: #000;
$side-white: rgba(212, 212, 212, 0.8);

body {
  overflow-x: hidden;
  position: relative;
}

.aside {
  left: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: rgba(241, 238, 238, 0.6);
  width: 450px;
  height: 100vh;
  border-right: 1px solid $side-white;
  display: none;
  // transform: translateX(450px);
  left: auto;
  transition: transform 0.3s;
  &.active {
    transform: translateX(450px);
    overflow-y: scroll;
    display: block;
  }
}

.aside_title {
  margin-top: 30px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 28px;
  border-bottom: 1px solid $side-white;
  p {
    font-size: 30px;
  }
}

.cartProduct_txt {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

.btn-size {
  border: 1px solid $black;
  margin: 7px 0px;
  border-radius: 0;
  outline: none;
  &:hover {
    background-color: $black;
    color: rgba(251, 251, 251, 0.8);
  }
}

.btn-block {
  width: 95%;
  margin: auto;
}
</style>
