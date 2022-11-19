<template>
  <div>
  <div class="hd">
    <tap-nav></tap-nav>

    <div class="txt">
      <p class="title">努力搬砖的小飞</p>
      <p class="ci">{{getGushi}}<i class="iconfont icon-shouye_shugang_shijiantixing" /></p>

      <i class="el-icon-arrow-down" @click="GO_Position1"></i>
    </div>


  

  </div>
  <div id="Position0">
    <SliderMenu></SliderMenu>
  </div>
  
</div>
</template>

<script>
import SliderMenu from '../SliderMenu/SliderMenu.vue';
import { mapState } from 'vuex';
//让字体一个个出现


export default {
  data(){
    return{
     
    }
  },
  components:{
    SliderMenu
  },
  methods: {
    GO_Position1() { 
        document .getElementById('Position0') .scrollIntoView({ behavior: 'smooth' })
      }, 
   
    

  },
 mounted(){
  this.$store.dispatch('cateGushi')
  
  
 },
 computed:{
  ...mapState({
    getGushi:state=>state.home.getGushi
    
  }),
 
  
 },
 

};
</script>
<style lang="less" scoped>
.hd {
  width: 100%;
  height: 725px;
  background-image: url(../Header/images/bj1.jpg);
  .txt {
    position: absolute;
    top: 300px;
    left: 600px;
    @keyframes im_icon {
      0% {
        opacity: 0.5;
        transform: translate(0, 0);
      }
      
      50% {
        
        opacity: 0.8;
        transform: translate(0, 10px);
      }
      100% {
       
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    @keyframes im_ic {
      0% {
        opacity: 0;
        transform: translate(0, 0);
      }
      
      50% {
        
        opacity: 0.8;
        transform: translate(0, 0);
      }
      100% {
       
        opacity: 1;
        transform: translate(0, 0);
      }
      
    }

    .el-icon-arrow-down {
      position: relative;
      top: 280px;
      left: 120px;
      width: 17px;
      height: 20px;
      font-weight: 600;
      font-size: 25px;
      color: aliceblue;
      animation:  im_icon 1s linear infinite;
    }
    .icon-shouye_shugang_shijiantixing{
      font-size: 30px;
      animation:  im_ic 1s linear infinite;
    }
    .title {
      font-size: 40px;
      left: -60px;
      font-weight: 600;
      color: aliceblue;
    }
    
    
    .ci{
      position: relative;
      right: 30px;
      font-size: 25px;
      color: azure;
    }
  }
}
</style>

