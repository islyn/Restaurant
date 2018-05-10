<template>
  <div class="footer-wrapper">
    <div class="footer">
      <p>Copyright@2018</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterBox"
    }
</script>

<style scoped>
  .footer-wrapper {
    width: 100%;
    height: 44px;
    margin-top: 20px;
    background: linear-gradient(white, #c3c3c3);
  }
  .footer-wrapper .footer{
    width: 1190px;
    height: 44px;
    margin: 0 auto;
  }
  .footer-wrapper .footer p{
    line-height: 44px;
    text-align: center;
    font-size: 12px;
    color: #6c6c6c;
    /*border: 1px solid black;*/
  }
</style>
