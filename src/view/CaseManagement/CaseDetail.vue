<template>
  <div id="Service">
    <div class="container text-center">
      <h3>案例展示</h3>
      <p style="color: #b2b2b2">The Best Service You Never See</p>
    </div>
    <div class="container">
      <div class="Service-container row g-4 justify-content-center">
        <div
          class="Service-item col-12 col-md-6 col-lg-4 wow slideInUp"
          v-for="(item, index) in serviceList"
          :key="index"
          @click="ServiceClick(item.id)"
        >
          <div class="Service-item-wrapper h-100">
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.eng_title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="Service">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import WOW from 'wow.js'
import service1 from '@/assets/img/service1.jpg'
import service2 from '@/assets/img/service2.jpg'
import service3 from '@/assets/img/service3.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: '微课视频',
    eng_title: 'Customize App',
    img: service1
  },
  {
    id: 'section-2',
    title: '技能提升',
    eng_title: 'Outsourcing',
    img: service2
  },
  {
    id: 'section-3',
    title: '应知应会',
    eng_title: 'eCommerce Site',
    img: service3
  },
]

const router = useRouter()

function ServiceClick(id) {
  router.push({
    name: 'serviceDetail',
    state: {
      id
    }
  })
}
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.Service-container {
  padding: 30px;
}
.Service-item {
  padding: 0 15px;
  margin-bottom: 50px;
}
.Service-item-wrapper {
  transition: all 0.3s ease;
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}
.Service-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.Service-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.Service-item-img {
  width: 100%;
  overflow: hidden;
}
.Service-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}
.Service-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
  transform: scale(1.1, 1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}

/* 新增响应式调整 */
@media (max-width: 768px) {
  .Service-item {
    margin-bottom: 30px; /* 移动端减小间距 */
  }
}
</style>

