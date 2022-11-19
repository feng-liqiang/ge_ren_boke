<template>
  <div>
    <div class="about">
    <tap-nav></tap-nav>
    我是关于
    </div>
    <div class="content"></div>
    <Footer></Footer>
  </div>
 
  
</template>

<script>
import TapNav from '../../components/TapNav/TapNav.vue'
export default {
  components: { TapNav },

}
</script>

<style>
.about{
  height: 400px;
  background-image: url(@/assets/img/bbj.jpg);
}

</style>