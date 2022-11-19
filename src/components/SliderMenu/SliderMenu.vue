<template>
  <div class="bd">
    <div class="menu">
      <div class="left">
        <div class="title"></div>
        <div class="content"></div>
      </div>
      <div class="right">
        <div class="sumarry">
          <div class="tp">
          <img src="" alt="">
          <h1>小飞</h1>
          <p>努力就会有奇迹</p>
          </div>
          <div>
            
          </div>
        </div>
        <div class="inform"></div>
        <div class="notice"></div>
        <div class="weather" id="he-plugin-standard">
          
        </div>
        <div class="browse"></div>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  created(){
    window.WIDGET = {
    "CONFIG": {
    "layout": "2",
    "width": 230,
    "height": 270,
    "background": "2",
    "dataColor": "000000",
    "key": "49710d3f6b1b4d4490347dc45dd0179d"
  }
      
    };
    (function (d) {
      var c = d.createElement('link')
      c.rel = 'stylesheet'
      c.href = 'https://widget.qweather.net/standard/static/css/he-standard.css?v=2.0'
      var s = d.createElement('script')
      s.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"'
      var sn = d.getElementsByTagName('script')[0]
      sn.parentNode.insertBefore(c, sn)
      sn.parentNode.insertBefore(s, sn)
      s.onload=()=>{
        //自动宽度
        setTimeout(() => {
          document.getElementById("he-plugin-standard").style.width  = "100%";
        }, 100);
      }
    })(document)

  }
};
</script>

<style lang="less" scoped>
.bd {
    display: flex;
    justify-content: center;
  .menu {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 1000px;
    // background-color: rgb(29, 231, 18);
  }

  .left {
    width: 880px;
    height: 100px;
    background-color: rgb(217, 36, 36);
  }
  .right {
    width: 300px;
    height: 1000px;
    
    .weather{
     
    }
  }
}
</style>