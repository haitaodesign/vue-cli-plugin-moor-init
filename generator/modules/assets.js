module.exports = (api) => {
  api.render({
    './src/assets/images/logo.png': './templates/default/src/assets/images/logo.png',
    './src/assets/styles/common.styl': './src/assets/styles/common.styl',
    './src/assets/styles/variables.styl': './src/assets/styles/variables.styl'
  })
}