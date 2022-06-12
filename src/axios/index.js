import Vue from 'vue'
import axios from "axios";


Vue.use(axios)

export default new productRequest(

  {
    baseURL:"http://localhost:8080/product",
    timeout:5000

});
