<template>

  <div class="input-wrapper">
    <pd-input
      placeholder="请输入姓名"
      clearable
      center
      :value="msg"
      @input="(data) => msg=data"
    >
      <template slot="prepend">https://</template>
    </pd-input>

    <pd-input
      placeholder="请输入姓名"
      clearable
      center
      :value="msg"
      @input="(data) => msg=data"
    >
      <template slot="append">.com</template>
    </pd-input>

    <pd-input
      placeholder="请输入姓名"
      clearable
      center
      :value="msg"
      @input="(data) => msg=data"
    >
      <template slot="prepend">https://</template>
      <template slot="append">.com</template>
    </pd-input>

    <h1>{{msg}}</h1>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world"
    };
  }
};
</script>

<style scoped lang="scss">
.input-wrapper {
  width: 480px;
  margin: 100px auto;
}
</style>