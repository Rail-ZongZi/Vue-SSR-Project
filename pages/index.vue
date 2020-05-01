<template>
  <div class="container">
    <div>
      <h1 class="title">
        mt-nuxt
      </h1>
      <h2 class="subtitle">
        My first-class Nuxt.js project
      </h2>
      <div class="links">{{ message }}</div>
    </div>
    <div class="block">
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <el-input placeholder="请输入内容"></el-input>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain @click="BtnCli">点击按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'nuxt.js 测试案例',
      color1: 'red',
      value: true,
      drawer: false
    }
  },
  methods: {
    BtnCli(event) {
      console.log('Hello ' + event + '成功打印!')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
