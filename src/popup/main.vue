<template>
  <div class="popup-warp">
    <div class="title">
      <img src="../static/icons/icon48.png">
      <p>EKP辅助</p>
    </div>
    <div class="content">
      <ul>
        <li @click="openWorkReportList">
          <img src="../static/icon-list.png">查看工时信息</li>
        <li @click="openWriteWorkReportPage">
          <img src="../static/icon-write.png">快速填报工时</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {

  },
  methods: {
    openWorkReportList() {
      open('http://product.landray.com.cn/km/workhours/km_workhours_calendar/worcalendar.jsp')
    },
    openWriteWorkReportPage() {
      open('../options/index.html')
      // open('http://product.landray.com.cn/km/workhours/km_workhours_main/kmWorkhoursMain.do?method=addDialog')
    }
  }
}
</script>
<style lang="scss">
@import '~@/common/base';

.popup-warp {
  width: 160px;
  padding: 5px;
  font-size: 14px;
  .title {
    height: 55px;
    line-height: 55px;
    font-size: 16px;
    border-bottom: 1px dashed #666;
    text-align: left;
    p {
      vertical-align: top;
      display: inline-block;
    }
  }
  /*内容区*/
  .content {
    margin-top: 5px;
    ul {
      li {
        height: 28px;
        line-height: 28px;
        vertical-align: middle;
        cursor: pointer;
        &:hover {
          opacity: 0.6;
          cursor: pointer;
        }
        /*border: 1px solid red;*/
        img {
          display: inline-block;
          vertical-align: middle;
          margin-right: 3px;
          /*border-bottom: 1px solid green;*/
        }
      }
    }
  }
}
</style>