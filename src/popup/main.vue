<template>
  <div class="popup-warp">
    <div @click="openMyProject" class="title" title="检查更新">
      <img src="../static/icons/icon48.png">
      <p>EKP辅助</p>
    </div>
    <div class="content">
      <ul>
        <li @click="openWorkReportList">
          <img src="../static/icon-list.png">查看工时信息
        </li>
        <li @click="openWriteWorkReportPage">
          <img src="../static/icon-write.png">快速填报工时
        </li>
        <li @click="removeWatermarkEkp">
          <img src="../static/icon-yin.png">EKP去水印
        </li>
        <li @click="openWebDd">
          <img src="../static/icon-dd.png">钉钉网页版
        </li>
        <li @click="ddFullScreen">
          <img src="../static/icon-full-screen.png">钉钉网页版全屏
        </li>
        <li @click="removeWatermarkDd">
          <img src="../static/icon-yin.png">钉钉网页版去水印
        </li>
        <li @click="hideDdExercise">
          <img src="../static/icon-exercise.png">钉钉网页版屏蔽运动
        </li>
        <li @click="openDinnerSystem">
          <img src="../static/icon-dinner.png">加班订餐系统
        </li>
        <li @click="hideBiHuMode">
          <img src="../static/icon-bihu.png">逼乎神隐模式
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    // 获取当前浏览器选项卡ID
    getCurrentTabId(callback) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null)
      })
    },
    /** 打开本项目主页 (github) */
    openMyProject() {
      open('https://github.com/leochan2017/ekp-helper')
    },
    /** 查看工时信息 */
    openWorkReportList() {
      open(
        'http://product.landray.com.cn/km/workhours/km_workhours_calendar/worcalendar.jsp'
      )
    },
    /** 快速填报工时 */
    openWriteWorkReportPage() {
      open('../options/index.html')
    },
    /** 去水印 ekp */
    removeWatermarkEkp() {
      // chrome.runtime.sendMessage({ cmd: 'insertekp' })
      this.getCurrentTabId(tabId => {
        // chrome.tabs.executeScript(tabId, {
        //   code:
        //     'var divs = document.getElementsByClassName("mask_div"); for (var i = 0; i < divs.length; i++) { divs[i].style = ""; }'
        // })
        chrome.tabs.insertCSS(
          tabId,
          {
            code: '.mask_div {display: none !important;}',
            allFrames: true
          },
          () =>
            console.log(
              '已经为你注入 EKP去水印 的神秘代码，如果不成功请重试或者找找作者?'
            )
        )
      })
    },
    /** 打开钉钉网页版 */
    openWebDd() {
      open('https://im.dingtalk.com/')
    },
    /** 钉钉网页版全屏 */
    ddFullScreen() {
      this.getCurrentTabId(tabId => {
        chrome.tabs.insertCSS(
          tabId,
          {
            code:
              '#layout-main {width: 100% !important;flex: 0 1 100% !important;} #body {height: 100% !important;}'
          },
          () =>
            console.log(
              '已经为你注入 钉钉网页版全屏 的神秘代码，如果不成功请重试或者找找作者?'
            )
        )
      })
    },
    /** 去水印 dd */
    removeWatermarkDd() {
      // chrome.runtime.sendMessage({ cmd: 'insertdd' })
      this.getCurrentTabId(tabId => {
        chrome.tabs.insertCSS(
          tabId,
          {
            code: '.main-chat {background: none !important;} .detail-box, .org-member-inner {background: none !important;}'
          },
          () =>
            console.log(
              '已经为你注入 钉钉网页版去水印 的神秘代码，如果不成功请重试或者找找作者?'
            )
        )
      })
    },
    /** 屏蔽钉钉运动 */
    hideDdExercise() {
      // chrome.runtime.sendMessage({ cmd: 'hideDdExercise' })
      this.getCurrentTabId(tabId => {
        chrome.tabs.insertCSS(
          tabId,
          {
            code:
              'conv-item[con-id^="20981:"] {display: none; !important} conv-item[con-id$=":420217003"] {display: none; !important}'
          },
          () =>
            console.log(
              '已经为你注入 钉钉网页版屏蔽运动 的神秘代码，如果不成功请重试或者找找作者?'
            )
        )
      })
    },
    /** 跳转到加班点餐系统 */
    openDinnerSystem() {
      open('http://test.ywork.me/yw/pc/dinner2.0/')
    },
    /** 注入逼乎神隐模式代码 */
    hideBiHuMode() {
      this.getCurrentTabId(tabId => {
        chrome.tabs.insertCSS(
          tabId,
          {
            code: '.ZhihuLogo {display: none !important;} .AppHeader {display: none !important;} .GlobalSideBar {display: none !important;} .Topstory-mainColumn {width: 1024px !important;} .Question-mainColumn {width: 1024px !important;} .ContentItem-actions {display: none !important;} .ContentItem-actions.RichContent-actions {display: flex !important;} .RichContent.is-collapsed {min-height: 100px !important;} .Question-sideColumn {display:none !important;}'
          },
          () =>
            console.log(
              '已经为你注入 逼乎神隐模式 的神秘代码，如果不成功请重试或者找找作者?'
            )
        )
        chrome.tabs.executeScript(tabId, {
          code:
            'document.getElementsByTagName("title")[0].innerHTML = "前端开发进阶指南";'
        })
      })

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
    cursor: pointer;
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