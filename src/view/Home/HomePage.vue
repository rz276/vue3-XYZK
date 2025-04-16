<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper
      id="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      lazy
      loop
      autoplay
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide
        class="banner-swiper"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
        <div class="swiper-lazy-preloader"></div>
        <div class="swiper-slide-title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 湘驿智库 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
          <h1 class="zk-title-1">湘驿智库平台</h1>
          <h1 class="zk-title-2">全省四库资源线上管理平台</h1>
          <p class="admin-title">
            通过PC端管理全省邮政系统的培训资源。支持资源分类存储、智能检索、动态更新和共享应用等功能，打破地域与单位限制，实现资源高效共享；
          </p>
          <p class="admin-title">
            支持平台资源关联，实现师资画像、智能推课、资源审核、评价与考核等功能，提升师资管理科学性与规范性；
          </p>
          <p class="admin-title">
            支持数据统计、权限分级管控，依据用户角色分级、实行管理控制、操作审计和业绩评估预警，提升平台管理效能。
          </p>
          <el-button type="success" plain>立即注册</el-button>
      </div>
    </div>

    <!-- 管理员 -->
    <div id="bigDataAdmin" class="container-fuild">
      <div class="row bigData-container">
          <h1 class="admin-title-1">集中化管理，提高资源利用效率</h1>
          <h1 class="admin-title-2">促进知识共享与传承</h1>
          <p class="admin-title-1">
            权限分配采用细粒度控制，确保用户只能进行其权限范围内的操作，水印追踪
          </p>
           <!-- 新增三个板块 -->
          <div class="box-container">
            <div class="box-item">
              <h2>超级管理员</h2>
              <p>负责整个平台最高权限管理，包括用户管理、权限分配、系统配置、用户管理、数据备份与恢复、日志管理等</p>
            </div>
            <div class="box-item">
              <h3>省级/部门管理员</h3>
              <p>负责本市、本部内辖区的资源管理和用户管理，协助省级管理员完成资源市核与发布。本市辖区资源上传初审、发布、属地师资管理、用户管理、统计分析、数据报表生成等。负责本部门资源提交、需求提报</p>
            </div>
            <div class="box-item">
              <h3>区/县级管理员</h3>
              <p>负责本单位的资源上传、师资管理、师资信息维护、课件发布、案例管理和试题管理。负贵本部内资源提交、上传资源审核、案例库建设、试题需求提报</p>
            </div>
          </div>
      </div>
    </div>

    <!-- 平台资源关联 -->
    <div id="connection" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive"
            src="./assets/img/connect.png"
            alt="大数据管理系统"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="connect-title-1">支持平台资源关联，实现师资画像、</h2>
          <h2 class="connect-title-2">智能推课、资源审核、评价与考核等</h2>
          <p>具备师资档案管理、授课管理、多维度评估、智能画像、双模式派课机制、授课可视化数据统计、智能预警等功能。
            智能画像功能：构建“3+5+N”评估模型。加权评分算法，包含基础维度（3项），如资质认证（20%）、授课时长（30%）、知识更新频率（50%）；能力维度（5级），如课程设计力、课堂感染力、实战指导力、创新应用力、应急处理力；扩展标签叠加，如行业认证、专利成果、特殊贡献等。  </p>
          <el-button type="success" plain>了解更多</el-button>
        </div>
      </div>
    </div>

    <!-- 数据统计 -->
    <div id="dataStatistics" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-4">
          <h2 class="data-title-1">数据统计输出 拥有大量</h2>
          <h2 class="data-title-2">数据以及基础客户群体</h2>
          <p>对下载次数、下载时间、下载用户等信息进行统计分析，支持生成统计报表，支持导出功能</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 wow zoomIn">
        </div>
      </div>
    </div>

    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>随时随地知识共享</h1>
        <h3>全业务知识内容覆盖</h3>
        <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >
          联系我们
        </button>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">客户评价</p>
        <swiper
          class="swiper-container customer-swiper hidden-xs"
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          navigation
          loop
          autoplay
          :pagination="{
            clickable: true
          }"
        >
          <swiper-slide
            class="swiper-slide customer-block"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo" />
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号" />
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">{{ item.title }}</div>
          </swiper-slide>
        </swiper>

        <div class="row visible-xs customer-block">
          <div
            class="col-xs-12"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo" />
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号" />
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">
              <small>{{ item.title }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们的服务</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item, index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo" />
              <p class="text-center">{{ item.title }}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from 'wow.js'
import { getCurrentInstance, onMounted } from 'vue'
// import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'

import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.jpg'
import bannerTeacher from '../Home/assets/img/Teacher.jpg'
import bannerCourse from '@/assets/img/bannerCourse.png'
import bannerCase from '@/assets/img/bannerCase.png'
import bannerTest from '@/assets/img/bannerTest.png'

import logo_hp from '@/assets/img/logo_hp.png'
import logo_kk from '@/assets/img/logo_kk.png'
import logo_toyota from '@/assets/img/logo_toyota.png'

import img_tel from '@/assets/img/tel.png'
import img_computer from '@/assets/img/computer.png'
import img_qq from '@/assets/img/qq.png'
import img_skill from '@/assets/img/skill.png'

const swiperList = [
  {
    img: bannerTeacher,
    title: '师资库',
    content: '师资档案管理、授课管理、多维度评估、智能画像、双模式派课机制、授课可视化数据统计、智能预警'
  },
  {
    img: banner2,
    title: '课件库',
    content: '课件信息管理、课件自动编号、上传与存储、分类标签筛选定位、课件审核、课件评分、下载与使用日志统计'
  },
  {
    img: banner1,
    title: '案例库',
    content: '案例收集与整理、智能标签分类、案例审核与发布、案例展示与分享、案例讨论与交流'
  },
  {
    img: banner2,
    title: '试题库',
    content: '试题录入与编辑、分类与标签管理、语义相似度检测、试题难易度管理、试题组卷与发布、考试结果统计与分析'
  }
]

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]

