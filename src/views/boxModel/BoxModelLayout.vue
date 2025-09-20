<template>
  <div style="width: 100%">
    <div style="margin-bottom: 30px">盒式布局演示</div>
    <div class="box-container">
      <div class="box-item">
        <h2>Box 1</h2>
      </div>
      <div class="box-item">
        <h2>Box 2</h2>
      </div>
      <div class="box-item">
        <h2>Box 3</h2>
      </div>
      <div class="box-item">
        <h2>Box 4</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-container {
  display: flex;
  justify-content: space-between;
}

.box-item {
  flex: 1;
  border-radius: 10px;
  margin: 10px; 
  background-color: lightblue;
  padding: 20px;
}
</style>
