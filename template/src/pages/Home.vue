<template>
  <div class="container">
    <h1>{{ userName }}</h1>
    <user />
    <p class="instructions">Pressione o <strong>espaço</strong> do seu teclado</p>
    <img class="logo" src="../assets/img/logo.png" alt="">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import User from '@/components/User';

export default {
  components: {
    User,
  },

  mounted() {
    window.addEventListener('keypress', (e) => {
      if (e.keyCode === 32) {
        this.fetchUser();
      }
    });
  },

  created() {
    this.fetchUser();
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/FETCH_USER',
    }),
  },
  computed: {
    ...mapGetters({
      userName: 'user/GET_NAME',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  div.container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      color: darkolivegreen;
      font-family: "Lato";
      font-weight: 900;
      margin-bottom: 10px;
    }

    .instructions {
      margin-top: 10px;
      color: lightslategrey;
      font-family: "Lato";

      strong {
        font-weight: 800;
      }
    }

    .logo {
      right: 5px;
      top: 10px;
      width: 40px;
      height: 40px;
      position: absolute;
      animation: leaves 2s ease-in-out infinite alternate;
    }
  }

  @keyframes leaves {
    0% {
      transform: scale(1.0);
    }
    100% {
      transform: scale(1.5);
    }
  }
</style>
