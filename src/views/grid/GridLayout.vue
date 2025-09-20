<template>
<div>
  <div style="margin-bottom: 30px">网格布局演示</div>
  <div class="grid-container">
    <el-row>
      <el-col :span="7">
        <h2>Subject 1</h2>
        <p>Description of subject 1.</p>
      </el-col>
      <el-col :span="7">
        <h2>Subject 2</h2>
        <p>Description of subject 2.</p>
      </el-col>
      <el-col :span="7">
        <h2>Subject 3</h2>
        <p>Description of subject 3.</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <h2>Subject 4</h2>
        <p>Description of subject 4.</p>
      </el-col>
      <el-col :span="4">
        <h2>Subject 5</h2>
        <p>Description of subject 5.</p>
      </el-col>
      <el-col :span="4">
        <h2>Subject 6</h2>
        <p>Description of subject 6.</p>
      </el-col>
      <el-col :span="4">
        <h2>Subject 7</h2>
        <p>Description of subject 7.</p>
      </el-col>
      <el-col :span="4">
        <h2>Subject 8</h2>
        <p>Description of subject 8.</p>
      </el-col>
      <el-col :span="4">
        <h2>Subject 9</h2>
        <p>Description of subject 9.</p>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<style scoped>
.grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  padding: 20px;
  border: 1px solid lightgray;
  background-color: lightblue;
  border-radius: 10px;
  margin: 10px; 
}
</style>
