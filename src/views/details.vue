<template>
  <div>
    <h2>{{title}}</h2>
    <h3>Welcome {{user}}</h3>
  </div>

</template>

<script>
export default {
  name: "details",
  data() {
    return{
      title:"product details",
      user:{}
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
