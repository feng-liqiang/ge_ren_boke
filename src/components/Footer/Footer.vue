<template>
  <div class="footer">
    <div class="text">
        <a href="#">©2021 - 2022 By 小飞</a>
        <a href="#">赣ICP备2022010242号</a>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer{
    width: 100%;
    height: 140px;
    background-color: #EE7752;
    // background:linear-gradient(-45deg,#EE7752,#E73C7E,#23A6D5,#23D5AB);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: Gradient 15s ease infinite ;
    @keyframes Gradient {
        0%{
            background-color:#E73C7E;
        }
        50%{
            background-color:#23A6D5;
        }
        100%{
            background-color:#23D5AB;
        }

        
    }
    .text{
       
        
    
        a{
            margin-top: 5px;
            display: block;
            font-size: 14px;
        }
    }
}

</style>

