<template>
<div>
  <div style="margin-bottom: 30px">响应式布局演示</div>
  <div class="responsive-container">
    <el-row>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <h2>Column 1</h2>
        <p>This is the content of column 1.</p>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <h2>Column 2</h2>
        <p>This is the content of column 2.</p>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <h2>Column 3</h2>
        <p>This is the content of column 3.</p>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <h2>Column 4</h2>
        <p>This is the content of column 4.</p>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<style scoped>
.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.el-col {
  padding: 20px;
  border: 1px solid lightgray;
  background-color: lightblue;
  border-radius: 10px;
  margin: 10px; 
}
</style>
