<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Not a member? | Sign up</router-link>
      <div class="content"></div>
      <div class="loginbox">
        <h1>User Login</h1>
        <form>
          <!-- <p>Username</p> -->
          <div class="dx-field">
            <dx-text-box placeholder="Login" width="100%" :value.sync="login">
              <dx-validator>
                <dx-required-rule message="Login is required" />
              </dx-validator>
            </dx-text-box>
          </div>
          <!-- <p>Password</p> -->
          <div class="dx-field">
            <dx-text-box placeholder="Password" width="100%" mode="password" :value.sync="password">
              <dx-validator>
                <dx-required-rule message="Password is required" />
              </dx-validator>
            </dx-text-box>
          </div>

          <div class="buttons-demo">
            <div class="buttons">
              <div class="buttons-column">
                <div>
                  <DxButton
                    :width="120"
                    text="Login"
                    type="success"
                    styling-mode="contained"
                    @click="onLoginClick"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DxButton from "devextreme-vue/button";
import DxCheckBox from "devextreme-vue/check-box";
import DxTextBox from "devextreme-vue/text-box";
import DxValidationGroup from "devextreme-vue/validation-group";
import DxValidator, { DxRequiredRule } from "devextreme-vue/validator";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import auth from "../auth";
import {
  DxResponsiveBox,
  DxItem,
  DxLocation,
  DxCol,
  DxRow
} from "devextreme-vue/responsive-box";

@Component({
  components: {
    DxButton,
    DxCheckBox,
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxValidationGroup,
    DxResponsiveBox,
    DxItem,
    DxLocation,
    DxCol,
    DxRow
  }
})
export default class Signup extends Vue {
  text = "Login ";
  login: undefined;

  screen(width: any) {
    return width < 700 ? "sm" : "lg";
  }

  onLoginClick(e: any) {
    if (!e.validationGroup.validate().isValid) {
      return;
    }
    auth.logIn();
    e.validationGroup.reset();
  }
}
</script>

<style  lang="scss" scoped>
@import "../themes/generated/variables.base.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}

// responsive
.demo-container,
#page {
  height: 100%;
  min-height: 300px;
}

.header {
  background-color: rgba(243, 158, 108, 0.8);
  text-align: center;
}

.content {
  background-color: rgba(245, 229, 166, 0.8);
}

.left-side-bar {
  background-color: rgba(148, 215, 199, 0.8);
}

.right-side-bar {
  background-color: rgba(119, 199, 231, 0.8);
}

.footer {
  background-color: rgba(123, 155, 207, 0.8);
}

.item {
  height: 100%;
}

#page p {
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
}

// button
.demo-container {
  display: flex;
  justify-content: center;
  height: 450px;
}

.buttons-demo {
  // width: 600px;
  align-self: center;
}

.buttons-column > .column-header {
  flex-grow: 0;
  width: 120px;
  height: 35px;
  font-size: 130%;
  opacity: 0.6;
  text-align: left;
  padding-left: 15px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
}

.buttons > div {
  width: 270px;
  flex-wrap: nowrap;
  display: flex;
  padding: 17.9% 0 0 0;
}

.buttons-column > div {
  width: 150px;
  height: 50px;
  text-align: center;
}

.buttons-column {
  width: 150px;
  justify-content: center;
}

.content {
  text-align: center;
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
}

.login-header {
  text-align: center;
  margin-bottom: 40px;

  .title {
    font-weight: bold;
    font-size: 30px;
    margin: 0;
  }
}

body {
  margin: 0;
  padding: 0;

  background-size: cover;
  background-position: center;
  font-family: sans-serif;
}

.loginbox {
  width: 320px;
  height: 320px;
  background: white;
  color: grey;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
  border-radius: 10px;

  box-shadow: 0px 5px 24px -6px #6a6a6a;
}

h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}
</style>
