<template>
  <div class="wrapper">
    <top-nav></top-nav>
    <login-box></login-box>
    <footer-box></footer-box>
  </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import LoginBox from "../components/LoginBox";
    import FooterBox from "../components/FooterBox";
    export default {
      name: "Login",
      components: {FooterBox, LoginBox, TopNav}
    }
</script>

<style scoped>

  .wrapper{
    width: 100%;
    height: 100%;
    /*border: 1px solid black;*/
  }

</style>
