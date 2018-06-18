<template>
  <article class="container">
    <div class="left">
      <img class="picture" :src="user.photo" alt="">
    </div>
    <div class="right">
      <div class="group">
        <label class="label">Genêro</label>:
        <label class="info">{{ user.gender }}</label>
      </div>
      <div class="group">
        <label class="label">Idade</label>:
        <label class="info">{{ user.age }}</label>
      </div>
      <div class="group">
        <label class="label">Aniversário</label>:
        <label class="info">{{ user.birthday.dmy }}</label>
      </div>
      <div class="group">
        <label class="label">Email</label>:
        <label class="info">{{ user.email }}</label>
      </div>
      <div class="group">
        <label class="label">Password</label>:
        <label class="info">{{ user.password }}</label>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'user/GET_USER',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  article.container {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 8px;

    .left {
      margin-right: 5px;

      .picture {
        border-radius: 50%;
        width: 100px;
        min-height: 100px;
        object-fit: cover;
        border: 1px solid darkolivegreen;
      }
    }

    .right {
      margin-left: 5px;

      .group {
        .label,
        .info {
          color: gray;
          font-size: 16px;
          font-family: 'Lato';
        }

        .info {
          font-weight: 700;
          color: darkolivegreen;
        }
      }
    }
  }
</style>
