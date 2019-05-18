module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: "http://spoon:8000/"
  }
};
