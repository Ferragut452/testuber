<template>
  <div class="list">
    <h2>List</h2>
    <ul class="albums">
      <li v-for="(item, index)  in items" :key="index">
        <span class="id">{{item.email}}</span>
        <span class="title">{{item.first_name}}</span>
        <span class="title">{{item.last_name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      items: []
    };
  },
  created() {
    axios("https://reqres.in/api/users").then(res => {
      this.items = res.data.data;
      console.log(res);
    });
  }
};
</script>

<style lang="scss" scoped>
.albums {
  li:nth-child(odd) {
    background-color: rgba(206, 206, 206, 0.87);
  }
  li:nth-child(even) {
    background-color: #42b9839d;
  }
  .id {
    display: inline-block;
    margin-right: 5px;
  }
}
</style>
