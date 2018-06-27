<template>
  <el-dialog title="历史数据" :visible.sync="show" :before-close="closehide" width="70%">
    <el-table :data="tableData" :default-sort="defaultSort" height="550" border stripe style="width: 100%" empty-text="正在玩命加载中...">
      <el-table-column prop="fdDate" sortable label="填报日期"></el-table-column>
      <el-table-column prop="title" label="内容描述" width="180"></el-table-column>
      <el-table-column prop="fdTaskName" label="任务类型" width="180"></el-table-column>
      <el-table-column prop="fdTypeName" label="工作任务"></el-table-column>
      <el-table-column prop="fdSituation" label="完成情况(%)"></el-table-column>
      <el-table-column prop="fdTime" label="所耗工时"></el-table-column>
      <el-table-column label="操作" width="130">
        <template slot-scope="scope">
          <el-tooltip effect="dark" content="载入此条数据" placement="top">
            <el-button type="primary" size="mini" icon="el-icon-download" @click="loadItem(scope.row)"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="删除此条数据" placement="top">
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="delItem(scope.row)"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="getHistoryData">刷新数据</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'dialog-history',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultSort: {
        prop: 'fdDate',
        order: 'descending'
      }
    }
  },
  computed: {
    tableData() {
      const tableData = this.$store.state.history.tableData
      if (!tableData || tableData.length === 0) this.getHistoryData()
      return tableData
    }
  },
  mounted() {
  },
  methods: {
    closehide(isUpdate, data) {
      this.$emit('hide', isUpdate === true, data)
    },
    getHistoryData() {
      this.$store.dispatch('getHistoryData')
    },
    loadItem(item) {
      this.closehide(true, item)
    },
    delItem(item) {
      this.$confirm('确定删除该条记录吗?一旦删除不可恢复哦!').then(async _ => {
        const fdId = item.fdId
        if (!fdId) return console.error('取不到fdId')
        const ajaxURL = `km_workhours_main/kmWorkhoursMain.do?method=delete&fdId=${fdId}&s_ajax=true`

        const res = await this.$http.get(ajaxURL)
        if (!res.body.status) return
        this.$notify.success({ message: '删除成功' })
        this.getHistoryData()
      }).catch(_ => {})
    }
  }
}
</script>