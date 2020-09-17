module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "prismjs", {
          "languages": [
            "javascript", 
            "css", 
            "markup", 
            "json", 
            "py",
            "c",
            "cpp",
            "bash",
            "erlang",
            "julia",
            "git",
            "cmake",
            "http",
            "yml"
          ],
          "plugins": ["line-numbers"],
          "css": true,
      }
    ]
  ]
}
