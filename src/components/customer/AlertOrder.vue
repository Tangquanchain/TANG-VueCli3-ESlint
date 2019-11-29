<template>
  <div class="coupon-alert">
    <div
      class="alert d-flex justify-content-center align-items-center rounded-0"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      <div class="alert-outline">
        <strong class="alert-txt cartProduct_txt">{{ item.message}}</strong>
        <br>
        <button @click="goHome" type="button" class="btn btn-size btn-block mt-2" style="border-radius:20px;">BACK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: [],
      qty: ''
    };
  },
  methods: {
    updateMessage (message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessageWithTiming (timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 150000);
    },
    goHome () {
      const vm = this;
      vm.$router.push('/store/allproduct');
    }
  },
  created () {
    const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on('order:push', (message, status = 'dark') => {
      vm.updateMessage(message, status);
    });
    // vm.$bus.$emit('message:push');
  }
};
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000 !important;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.alert-outline {
  padding: 55px;
  background-color: #fff;
  border-radius: 10px;
}

.alert-txt {
  font-size: 30px;
  font-family: "Anton", sans-serif;
  color: #080808;
}
</style>
