/** 注入 屏蔽 EKP 水印 */
// function insertekp() {
//   alert('ekp')
// }

/** 注入 钉钉 css 水印 */
// function insertdd() {
//   document.getElementsByClassName('main-chat')[0].style = 'background: none;'
// }

/** 注入 屏蔽钉钉运动 css */
// function hideDdExercise() {
//   alert('hideDdExercise')
// }

// chrome.runtime.onMessage.addListener(function (request) {
//   const cmd = request.cmd
//   switch (cmd) {
//     case 'insertekp':
//       insertekp()
//       break
//     case 'insertdd':
//       insertdd()
//       break
//     case 'hideDdExercise':
//       hideDdExercise()
//       break
//   }
// })