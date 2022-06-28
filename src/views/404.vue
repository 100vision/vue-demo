<template>
  <div>
    <h2>{{title}}</h2>
    <h3>Welcome {{user}}</h3>
  </div>

</template>

<script>
export default {
  name: "page_not_found",
  data() {
    return{
      title:"哦，网页不存在",
      user:{}
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
