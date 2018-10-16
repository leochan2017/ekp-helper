![Logo](https://github.com/leochan2017/ekp-helper/blob/master/src/static/icons/icon128.png?raw=true)

## EKP Helper - A Chrome Plugin Tool for EKP
![By Leo](https://img.shields.io/badge/Powered_by-Leo-red.svg?style=flat) 
![Github file size](https://img.shields.io/github/size/leochan2017/ekp-helper/dist.crx.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/leochan2017/ekp-helper.svg)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)

EKP谷歌浏览器辅助扩展

## 项目主页
[https://github.com/leochan2017/ekp-helper](https://github.com/leochan2017/ekp-helper)


## 插件说明
- 查看工时信息: 快捷到达查看工时列表页面
- 快速填报工时: 帮助你快速在EKP中提交多次内容重复度高的记录


## 运行环境
Chrome浏览器扩展程序


## 如何安装

- MAC OS  用户
    - 1.下载 [dist.crx](https://github.com/leochan2017/ekp-helper/blob/master/dist.crx?raw=true)   
    - 2.Chrome --> 设置 --> 更多工具 --> 扩展程序 --> 拖拽crx文件进行安装

- WINDOWS 用户
    - 1.下载[ext.zip](https://github.com/leochan2017/ekp-helper/blob/master/ext.zip?raw=true) 
    - 2.解压ext.zip
    - 2.Chrome --> 设置 --> 更多工具 --> 扩展程序 --> 加载已解压的扩展程序 --> 选择 ext 的解压目录


## 使用流程
0.点击 Chrom 右上角的插件图标
1.在弹出的界面，点击“快速填报工时”
2.如未登陆，将跳转去 EKP 登陆，登陆成功后，需要你自助回到此界面(重复步骤0、1)
3.点击表单右上角“查看历史填报数据”
4.选择你想要的一条数据，点击右侧的载入按钮
5.数据已经自动为你填到表单上了，此时只需要改一下“日期”选项，就可以提交了


## 运行截图
![截图1](https://github.com/leochan2017/ekp-helper/blob/master/assets/screenshot1.png?raw=true)

![截图2](https://github.com/leochan2017/ekp-helper/blob/master/assets/screenshot2.png?raw=true)

![截图3](https://github.com/leochan2017/ekp-helper/blob/master/assets/screenshot3.png?raw=true)


## 更新历史
- 2018.07.03  v2.1.14
    - 调整 UI ，貌似这样更好看
    - 日期组件支持多选，现在能一次性提交多天重复的内容啦
- 2018.07.03  v2.1.6
    - 生成高仿山寨EKP的fdid
    - 优化拦截器的数据校验逻辑
    - 优化日期组件体验，增加快捷操作选中“昨天”，“今天”，“一周前”
- 2018.07.02  v2.1.2
    - 修复日期组件改变没有替换输入框值的bug
- 2018.06.25  v2.0.0
    - 介四里一腚没有用过的船新版本
    - 船新的UI
    - 船新的体验
    - 加载历史数据以列表呈现，选择其中一条，一键加载内容，高效提交

- 2018.05.14  v1.1.1
    - 调整插件配置，改正插件名字，防止以后每次更新不会覆盖之前一个的情况出现

- 2018.05.14  v1.1.0 版发布
    - 改用popup操作习惯
    - 新增快捷查看工时列表功能

- 2018.05.09  v1.0.0 版发布


## 反馈
[提交Issues](https://github.com/leochan2017/ekp-helper/issues/new)


## License
[MIT](http://opensource.org/licenses/MIT)
