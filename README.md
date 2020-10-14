# 本插件仅用于赫章数据网，已经做了视频服务器ip映射。

# ichinae-video-hz

## install

```bash
npm install ichinae-video-hz
```

## demo

```bash
npm run serve
```

## use

```bash
import ichinaVideoHz from 'ichinae-video-hz'
...
...
  components: {
    ichinaVideoHz
  }
...

//务必指定包裹父容器
<div class="videbox">
    <ichina-video-hz ref="video" :video-option="videoOption" :vms-option="vmsOption" />
 </div>

 .videbox{
     width: 100vh;
     height: 100vh;
 }
```

## props

```bash
data() {
    return {
        videoOption: {
            size: 4, // 分频数  1 4
            text: 'admin', // 水印名字
            disabledDb: true, // 禁用双击
            bigness:'small' //适配较小视频视窗，默认正常大小，不用添加此参数
        },
        vmsOption: {
            ipcLinkInfo: {
                serverIP: 'http://192.168.1.61',
                serverPort: '8000'
            },
            vmslogin: {
                username: 'admin',
                password: '123456'
            }
        }
    }
}
```

#### videoOption

| 参数       | 释义             | 取值      | 默认值 | 是否必须 |
| ---------- | ---------------- | --------- | ------ | -------- |
| size       | 分屏数           | 1/4/6/8/9 |        | true     |
| text       | 水印             | string    | ''     | false    |
| disabledDb | 是否禁用双击事件 | Boolean   | false  | false    |

#### vmsOption

##### ipcLinkInfo

| 参数       | 释义         | 取值   | 默认值 | 是否必须 |
| ---------- | ------------ | ------ | ------ | -------- |
| serverIP   | vms 部署地址 | string |        | true     |
| serverPort | 端口         | string | 8000   | true     |

##### vmslogin

| 参数     | 释义         | 取值   | 默认值 | 是否必须 |
| -------- | ------------ | ------ | ------ | -------- |
| username | vms 登录信息 | string |        | true     | true |
| password | vms 登录信息 | string |        | true     | true |

## events

```
pushvideo(name, id, isReolay, replayTime)
// ex
this.$refs.video.pushvideo("ichinae", "111");
```

| 参数       | 释义             | 取值    | 是否必须 |
| ---------- | ---------------- | ------- | -------- |
| name       | 相机名字         | string  | true     |
| id         | 相机 id          | number  | true     |
| isReolay   | 是否默认展示回放 | boolean | false    |
| replayTime | 回放时间         | 时间戳  | false    |

## 视频操作方法
- 4/8/9 分屏双击变一屏，再次双击恢复
- 一屏时出现全屏按钮