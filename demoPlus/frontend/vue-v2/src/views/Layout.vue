<template>
  <div>
    <!-- 头部区域 -->
    <div style="height: 60px; line-height: 60px; background-color: #f8f8fb; display: flex;">
      <!-- 左侧标题 -->
      <div style="flex: 1; display: flex; align-items: center; padding-left: 20px;">
        <el-button type="text" style="font-weight: bold; font-size: 24px; color: #27282D;" @click="$router.push('/')">前端布局展示</el-button>
        <span style="font-size: 14px; color: #999999; font-weight: 300; margin-left: 10px; margin-top: 10px;">Demo</span>
      </div>

      <!-- 搜索框 -->
      <div style="display: flex; align-items: center; justify-content: center; padding-right: 20px; width: 400px;">
        <el-input v-model="searchKeyword" placeholder="键入要搜索的布局" @keydown.enter.native="handleSearch" clearable prefix-icon="el-icon-search">
        </el-input>
      </div>

      <!-- 右侧内容 -->
      <div style="flex: 1; text-align: right; padding-right: 20px;">
        <span style="font-size: 14px; color: #999999; font-weight: 300; margin-left: 10px; margin-top: 10px;">Designed by Magicherry</span>
      </div>
    </div>

    <!-- 侧边栏和主体 -->
    <el-container style="display: flex; background-color: #f8f8fb; border: 1px">
      <!-- 侧边栏导航 -->
      <el-aside :style="{ width: auto, minHeight: 'calc(100vh - 62px)', overflow: 'hidden', borderRight: 'none' }">
        <div class="spacer" :style="{ height: '40px', width: isCollapse ? '60px' : '200px' }">
          <el-button title="收缩状态栏"
          :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          width="50px"
          height="20px"
          plain="true"
          style="position: absolute; left: 7px; background-color: #f8f8fb; border: none; font-size: 20px; "
          @click="toggleCollapse">
        </el-button>
        </div>

          <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :style="{ marginBottom: '10px', backgroundColor: '#f8f8fb' }">
            <el-menu-item index="/">
            <i class="el-icon-receiving"></i>
            <span>盒式布局</span>
          </el-menu-item>

          <el-menu-item index="/fluidLayout">
              <i class="el-icon-c-scale-to-original"></i>
              <span>流式布局</span>
          </el-menu-item>

          <el-menu-item index="/flexboxLayout">
              <i class="el-icon-thumb"></i>
              <span>弹性布局</span>
          </el-menu-item>

          <el-menu-item index="/gridLayout">
              <i class="el-icon-notebook-1"></i>
              <span>网格布局</span> 
          </el-menu-item>
          
          <el-menu-item index="/positioningLayout">
              <i class="el-icon-s-operation"></i>
              <span>定位布局</span>
          </el-menu-item>

          <el-menu-item index="/multiColumnLayout">
              <i class="el-icon-document"></i>
              <span>多列布局</span>
          </el-menu-item>

          <el-menu-item index="/responsiveLayout">
              <i class="el-icon-download"></i>
              <span>响应式布局</span>
          </el-menu-item>

          <el-menu-item index="/tableLayout">
              <i class="el-icon-date"></i>
              <span>表格布局</span>
          </el-menu-item>
          
        </el-menu>
      </el-aside>

      <!-- 主体数据 -->
      <div class="mainbody" :class="{'mainbody--collapsed': isCollapse, 'mainbody--expanded': !isCollapse}">
        <router-view />
      </div>
    </el-container>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'Layout.vue',
  data() {
    return {
      isCollapse: true,
      searchKeyword: '',
      menuItems: [
        { path: '/', name: '盒式布局' },
        { path: '/fluidLayout', name: '流式布局' },
        { path: '/flexboxLayout', name: '弹性布局' },
        { path: '/gridLayout', name: '网格布局' },
        { path: '/positioningLayout', name: '定位布局' },
        { path: '/multiColumnLayout', name: '多列布局' },
        { path: '/responsiveLayout', name: '响应式布局' },
        { path: '/tableLayout', name: '表格布局' },
      ]
    };
  },
  computed: {
    filteredMenuItems() {
      const keyword = this.searchKeyword.toLowerCase().trim();
      if (!keyword) {
        return this.menuItems;
      }
      return this.menuItems.filter(item => item.name.toLowerCase().includes(keyword));
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSearch() {
      const keyword = this.searchKeyword.toLowerCase().trim();
      const menuItem = this.menuItems.find(item => item.name.toLowerCase().includes(keyword));

      if (menuItem) {
        this.$router.push(menuItem.path);
      }

      this.searchKeyword = '';
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.spacer {
  background-color: #f8f8fb;
  transition: all 0.3s;
}

.mainbody {
  flex: 1;
  background-color: white;
  padding: 15px;
  border-radius: 10px 0 0 0;
  border-left: 1.5px solid #eae2e2;
  border-top: 1.5px solid #eae2e2;
  overflow: auto;
}

.mainbody--collapsed {
  width: calc(100% - 60px);
}

.mainbody--expanded {
  width: calc(100% - 200px);
}

.rounded-submenu .el-submenu__popover {
  border-radius: 5px !important; /* 调整圆角的大小 */
}

</style>
