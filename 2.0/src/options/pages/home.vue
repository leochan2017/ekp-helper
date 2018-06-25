<template>
  <div>
    <el-header class="home-title">
      <p>EKP辅助 - 重新定义填报工时</p>
    </el-header>
    <el-main class="home-body">
      <el-card>
        <div slot="header" class="clearfix">
          <span>工时填报</span>
          <span v-if="form.docCreatorName"> - ({{ form.docCreatorName }})</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="dialogHistoryDisplay = true">载入历史数据</el-button>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="内容描述">
            <el-input type="textarea" v-model="form.fdDescription"></el-input>
          </el-form-item>
          <el-form-item label="任务类型">
            <el-select v-model="form.fdTaskId" placeholder="请选择任务类型" @change="fdTaskChangeHandle">
              <el-option v-for="item in fdTaskList" :label="item.label" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作任务">
            <el-select v-model="form.fdTypeId" placeholder="请选择工作任务">
              <el-option v-for="item in fdTypeList" :label="item.hoursTypeFdName" :key="item.value" :value="item.hoursTypeFdId"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="完成日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.fdDate"></el-date-picker>
          </el-form-item>
          <el-form-item label="完成情况">
            <el-slider v-model="form.fdSituation" :step="10" show-stops></el-slider>
          </el-form-item>
          <el-form-item label="所耗工时">
            <el-input-number v-model="form.fdTime" :min="0" label="所耗工时"></el-input-number>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="home-body-foot">
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="danger" @click="reset">清空</el-button>
      </div>
    </el-main>
    <dialog-history v-if="dialogHistoryDisplay" :show="dialogHistoryDisplay" @hide="historyDialogHide"></dialog-history>
  </div>
</template>
<script>
import dialogHistory from './dialog-history'
export default {
  name: 'home',
  components: {
    dialogHistory
  },
  data() {
    return {
      dialogHistoryDisplay: false, // 载入历史 弹窗显示
      // 工作任务选项列表
      fdTypeList: [],
      form: {
        method_GET: 'addDialog',
        fdId: '',
        docCreatorId: '',
        docCreatorName: '',
        fdItemNames: '', // 空着的不知道为何
        // fdDeptId: '15d7dbcdb3d23c8a92bb46741878d46c', // 实在取不到啊
        fdDeptName: '',
        // 下面的是视图上表单内容
        fdDescription: '', // 内容
        fdTaskId: '', // 任务类型
        fdTypeId: '', // 工作任务
        fdDate: '', // 日期
        fdSituation: 0, // 完成情况
        fdTime: 0 // 工时
      }
    }
  },
  computed: {
    // 任务类型选项列表
    fdTaskList() {
      return this.$store.state.home.fdTaskList || []
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    // 控制 载入历史 弹窗 关闭回调
    async historyDialogHide(isUpdate, data) {
      // console.log(data)
      if (isUpdate && data) {
        this.form.fdDescription = data.fdDescription

        // 任务类型
        let fdTaskId = data.fdTaskId
        if (!fdTaskId) fdTaskId = this.$store.getters.getTaskIdFormName(data.fdTaskName)
        this.form.fdTaskId = fdTaskId

        // 工作任务
        let fdTypeId = data.fdTypeId
        if (!fdTypeId) {
          await this.fdTaskChangeHandle(fdTaskId, arr => {
            const obj = arr.find(item => item.hoursTypeFdName == data.fdTypeName)
            if (obj) fdTypeId = obj.hoursTypeFdId
          })
        }
        this.form.fdTypeId = fdTypeId

        // 日期不需要填上去
        // this.form.fdDate = data.fdDate

        this.form.fdSituation = data.fdSituation
        this.form.fdTime = data.fdTime
      }
      this.dialogHistoryDisplay = false
    },
    async getUserInfo() {
      const ajaxURL = 'http://java.landray.com.cn/sys/person/sys_person_zone/sysPersonZone.do?method=info'
      const res = await this.$http.get(ajaxURL)
      const data = res.body
      this.form.docCreatorId = data.fdId
      this.form.docCreatorName = data.fdName
      // this.form.fdDeptId = data.fdDeptName
      this.form.fdDeptName = data.fdDeptName
    },
    formatDate: (timeObj, fmt) => {
      var o = {
        'M+': timeObj.getMonth() + 1, //月份
        'd+': timeObj.getDate(), //日
        'h+': timeObj.getHours(), //小时
        'm+': timeObj.getMinutes(), //分
        's+': timeObj.getSeconds(), //秒
        'q+': Math.floor((timeObj.getMonth() + 3) / 3), //季度
        'S': timeObj.getMilliseconds() //毫秒
      }

      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (timeObj.getFullYear() + '').substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      return fmt;
    },
    // 产品N位随机数
    generateId(n) {
      let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

      let nums = ''

      for (let i = 0; i < n; i++) {
        let id = parseInt(Math.random() * 16)
        nums += chars[id]
      }

      return nums
    },
    onSubmit() {
      let postData = this.form
      postData.fdId = this.generateId(32)
      postData.docCreateTime = this.formatDate(new Date, 'yyyy-MM-dd hh:mm')

      // return console.log(postData)

      const ajaxURL = 'km_workhours_main/kmWorkhoursMain.do?method=save&s_ajax=true'

      this.$http.post(ajaxURL, postData, {
        'emulateJSON': true
      }).then(succ => {
        if (!succ.body.status) return
        this.$notify.success({ message: '提交成功，奥耶~！' })
      }, err => {
        console.error('error callback', err)
      })
    },
    reset() {
      this.form.fdDescription = ''
      this.form.fdTaskId = ''
      this.form.fdTypeId = ''
      this.form.fdDate = ''
      this.form.fdSituation = 0
      this.form.fdTime = 0
    },
    // 改变任务类型
    async fdTaskChangeHandle(fdTaskId, cb) {
      this.fdTypeList = []
      this.form.fdTypeId = ''

      const ajaxURL = `km_workhours_type/kmWorkhoursType.do?method=getTypeByTask&fdTask=${fdTaskId}&s_ajax=true`

      const res = await this.$http.get(ajaxURL)

      const data = res.body

      this.fdTypeList = data

      cb && cb(data)

      // dev code
      // this.form.fdTypeId = res.body[0].hoursTypeFdId
    }
  }
}
</script>
<style>
.home-title {
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  height: 60px;
  line-height: 60px;
}

.home-body {
  width: 60%;
  margin: 0 auto;
}

.home-body-foot {
  margin-top: 10px;
  text-align: right;
}
</style>