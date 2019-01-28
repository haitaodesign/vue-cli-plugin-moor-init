/*
 * @Author: lihaitao 
 * @Date: 2018-12-28 11:55:30 
 * @Last Modified by: lihaitao
 * @Last Modified time: 2019-01-28 17:36:53
 */
 /**
  * @param  {} api @vue/cli-service暴露的接口
  * @param  {} path 需要渲染的文件或文件路径
  */
 export const render = (api, path) => {
  api.render(path, {}, {
    // 修改ejs模板变量分隔符，避免与vue项目的模板冲突
    delimiter: '$'
  })
 }