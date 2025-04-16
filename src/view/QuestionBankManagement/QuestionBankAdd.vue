<template>
    <div class="common-layout">
      <el-container>

          <!-- 案例录入与审核 -->
          <div class="case-entry-section">
            <el-form :model="caseForm" ref="caseForm" label-width="120px">
              <el-form-item label="案例标题" prop="title" :rules="[{ required: true, message: '请输入案例标题', trigger: 'blur' }]">
                <el-input v-model="caseForm.title" placeholder="请输入案例标题"></el-input>
              </el-form-item>
  
              <el-form-item label="发生时间" prop="date" :rules="[{ required: true, message: '请选择发生时间', trigger: 'change' }]">
                <el-date-picker v-model="caseForm.date" type="date" placeholder="选择发生时间"></el-date-picker>
              </el-form-item>
  
              <el-form-item label="所属领域" prop="field"
                :rules="[{ required: true, message: '请选择所属领域', trigger: 'change' }]">
                <el-cascader v-model="caseForm.field" :options="fieldOptions" placeholder="请选择所属领域"></el-cascader>
              </el-form-item>
  
              <el-form-item label="问题描述" prop="problemDescription"
                :rules="[{ required: true, message: '请输入问题描述', trigger: 'blur' }]">
                <el-input type="textarea" v-model="caseForm.problemDescription" placeholder="问题描述（500字以内）"
                  :rows="4"></el-input>
              </el-form-item>
  
              <el-form-item label="解决过程" prop="solution">
                <el-input type="textarea" v-model="caseForm.solution" placeholder="解决过程（图文混排）" :rows="4"></el-input>
              </el-form-item>
  
              <el-form-item label="经验总结" prop="summary">
                <el-input type="textarea" v-model="caseForm.summary" placeholder="经验总结（分条陈述）" :rows="4"></el-input>
              </el-form-item>
  
              <el-form-item label="关联资源">
                <el-upload class="upload-demo" drag action="" :on-change="handleFileChange" :before-upload="beforeUpload"
                  :file-list="fileList">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到这里，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">请上传相关资源</div>
                  <div class="el-upload__tip" slot="tip" style="color: red; font-weight: bold;">
                    严禁在本互联网非涉密平台处理、传输国家秘密，请确认扫描、传输的文件资料不涉及国家秘密。
                  </div>
                </el-upload>
              </el-form-item>
  
              <el-form-item>
                <el-button type="primary" @click="submitCase">提交案例</el-button>
              </el-form-item>
            </el-form>
          </div>
      </el-container>
    </div>
  </template>
  
  <script>
  // import SecoMenu from '../components/SecondaryMenu.vue';
  
  export default {
    components: {
    },
    data() {
      return {
        caseForm: {
          title: '',
          date: '',
          field: [],
          problemDescription: '',
          solution: '',
          summary: '',
        },
        fileList: [],
        submittedCases: [], // 模拟已提交案例的列表
        discussions: [], // 模拟讨论列表
        discussionInput: '', // 讨论输入框的内容
        fieldOptions: [
          {
            value: 'business',
            label: '业务类',
            children: [
              { value: 'success', label: '成功案例' },
              { value: 'failure', label: '失败案例' },
            ],
          },
          {
            value: 'management',
            label: '管理类',
            children: [
              { value: 'team', label: '团队管理' },
              { value: 'project', label: '项目管理' },
            ],
          },
          {
            value: 'innovation',
            label: '创新创智类',
            children: [
              { value: 'thinking', label: '创新思维' },
              { value: 'solution', label: '智慧解决方案' },
            ],
          },
        ],
      };
    },
    methods: {
      submitCase() {
        // 提交案例逻辑
        const { title, date, field, problemDescription } = this.caseForm;
        if (title && date && field.length && problemDescription) {
          // 模拟提交成功
          this.submittedCases.push({
            title: title,
            date: date,
            field: field.join(' / '),
            status: '待审核',
          });
          this.$message.success('案例提交成功！');
          // 重置表单
          this.caseForm = {
            title: '',
            date: '',
            field: [],
            problemDescription: '',
            solution: '',
            summary: '',
          };
          this.fileList = []; // 清空文件列表
        } else {
          this.$message.error('请填写完整的案例信息！');
        }
      },
      handleFileChange(file) {
        this.fileList.push(file);
      },
      beforeUpload(file) {
        // 这里可以添加文件上传限制
        return new Promise((resolve, reject) => {
        this.$confirm(
          '严禁在本互联网非涉密平台处理、传输国家秘密，请确认扫描、传输的文件资料不涉及国家秘密。',
          '上传提示',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )
          .then(() => {
            resolve(true); // 用户确认后允许上传
          })
          .catch(() => {
            reject(false); // 用户取消上传
            this.$message.info('已取消上传');
          });
      });
      },
      viewCase(row) {
        this.$message.info(`查看案例：${row.title}`);
        // 这里可以添加查看案例的逻辑
      },
      submitDiscussion() {
        if (this.discussionInput) {
          this.discussions.push(this.discussionInput);
          this.discussionInput = ''; // 清空输入框
          this.$message.success('评论发布成功！');
        } else {
          this.$message.error('请输入评论内容');
        }
      },
    },
  };
  </script>
  
  <style>
  .common-layout {
    height: 100vh; /* 设置整体布局高度为视口高度 */
  }
  
  .el-main {
    padding: 20px; /* 添加内边距以提高可读性 */
  }
  
  .case-entry-section,
  .case-list-section,
  .discussion-section {
    margin-bottom: 20px;
  }
  
  .discussion-card {
    margin-top: 10px; /* 增加讨论卡片之间的间距 */
  }
  </style>