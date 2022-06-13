<template>
  <div>
    <h2>{{title}}</h2>
    <h3>Welcome {{user}}</h3>
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return{
      title:"我是主页",
      user:{}
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
