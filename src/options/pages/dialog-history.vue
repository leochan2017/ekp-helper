<template>
  <el-dialog title="历史数据" :visible.sync="show" :before-close="closehide" width="70%">
    <el-table :data="tableData" :default-sort="defaultSort" height="600" border stripe style="width: 100%">
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
    </el-table>
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
      tableData: [],
      defaultSort: {
        prop: 'fdDate',
        order: 'descending'
      }
    }
  },
  computed: {

  },
  mounted() {
    this.getData()
  },
  methods: {
    closehide(isUpdate, data) {
      this.$emit('hide', isUpdate === true, data)
    },
    async getData() {
      let ajaxURL = 'km_workhours_main/kmWorkhoursMain.do?method=worcalendar&pageno=1&s_ajax=true'

      // 加了也没用
      // ajaxURL += `&fdStart=2018-06-25+00%3A00`

      // ajaxURL += `&fdEnd=2018-07-02+00%3A00`

      const res = await this.$http.get(ajaxURL)

      this.tableData = res.body.main
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
        this.getData()
      }).catch(_ => {})
    }
  }
}
</script>