![Logo](https://github.com/leochan2017/ekp-helper/blob/master/src/static/icons/icon128.png?raw=true)

## EKP Helper - A Chrome Plugin Tool for EKP

![By Leo](https://img.shields.io/badge/Powered_by-Leo-red.svg?style=flat)
![Github file size](https://img.shields.io/github/size/leochan2017/ekp-helper/dist.crx.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/leochan2017/ekp-helper.svg)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)

EKP 谷歌浏览器辅助扩展

## 项目主页

[https://github.com/leochan2017/ekp-helper](https://github.com/leochan2017/ekp-helper)

## 插件说明

- 查看工时信息: 快捷到达查看工时列表页面
- 快速填报工时: 帮助你快速在 EKP 中提交多次内容重复度高的记录

## 运行环境

Chrome 浏览器扩展程序

## 如何安装

- MAC OS 用户

  - 1.下载 [dist.crx](https://github.com/leochan2017/ekp-helper/blob/master/dist.crx?raw=true)
  - 2.Chrome --> 设置 --> 更多工具 --> 扩展程序 --> 拖拽 crx 文件进行安装

- WINDOWS 用户
  - 1.下载[ext.zip](https://github.com/leochan2017/ekp-helper/blob/master/ext.zip?raw=true)
  - 2.解压 ext.zip
  - 2.Chrome --> 设置 --> 更多工具 --> 扩展程序 --> 加载已解压的扩展程序 --> 选择 ext 的解压目录

## 使用流程

1. 点击 Chrom 右上角的插件图标
2. 在弹出的界面，点击“快速填报工时”
3. 如未登陆，将跳转去 EKP 登陆，登陆成功后，需要你自助回到此界面(重复步骤 1、2)
4. 点击表单右上角“查看历史填报数据”
5. 选择你想要的一条数据，点击右侧的载入按钮
6. 数据已经自动为你填到表单上了，此时只需要改一下“日期”选项，就可以提交了

## 运行截图

![截图1](https://github.com/leochan2017/ekp-helper/blob/master/assets/screenshot1.png?raw=true)

![截图2](https://github.com/leochan2017/ekp-helper/blob/master/assets/screenshot2.png?raw=true)

![截图3](https://github.com/leochan2017/ekp-helper/blob/master/assets/screenshot3.png?raw=true)

## 更新历史

- 2020.01.06 v2.3.1
  - 原来的“查看工时审批列表”菜单改名为“查看工时审批(总)”
  - 增加"工时审批列表[部分]"菜单
  - 修正"一键审批当前列表"只对"部分"菜单生效
- 2019.12.31 v2.2.18
  - 增加查看工时审批列表菜单
  - 增加一键审批当前工时列表功能
- 2019.06.27 v2.2.14
  - 优化逼乎神隐模式
- 2019.04.12 v2.2.12
  - 增强钉钉去水印（组织架构页面）
- 2019.03.20 v2.2.10
  - 增强逼乎神隐模式
- 2019.03.20 v2.2.5
  - 增加逼乎神隐模式
  - 增强钉钉去水印功能
- 2019.03.19 v2.2.4
  - 去掉操作选项时的 alert 提示
- 2019.03.11 v2.2.3 - 上一个版本没有打包。这个版本是重新打包输出的。
- 2019.02.15 v2.2.2
  - 增加 EKP 去水印 功能
  - 增加 钉钉网页版 功能
  - 增加 钉钉网页版全屏 功能
  - 增加 钉钉网页版去水印 功能
  - 增加 钉钉网页版屏蔽运动 功能
  - 增加 点击标题跳转到项目主页（github）功能
  - 增加 跳转点餐系统功能
  - 优化填报工时页的按钮顺序
  - 优化填报工时的检测未登录状态逻辑
- 2018.10.15 v2.1.14
  - 调整 UI ，貌似这样更好看
  - 日期组件支持多选，现在能一次性提交多天重复的内容啦
- 2018.07.03 v2.1.6
  - 生成高仿山寨 EKP 的 fdid
  - 优化拦截器的数据校验逻辑
  - 优化日期组件体验，增加快捷操作选中“昨天”，“今天”，“一周前”
- 2018.07.02 v2.1.2
  - 修复日期组件改变没有替换输入框值的 bug
- 2018.06.25 v2.0.0

  - 介四里一腚没有用过的船新版本
  - 船新的 UI
  - 船新的体验
  - 加载历史数据以列表呈现，选择其中一条，一键加载内容，高效提交

- 2018.05.14 v1.1.1

  - 调整插件配置，改正插件名字，防止以后每次更新不会覆盖之前一个的情况出现

- 2018.05.14 v1.1.0 版发布

  - 改用 popup 操作习惯
  - 新增快捷查看工时列表功能

- 2018.05.09 v1.0.0 版发布

## 反馈

[提交 Issues](https://github.com/leochan2017/ekp-helper/issues/new)

## License

[MIT](http://opensource.org/licenses/MIT)
