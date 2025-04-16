<template>
  <div id="Service">
    <div class="container text-center">
      <h3>讲师入口</h3>
      <p style="color: #b2b2b2">The Best Teacher Team</p>
    </div>
    <div class="container">
      <div class="Service-container row">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
          v-for="(item, index) in serviceList"
          :key="index"
          @click="ServiceClick(item.id)"
        >
          <div class="Service-item-wrapper">
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
import service1 from './assets/R.jpg'
import service2 from './assets/SR.jpg'
import service3 from './assets/SSR.jpg'
import service4 from './assets/USSR.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: '初级讲师',
    eng_title: 'Junior lecturer',
    img: service1
  },
  {
    id: 'section-2',
    title: '中级讲师',
    eng_title: 'Intermediate lecturer',
    img: service2
  },
  {
    id: 'section-3',
    title: '高级讲师',
    eng_title: 'Senior lecturer',
    img: service3
  },
  {
    id: 'section-4',
    title: '特聘讲师',
    eng_title: 'Specially lecturer',
    img: service4
  }
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
  padding: 30px 50px;
}
.Service-item {
  margin-bottom: 50px;
}
.Service-item-wrapper {
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
</style>

