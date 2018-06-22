var $fdDescription, $fdTaskId, $fdTypeId, $fdDate, $fdSituation, $fdTime, $subBtn;
var __STORE_PRE_STR__ = 'ekp-helper-'

// 从EKP 拷贝的
var getType = function(v) {
  var method = 'addDialog';
  var fdTask = $("select[name='fdTaskId'] option:selected").val();
  $.ajax({
    url: '/km/workhours/km_workhours_type/kmWorkhoursType.do?method=getTypeByTask&fdTask=' + fdTask,
    dataType: 'json',
    type: 'post',
    data: '',
    success: function(data) {
      var selectElement = $("select[name='fdTypeId']");
      selectElement.html("");
      var html = "";
      if (data) {
        html = html + "<option value>==请选择==</option>";
        for (var i = 0; i < data.length; i++) {
          var fdType = $("select[name='fdTypeId'] option:selected").val();
          html = html + "<option  value=" + data[i].hoursTypeFdId + ">" + data[i].hoursTypeFdName + "</option>";
        }
        selectElement.html(html);

        if (method == "editDialog") {

          $("select[name='fdTypeId']").find("option[value='']").attr("selected", true);
        }
      }
    }
  });
}


function writeReport(argument) {
  // 描述
  var fdDescription = localStorage.getItem(__STORE_PRE_STR__ + 'fdDescription') || ''

  // 任务类型
  var fdTaskId = localStorage.getItem(__STORE_PRE_STR__ + 'fdTaskId') || ''

  // 工作任务
  var fdTypeId = localStorage.getItem(__STORE_PRE_STR__ + 'fdTypeId') || ''

  // 日期
  var fdDate = localStorage.getItem(__STORE_PRE_STR__ + 'fdDate') || ''

  // 完成情况
  var fdSituation = localStorage.getItem(__STORE_PRE_STR__ + 'fdSituation') || ''

  // 工时
  var fdTime = localStorage.getItem(__STORE_PRE_STR__ + 'fdTime') || ''

  // 描述
  $fdDescription.val(fdDescription)

  if (fdTaskId) {
    // 任务类型
    $fdTaskId.val(fdTaskId)

    getType(fdTaskId)

    setTimeout(function() {
      // 工作任务
      if (fdTypeId) $fdTypeId.val(fdTypeId)
    }, 1000)

  }

  // 日期
  $fdDate.val(fdDate)

  // 完成情况
  $fdSituation.val(fdSituation)

  // 工时
  $fdTime.val(fdTime)
}

function saveStorage() {
  localStorage.setItem(__STORE_PRE_STR__ + 'fdDescription', $fdDescription.val())
  localStorage.setItem(__STORE_PRE_STR__ + 'fdTaskId', $fdTaskId.val())
  localStorage.setItem(__STORE_PRE_STR__ + 'fdTypeId', $fdTypeId.val())
  localStorage.setItem(__STORE_PRE_STR__ + 'fdDate', $fdDate.val())
  localStorage.setItem(__STORE_PRE_STR__ + 'fdSituation', $fdSituation.val())
  localStorage.setItem(__STORE_PRE_STR__ + 'fdTime', $fdTime.val())
}


$(function() {
  // 描述
  $fdDescription = $('textarea[name="fdDescription"]')

  // 任务类型
  $fdTaskId = $('select[name="fdTaskId"]')

  // 工作任务
  $fdTypeId = $('select[name="fdTypeId"]')

  // 日期
  $fdDate = $('input[name="fdDate"]')

  // 完成情况
  $fdSituation = $('select[name="fdSituation"]')

  // 工时
  $fdTime = $('input[name="fdTime"]')

  var htmlStr = '<div class="ekp-helper tool-btn"><h1>欢迎使用EKP辅助插件1.1.1</h1><p>本插件旨在帮助你快速填报工时</p><p>使用场景: 需要提交多次重复内容的表单</p><p>使用方法:</p><p>1.填写完整下面的工时表单</p><p>2.点击"保存"按钮时，插件弹出询问窗否需要存储数据，点击"确定"</p><p>3.下次进入填报工时页面时，只需点击"读取数据"按钮则可加载上次保存的数据，进行快速填报</p><div id="writeReport" class="button">读取数据</div></div>'

  $('body').prepend(htmlStr)

  $('#writeReport').click(writeReport)

  $('#saveStorage').click(saveStorage)

  setTimeout(function() {
    // 保存按钮
    $subBtn = $('div#lui-id-2')

    $subBtn.click(function() {
      var r = confirm('需要存储当前表单内容到EKP辅助插件吗？')
      if (r) saveStorage()
    })
  }, 1000)
})