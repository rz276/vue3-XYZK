<template>
  <el-input class="input" placeholder="输入关键字进行过滤" v-model="filterText"/>
  <el-tree
    class="filter-tree"
    ref="courseTree"
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    :filter-node-method="filterNode"
    @check-change="handleCheckChange"
  >
    <template #default="{ node, data }">
      <div class="custom-tree-node">
        <span>{{ node.label }}</span>
        <div>
          <el-tooltip
            class="box-item"
            effect="light"
            content="新增所属分类的子类"
            placement="top-start"
          >
            <el-button type="primary" link @click="append(node, data)">
              新增</el-button
            >
          </el-tooltip>
          <el-button
            style="margin-left: 4px"
            type="primary"
            link
            :v-show="node.level > 0"
            @click="update(node, data)"
          >
            修改</el-button
          >
          <el-button
            style="margin-left: 4px"
            type="danger"
            link
            @click="remove(node, data)"
            >删除</el-button
          >
        </div>
      </div>
    </template>
  </el-tree>
</template>

<script>
import { getCourseClassList } from "@/views/CoursewareManagement/components/course.js";

export default {
  watch: {
    filterText(val) {
      this.$refs["courseTree"].filter(val);
    }
  },
  data() {
    return {
      filterText: "",
      props: {
        label: "name",
        children: "label",
      },
      count: 1,
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    handleCheckChange(data, checked, indeterminate) {
      let param = {};
      if(checked) {
        param.categoryId = data.id;
        this.$emit("handleCheckChange", param);
      }
    },
    handleNodeClick(data) {
      console.log(data);
    },
    async loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "课件分类" }]);
      } else {
        let params ={level: node.level};
        if (node.level !== 1) {
          params.parentId = node.data.id;
        }
          const data = await getCourseClassList(params)
          if (data && data.data && data.data.list) {
              return resolve(data.data.list);
          }
      }
    },
    append(node,data) {
      this.$emit("append", node);
    },
    update(node, data) {
      if(node.level === 1) {
        this.$message.warning("头部节点不允许修改");
      }else{
        this.$emit("update", node);
      }
    },
    remove(node, data) {
      if(node.level === 1) {
        this.$message.warning("头部节点不允许删除");
      }else{
        this.$emit("delete", node);
      }
    }
  }
};
</script>
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.input{
  margin-bottom: 20px;
}
</style>
