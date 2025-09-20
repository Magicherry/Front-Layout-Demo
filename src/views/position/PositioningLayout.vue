<template>
<div>
  <div style="margin-bottom: 30px">定位布局演示</div>
  <div class="positioning-container">
    <div class="positioning-item top-left">
      <h2>Top Left</h2>
    </div>
    <div class="positioning-item top-right">
      <h2>Top Right</h2>
    </div>
    <div class="positioning-item bottom-left">
      <h2>Bottom Left</h2>
    </div>
    <div class="positioning-item bottom-right">
      <h2>Bottom Right</h2>
    </div>
    <div class="positioning-item center">
      <h2>Center</h2>
    </div>
  </div>
</div>
</template>

<style scoped>
.positioning-container {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: lightgray;
}

.positioning-item {
  position: absolute;
  padding: 20px;
  border-radius: 7px;
  background-color: lightblue;
  border: 2px solid #eae2e2;
}

.top-left {
  top: 20px;
  left: 20px;
}

.top-right {
  top: 20px;
  right: 20px;
}

.bottom-left {
  bottom: 20px;
  left: 20px;
}

.bottom-right {
  bottom: 20px;
  right: 20px;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
