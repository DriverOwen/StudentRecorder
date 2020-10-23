<template>
  <div class="floatMsg">
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "floatMsg"
}
</script>

<style scoped>
  .floatMsg {
    width: 135px;
    height: 36px;
    border-radius: 3px;
    background: #fff;

    box-shadow: 0 0 6px -1px rgba(140,146,163,0.5);

  }

</style>