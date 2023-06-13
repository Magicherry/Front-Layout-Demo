<template>
<div>
  <div style="margin-bottom: 30px">多列布局演示</div>
  <div class="multicolumn-container">
    <div class="multicolumn-item">
      <h2>Column 1</h2>
      <p>This is the content of column 1.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 2</h2>
      <p>This is the content of column 2.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 3</h2>
      <p>This is the content of column 3.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 4</h2>
      <p>This is the content of column 4.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 5</h2>
      <p>This is the content of column 5.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 6</h2>
      <p>This is the content of column 6.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 7</h2>
      <p>This is the content of column 7.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 8</h2>
      <p>This is the content of column 8.</p>
    </div>
    <div class="multicolumn-item">
      <h2>Column 9</h2>
      <p>This is the content of column 9.</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.multicolumn-container {
  column-count: 3;
  column-gap: 20px;
}

.multicolumn-item {
  break-inside: avoid;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid lightgray;
  background-color: lightblue;
}
</style>
