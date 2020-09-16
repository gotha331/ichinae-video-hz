<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-13 13:10:16
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-08-13 15:03:40
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
        text: "admin", // 水印名字
      },
      vmsOption: {
        ipcLinkInfo: {
          serverIP: "http://192.168.1.61",
          serverPort: "8000",
        },
        vmslogin: {
          username: "admin",
          password: "123456",
        },
      },
    };
  },
  methods: {
    play() {
      this.$refs.video.pushvideo("data[this.defaultProps.label]", "111");
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
  width: 100%;
  height: 90vh;
}
</style>
