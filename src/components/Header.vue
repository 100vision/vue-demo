<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
  <!-- 定义公共组件header -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
      title:"我是公共组件Header"
    }
  }
}
</script>

<style scoped>

</style>
