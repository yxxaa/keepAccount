// pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
Page({
    data: {
        active: 0,
        avatarUrl: '',
        nickName: '',
        myPaylist: [
            {
                'datatime':'03月02日',
                'total':'29',
                'list':[
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'},
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'}]
            },
            {
                'datatime':'03月02日',
                'total':'29',
                'list':[
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'},
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'}]
            },
            {
                'datatime':'03月02日',
                'total':'29',
                'list':[
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'},
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'}]
            },
            {
                'datatime':'03月02日',
                'total':'29',
                'list':[
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'},
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'}]
            },
            {
                'datatime':'03月02日',
                'total':'29',
                'list':[
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'},
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'}]
            },
            {
                'datatime':'03月02日',
                'total':'29',
                'list':[
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'},
                    {'avatarUrl':'/images/console-entrance.png','content':'吃饭','money':'333.0'}]
            },


        ],
        myPay:[],
        show: false,
        value: '',
        money: '',
        tradeName: '',
        test: '',
        test2:''
    },
    onLoad() {
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
                console.log('[云函数] [login] user openid: ', res.result);
                app.globalData.openid = res.result.openid;
                this.getMyPay(res.result.openid);
            },
            fail: err => {
                console.error('[云函数] [login] 调用失败', err);
            }
        })
    },
    getMyPay(openid) {
        let that = this;
        db.collection('pay').where({
                _openid: openid,
            })
            .get({
                success: function (res) {
                    console.log(res.data)
                    that.setData({
                        myPay: res.data
                    })
                }
            })
    },
    getUserInfo() {
        let that = this;
        console.log(that.data.value)
        console.log(that.data.test)
        console.log(that.data.test2)
        // db.collection('pay').add({
        //     // data 字段表示需新增的 JSON 数据
        //     data: {
        //         expenditure: Number(that.data.money),
        //         goods: that.data.goods,
        //     },
        //     success: function (res) {
        //         // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        //         console.log(res)
        //     },
        //     fail: function (res) {
        //         console.log(res)
        //     }
        // })
    },

    onClose() {
        // this.setData({
        //     show: false,
        //     money: '',
        //     tradeName: '',
        // });
    },
    showFrom() {
        this.setData({
            show: true
        })
    }
})