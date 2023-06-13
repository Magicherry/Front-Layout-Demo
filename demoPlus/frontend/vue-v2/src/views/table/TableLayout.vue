<template>
<div>
    <div style="margin-bottom: 30px">表格布局演示</div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        >
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="400">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

</div>
</template>
  
  <script>
    export default {
      methods: {
        handleClick(row) {
          console.log(row);
        }
      },
  
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2017-05-04',
            name: '王大拿',
            province: '上海',
            city: '长宁区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            date: '2018-05-01',
            name: '张三',
            province: '上海',
            city: '松江区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            date: '2019-05-03',
            name: '李四',
            province: '上海',
            city: '黄埔区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }]
        }
      }
    }
  </script>