<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-13 13:10:16
 * @LastEditors: jiang.liu
 * @LastEditTime: 2020-10-14 10:25:51
-->
<script>
import Vue from "vue";
import IchinaVideo from "@/ichina-video.vue";
export default Vue.extend({
  name: "ServeDev",
  components: {
    IchinaVideo,
  },
  data() {
    return {
      videoOption: {
        size: 1, // 分频数  1 4
        // text: "admin", // 水印名字
        text: "admin", // 水印名字
        bigness:'small' // 视窗尺寸，默认正常大小
      },
      vmsOption: {
        ipcLinkInfo: {
          // serverIP: "http://192.168.1.61",
          serverIP: "172.25.104.2",
          serverPort: "8000",
        },
        vmslogin: {
          username: "admin",
          // password: "123456",
          password: "zdxf_1234",
        },
      },
    };
  },
  methods: {
    play() {
      // this.$refs.video.pushvideo("data[this.defaultProps.label]", "111");
      this.$refs.video.pushvideo("站前广场1", "52052762801326000049");
      // this.$refs.video.pushvideo("data[this.defaultProps.label]", "52052762801326000049");
    },
  },
});
</script>

<template>
  <div id="app">
     <el-button @click="play" type="primary">西安</el-button>
    <div class='videoWrap'>
    <ichina-video ref="video" :video-option="videoOption" :vmsOption="vmsOption" />

    </div>
  </div>
</template>
<style scoped>

.videoWrap{
  /* width: 100%;
  height: 90vh; */
  width: 150px;
  height: 136px;
}
</style>
