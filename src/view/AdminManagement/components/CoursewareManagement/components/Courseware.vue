
    <template>
      <el-table :data="coursewareList" border class="table">
        <el-table-column prop="categoryId" label="课件分类" width="150"/>
        <el-table-column prop="teacherId" label="所属讲师" width="150"/>
        <el-table-column prop="title" label="课件标题" width="150"/>
        <el-table-column prop="description" label="课件描述" width="150"/>
        <el-table-column prop="version" label="课件版本号" width="150"/>
        <el-table-column prop="isQuality" label="是否精品课件" width="150"/>
        <el-table-column prop="referenceCount" label="引用次数" width="180"/>
        <el-table-column prop="downloadCount" label="下载次数" width="100"/>
        <el-table-column prop="reviewer" label="审核人" width="100"/>
        <el-table-column prop="reviewLevel" label="审核级别" width="100"/>
        <el-table-column prop="reviewResult" label="审核结果" width="100"/>
        <el-table-column prop="reviewComment" label="审核意见" width="100"/>
        <el-table-column prop="quoteCount" label="引用次数" width="100"/>
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button type="primary" size="small" @click="updateCourse(scope.row)">修改</el-button>
            <el-button type="primary" size="small" @click="deleteCourse(scope.row)">删除</el-button>
            <el-button type="primary" size="small" @click="downloadCourseware(scope.row)">下载</el-button>
            <el-button type="primary" size="small" @click="showMoreInfo(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

export default {
  data(){
    return {
      coursewareList:[

      ],
    }
  },
  methods: {

    showMoreInfo(teacher) {
      this.$emit('show-more', teacher); // 触发事件，传递教师数据
    },
    downloadCourseware(){

    },
    updateCourse(course){

    },
    deleteCourse(course){

    }
  }
};
</script>

