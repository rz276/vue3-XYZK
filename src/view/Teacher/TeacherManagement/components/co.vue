<template>
  <div>
    <div class="flex items-center space-x-4 mb-4">
      <el-input v-model="searchQuery" placeholder="请输入搜索内容" style="width: 200px;"></el-input>
      <el-select v-model="selectedOption" placeholder="请选择">
        <el-option label="选项1" value="option1"></el-option>
        <el-option label="选项2" value="option2"></el-option>
      </el-select>
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-button type="success" @click="handleEdit">编辑</el-button>
      <el-button type="danger" @click="handleDelete">删除</el-button>
      <el-button type="info" @click="handleSearch">查询</el-button>
    </div>
    <el-table :data="filteredUsers" stripe>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="company" label="所在单位"></el-table-column>
      <el-table-column prop="contact" label="联系方式"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="title" label="职称"></el-table-column>
      <el-table-column prop="certificate" label="资质证书"></el-table-column>
      <el-table-column prop="field" label="专业领域"></el-table-column>
      <el-table-column prop="courses" label="授课课程"></el-table-column>
      <el-table-column prop="students" label="授课对象"></el-table-column>
      <el-table-column prop="awards" label="获奖情况"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 模拟数据
const users = ref([
  {
    name: '张三',
    age: 30,
    gender: '男',
    company: 'XX 公司',
    contact: '13800138000',
    education: '本科',
    title: '中级工程师',
    certificate: 'XX 证书',
    field: '软件开发',
    courses: 'Java 编程',
    students: '大学生',
    awards: '优秀员工奖'
  }
]);

const searchQuery = ref('');
const selectedOption = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    return Object.values(user).some(value => {
      return String(value).includes(searchQuery.value);
    });
  });
});

const handleAdd = () => {
  console.log('新增操作');
};

const handleEdit = () => {
  console.log('编辑操作');
};

const handleDelete = () => {
  console.log('删除操作');
};

const handleSearch = () => {
  console.log('查询操作');
};
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>