<template>
  <div>
    <h2>{{title}}</h2>
    <table border="1">

    <tr>
      <th>productId</th>
      <th>product Name</th>
      <th>Price</th></tr>

      <tr v-for="product in products">
        <td>{{ product_general.productId }}</td>
        <td>{{ product_general.name }}</td>
        <td>{{ product_general.price }}</td>
        <td>
          <router-link to="/">Edit</router-link>
          <router-link to="/">Remove</router-link>

        </td>
      </tr>


    </table>
  </div>

</template>

<script>

  import axios from 'axios';
  import instance from "../../utils/request";
    export default {
        name: 'product',
        data(){
          return{
            title:'产品列表',
            product:{},
            products:[]

          }
        },

        methods:{

          getAll() {
            instance.get("/api/product/listall")
              .then(
                resp =>this.products=resp.data.payload)
              .catch(err=>console.log(err));
          }

        },

        created() {
          this.getAll();

      }
    }
</script>

<style scoped>

</style>
