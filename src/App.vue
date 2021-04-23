<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}
.container-size {
  margin: 0 auto;
  width: 80%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   
  color: #2c3e50;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
 .text-center {
    text-align: center;
  }
 .text-right {
    text-align: right;
  }
  .add-line{
    margin-top:10px;
    background: #d8323fa3;
    padding: 2px 5px;
    vertical-align: sub;
    display: inline-block;
    color: #a5001a;
    transition: all .3s ease-in-out;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background: #d8323f;
      color: #fff;
    }
  } 
  .btn-save { 
    padding:12px 28px; 
    color: #f5f5f5; 
    background: #d8323f;
    -webkit-box-shadow: inset 0 -4px 0 #a5001a;
    box-shadow: inset 0 -4px 0 #a5001a; 
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    outline: none; 
    border: 0;
    cursor: pointer;
    
    &:hover {
      background: #a5001a;
    }
  } 
  .book-edit-href {
    float: right;
    a { 
      color: #409eff;
    }
  }
  .book-edit-href::after{
    clear: both;
  }
  .display-none {
     display: none;
  }
</style>
