// 描述
$('textarea[name="fdDescription"]').val('休假')

// 任务类型
// $('select[name="fdTaskId"]').click()
$('select[name="fdTaskId"]').val('15ea9350c5dd0cae3f20d1442f0b4e54')

getType('15ea9350c5dd0cae3f20d1442f0b4e54')

setTimeout(_ => {
  // 工作任务
  $('select[name="fdTypeId"]').val('15ea93929558aab5df6cecb4bc68e294')

  // 日期
  $('input[name="fdDate"]').val('2018-05-01')

  // 完成情况
  $('select[name="fdSituation"]').val(100)

  // 工时
  $('input[name="fdTime"]').val(8)

  // 保存
  $('#lui-id-2').click()
}, 800)
