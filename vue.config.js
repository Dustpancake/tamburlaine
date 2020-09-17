module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // n.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
