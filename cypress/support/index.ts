
module.exports = () => {
  const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
  module.exports = (on: any, config: any) => {
    on('task', {downloadFile})
  }
}