const customerList = [
  {
    logo: logo_hp,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_kk,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_toyota,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_kk,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_hp,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_toyota,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_kk,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_hp,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_toyota,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_hp,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_kk,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: logo_hp,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  }
]

const serverList = [
  {
    logo: img_tel,
    title: '核心优势1',
    content: '<p>由专业客服提供人工服务</p>负责疑难问题和故障受理'
  },
  {
    logo: img_computer,
    title: '核心优势2',
    content: '<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障'
  },
  {
    logo: img_qq,
    title: '核心优势3',
    content: '<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障'
  },
  {
    logo: img_skill,
    title: '核心优势4',
    content: '<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理'
  }
]

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
  // console.log('mounted', proxy)
  // console.log(proxy.$wow, '------')
  /* wowjs动画 */
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 600px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 湘驿智库 */
#bigData {
  background-color: #fafafa; /* 更浅的灰色 */
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 第一部分样式 */
/* 解决id重复问题（建议将第二个id改为bigDataAdmin） */
#bigData .bigData-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.zk-title-1{
  font-size: 4vw !important; /* 视口宽度的3% */
}
.zk-title-2 {
  font-size: 4vw !important; /* 视口宽度的3% */
  color: #4caf4f !important; /* RGB 76,175,79 */
  font-family: "SimHei", "黑体", sans-serif !important;
}

/* 第二部分样式 */
#bigDataAdmin .bigData-container { /* 建议修改第二个容器的id */
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.admin-title{
  width: 100%; /* 确保占满整行 */
}

.admin-title-1, .admin-title-2 {
  text-align: center;
  /* 可选的其他样式 */
  margin: 0.5rem 0; /* 添加一些垂直间距 */
}

/* 新增三个板块样式 */
.box-container {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
.box-item {
  flex: 1;
  border: 2px solid #4caf4f;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  min-height: 150px;
}
/*平台资源关联*/
.connection{
  margin-top: 20px;
}
/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url('../Home/assets/img/contact_us_bg.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

#customer .customer-block {
  background: #fff;
  padding: 30px 80px;
}

#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}

#customer .customer-yh img {
  width: 34px;
  height: 34px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-content2 {
  padding-top: 20px;
}

/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}

#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}

#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

