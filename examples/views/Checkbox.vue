<template>
  <div>
    <pd-checkbox-group v-model="hobby">
      <pd-checkbox label="篮球">篮球</pd-checkbox>
      <pd-checkbox label="足球">足球</pd-checkbox>
      <pd-checkbox label="乒乓球">乒乓球</pd-checkbox>
    </pd-checkbox-group>

    <p>您选择的爱好是:{{hobby}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobby: ["足球"],
      checked: true
    };
  }
};
</script>