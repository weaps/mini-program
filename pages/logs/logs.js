//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [1,2,3,4,5]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
