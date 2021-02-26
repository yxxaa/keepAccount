// pages/index/index.js
const app = getApp()
Page({
    data: {
        active: 0,
        avatarUrl: '',
        nickName: ''
    },
    onLoad() {
        let that = this;
        wx.getUserInfo({
            success: function (res) {
                console.log(res);
                that.setData({
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                })
            }
        })
    },
    // onGetOpenid() {
    //     // 调用云函数
    //     wx.cloud.callFunction({
    //         name: 'login',
    //         data: {},
    //         success: res => {
    //             console.log('[云函数] [login] user openid: ', res.result)
    //             app.globalData.openid = res.result.openid
    //             // wx.navigateTo({
    //             //     url: '../home/home',
    //             // })
    //         },
    //         fail: err => {
    //             console.error('[云函数] [login] 调用失败', err)
    //         }
    //     })
    // },
})