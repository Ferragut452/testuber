<template>
  <div class="images">
    <h2>Images</h2>
    <ul class="photos">
      <li v-for="(item, index)  in items" :key="index">
        <span class="title">{{item.id}}</span>
        <img class="item.url" :src="item.avatar" alt="photo" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImagePage",
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
.photos {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  li {
    height: 200px;
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(204, 204, 204, 0.76);
    margin: 5px;
    span {
      height: 36px;
    }
  }
}
</style>
