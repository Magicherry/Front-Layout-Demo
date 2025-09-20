<template>
  <div>
    <div style="margin-bottom: 30px">流式布局演示</div>
    <div class="fluid-container">
      <el-row>
        <el-col :span="12">
          <h2>Column 1</h2>
          <p>This is the content of column 1.</p>
        </el-col>
        <el-col :span="12">
          <h2>Column 2</h2>
          <p>This is the content of column 2.</p>
        </el-col>
        <el-col :span="12">
          <h2>Column 3</h2>
          <p>This is the content of column 3.</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.fluid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.el-row {
  display: flex;
}

.el-col {
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  margin: 10px; 
  border: 1px solid lightgray;
  background-color: lightblue;
}
</style>


