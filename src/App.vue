<template>
  <div id="app">
    <resoinsive />
    <!-- <router-view /> -->
    <!-- <img src="Mountains.ai.svg" alt /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Resoinsive from "./components/Resoinsive.vue";

@Component({
  components: {
    Resoinsive
  }
})
export default class App extends Vue {
  click = "asd";
  text = "Login ";

  toggle() {
    this.text = "Login";
  }
}
</script>

<style lang="scss" >
html {
  height: 100%;
  margin: 0%;
  padding: 0;
  background-color: #f0f0f0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: lightblue;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2.5s;
  }

  .router-anim-enter-active {
    animation: coming 1s;
    animation-delay: 0.5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
