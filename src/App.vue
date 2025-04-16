<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
    <GoTop />
  </div>
</template>

<style scoped>
/* 核心布局样式 */
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px 0;
}

/* 1024x768 分辨率优化 */
@media (max-width: 1024px) {
  .page-wrapper {
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  .main-content {
    padding: 15px 0;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 10px 0;
  }
}
</style>

<style>
/* 全局样式确保基础布局 */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 防止内容溢出 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
    max-width: 100%;
  }
}
</style>