---
title: Dynmap
icon: https://npucraft-lsky-1304448012.cos.ap-chengdu.myqcloud.com/2025/03/21/67dcfaab77d93.png
author: SUPER2FH
category:
  - BasePlugin
tag: 
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---



::: info 完整文档请查阅[Dynmap](https://github.com/webbukkit/dynmap/wiki/Commands)
:::



Dynmap 是一款类似于 Google Maps 的地图，可在浏览器中查看实时服务器地图。目前已搭载在[生存服-主服](https://map.npucraft.com/dynmap)、[生存服-工业服](https://map.npucraft.com/dynmap-industry)和[生存服-资源服](https://map.npucraft.com/dynmap-resource)



### **一、标记管理指令表**

| **指令格式**                                                 | **功能描述**                                             |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| `/dmarker add <标签> icon:<图标> set:<集合ID>`               | 在玩家当前位置添加新标记，支持自定义标签、图标和所属集合 |
| `/dmarker add id:<ID> <标签> icon:<图标> set:<集合ID>`       | 在玩家当前位置添加带有指定ID的标记                       |
| `/dmarker add id:<ID> <标签> icon:<图标> set:<集合ID> x:<X坐标> y:<Y坐标> z:<Z坐标> world:<世界名>` | 在指定坐标和世界添加新标记                               |
| `/dmarker movehere <标签>`                                   | 将首个匹配标签的标记移动到玩家当前位置                   |
| `/dmarker movehere id:<ID>`                                  | 将指定ID的标记移动到玩家当前位置                         |
| `/dmarker update <标签> icon:<新图标> newlabel:<新标签>`     | 更新首个匹配标签的标记属性（图标/标签）                  |
| `/dmarker update id:<ID> icon:<新图标> newlabel:<新标签>`    | 更新指定ID的标记属性                                     |
| `/dmarker delete <标签>`                                     | 删除首个匹配标签的标记                                   |
| `/dmarker delete id:<ID>`                                    | 删除指定ID的标记                                         |
| `/dmarker list`                                              | 列出默认标记集合中的所有标记                             |
| `/dmarker list set:<集合ID>`                                 | 列出指定标记集合中的所有标记                             |



### **二、标记集合管理**

| **指令格式**                                                 | **功能描述**                     |
| ------------------------------------------------------------ | -------------------------------- |
| `/dmarker addset <标签> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>` | 创建新标记集合（ID自动设为标签） |
| `/dmarker addset id:<ID> <标签> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>` | 创建带有指定ID的标记集合         |
| `/dmarker updateset <标签> newlabel:<新标签> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>` | 更新标记集合属性（使用标签匹配） |
| `/dmarker updateset id:<ID> newlabel:<新标签> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>` | 更新指定ID的标记集合             |
| `/dmarker deleteset <标签>`                                  | 删除指定标签的标记集合           |
| `/dmarker deleteset id:<ID>`                                 | 删除指定ID的标记集合             |
| `/dmarker listsets`                                          | 列出所有标记集合                 |



### **三、图标管理**

| **指令格式**                                                 | **功能描述**                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| `/dmarker addicon id:<ID> <标签> file:"文件名"`              | 安装新图标（文件路径相对于MC服务器目录）**请联系SUPER2FH** |
| `/dmarker updateicon id:<ID> newlabel:<新标签> file:"文件名"` | 更新现有图标属性                                           |
| `/dmarker deleteicon id:<ID>`                                | 删除指定ID的图标                                           |
| `/dmarker icons`                                             | 列出所有可用图标                                           |



### **四、区域/图形操作**

| **指令格式**                                               | **功能描述**                                 |
| ---------------------------------------------------------- | -------------------------------------------- |
| `/dmarker addcorner`                                       | 将当前位置添加为拐点                         |
| `/dmarker addcorner <x> <y> <z> <世界>`                    | 添加指定坐标拐点                             |
| `/dmarker clearcorners`                                    | 清空当前拐点列表                             |
| `/dmarker addarea <标签>`                                  | 用当前拐点列表创建区域                       |
| `/dmarker addarea id:<ID> <标签>`                          | 用拐点列表创建指定ID的区域                   |
| `/dmarker addcircle <标签>`                                | 用拐点列表创建圆形（前两个拐点为圆心和半径） |
| `/dmarker addline <标签>`                                  | 用拐点列表创建线条                           |
| `/dmarker appenddesc id:<ID> set:<集合ID> desc:"描述内容"` | 为标记追加描述文本                           |
| `/dmarker resetdesc id:<ID> set:<集合ID>`                  | 重置标记描述                                 |



### **五、通用操作指令**

| **指令格式**                                  | **功能描述**               |
| --------------------------------------------- | -------------------------- |
| `/dmarker listareas`                          | 列出所有区域               |
| `/dmarker listcircles`                        | 列出所有圆形               |
| `/dmarker listlines`                          | 列出所有线条               |
| `/dmarker updatearea <标签/ID> <参数>:<值>`   | 更新区域属性（支持多参数） |
| `/dmarker updatecircle <标签/ID> <参数>:<值>` | 更新圆形属性               |
| `/dmarker updateline <标签/ID> <参数>:<值>`   | 更新线条属性               |

