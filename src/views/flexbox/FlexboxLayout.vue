<template>
<div>
  <div style="margin-bottom: 30px">弹性布局演示</div>
  <div class="flexbox-container">
    <div class="flexbox-item">
      <h2>Item 1</h2>
      <p>This is the content of item 1.</p>
    </div>
    <div class="flexbox-item">
      <h2>Item 2</h2>
      <p>This is the content of item 2.</p>
    </div>
    <div class="flexbox-item">
      <h2>Item 3</h2>
      <p>This is the content of item 3.</p>
    </div>
    <div class="flexbox-item">
      <h2>Item 4</h2>
      <p>This is the content of item 4.</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.flexbox-container {
  display: flex;
  justify-content: space-between;
}

.flexbox-item {
  flex: 1;
  padding: 20px;
  margin: 2px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: lightblue;
}
</style>
