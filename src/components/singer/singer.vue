<template>
  <div class="singer">
    <p>111111111111</p>
    <div ref="form">
      <input
        type="text"
        placeholder="编辑选项1"
      >
      <button @click="add">点击添加</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    num: 1
  }),
  methods: {
    add() {
      this.num++
      let input = document.createElement('input')
      this.$refs.form.appendChild(input)
      input.value = '编辑选项' + this.num
      input.style.type = `text`
    }
  }
}
</script>

<style  scoped>

</style>