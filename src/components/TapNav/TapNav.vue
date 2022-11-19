<template>

  <div :class="navShow?'nva':'nvaoff'" id="nva" :style="nva_bgc">
    <div class="left" :style="nva_co">小飞</div>
    <div class="right">
      <ul>
        <li>
          <a href="#" :style="nva_co" ><i class="iconfont icon-fangdajing" />搜索</a>
          
        </li>
        <li>
          <router-link :to="{path:'/home'}">
          <a href="#" :style="nva_co"><i class="iconfont icon-shouye" />首页</a>
        </router-link>
        </li>
        <li>
       
           
            <el-dropdown >
              <a href="#">
              <span class="el-dropdown-link" :style="nva_co">
                <i class="iconfont icon-faxian" />
                发现<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link :to="{path:'/pig'}">
                <el-dropdown-item>归档</el-dropdown-item>
              </router-link>
              <router-link :to="{path:'/cla'}">
                <el-dropdown-item>分类</el-dropdown-item>
              </router-link>
              <router-link :to="{path:'/tag'}">
                <el-dropdown-item>标签</el-dropdown-item>
              </router-link>
              </el-dropdown-menu>
            </a>
            </el-dropdown>
         
        </li>
        <li>
          <el-dropdown>
            <a href="#">
              <span class="el-dropdown-link" :style="nva_co">
                <i class="iconfont icon-yule" /> 
               娱乐<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link :to="{path:'/photo'}">
                <el-dropdown-item>相册</el-dropdown-item>
                </router-link>
                <router-link :to="{path:'/talk'}">
                <el-dropdown-item>说说</el-dropdown-item>
              </router-link>
                
              </el-dropdown-menu>
            </a>
            </el-dropdown>
        </li>
        <li>
          <router-link :to="{path:'/link'}">
          <a href="#" :style="nva_co"><i class="iconfont icon-lianjie" />友链</a>
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/about'}">
          <a href="#" :style="nva_co"><i class="iconfont icon-zhifeiji" />关于</a>
        </router-link>
        </li>
        <li>
          <router-link :to="{path:'/message'}">
          <a href="#" :style="nva_co"><i class="iconfont icon-liuyanguanli" />留言</a>
        </router-link>
        </li>
        <li>
          <router-link :to="{path:'/login'}">
          <a href="#" :style="nva_co"><i class="iconfont icon-denglu" />登录</a>
        </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      top:'',
      navShow:"true",
      nva_bgc:{
        background:'',
        opacity:''
      },
      nva_co:{
        color:'',
      },
     
    
    }
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      this.top=document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    })
  },
  watch:{
    top(newValue,oldValue){
    
      if(newValue > oldValue){
					this.navShow = false
					// console.log('向下滚动')
				}else{
					this.navShow = true
          this.nva_bgc={
            background:'aliceblue',
            opacity:'0.78'
           
          }
          this.nva_co={
            color:'rgb(26, 26, 27)',
            
            
          }
					// console.log('向上滚动')
          
				}

        if(newValue==0){
        this.nva_bgc={
            background:'',
            opacity:''
           
          }
          this.nva_co={
            color:'',
          
            
          }
      }
    },
    
  },
  methods:{
   
  }
};
</script>

<style lang="less" scoped>
.nva{
  position: fixed;
  transition: all 0.2s ease-in-out 0.2s;
	transform: translateZ(0);
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;

  .left {
    color: aliceblue;
    font-size: 20px;
    font-weight: 600;
    margin-left: 40px;
  }
  .right {
    ul {
      height: 50px;
      margin-bottom: 25px;

      display: flex;

      li {
        font-size: 15px;
        font-weight: 400;
        margin-right: 20px;
        padding: 0 5px;

        .el-dropdown-link {
          cursor: pointer;
          color: aliceblue;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }

        a {
          position: relative;
          color:  aliceblue;
        }
        
       
        a::after {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          position: absolute;
          left: 0;
          bottom: -10px;
          background: #87cefa;
          transition: all 0.3s ease-in-out;
        }
        a:hover::after {
          width: 100%;
        }
      }
    }
  }
}
.nvaoff {
  position: fixed;
  transition: all 0.2s ease-in-out 0.2s;
	transform: translate3d(0,-100%,0);
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;


  .left {
    color: aliceblue;
    font-size: 20px;
    font-weight: 600;
    margin-left: 40px;
  }
  .right {
    ul {
      height: 50px;
      margin-bottom: 25px;

      display: flex;

      li {
        font-size: 15px;
        margin-right: 20px;
        padding: 0 5px;

        .el-dropdown-link {
          cursor: pointer;
          color: aliceblue;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }

        a {
          position: relative;
          color: aliceblue;
        }
       

        a::after {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          position: absolute;
          left: 0;
          bottom: -10px;
          background: #87cefa;
          transition: all 0.3s ease-in-out;
        }
        a:hover::after {
          width: 100%;
        }
      }
    }
  }
}
</style>

