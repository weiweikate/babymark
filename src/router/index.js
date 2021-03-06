import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import userCenter from '../components/page/usercenter/userCenter'
import index from '../components/page/index.vue'
import shoppingCare from '../components/page/shoppingCare.vue'
import topic from '../components/page/topic.vue'
import prdDetail from '../components/page/product/prdDetail.vue'
import search from '../components/page/search.vue'
import prdMore from '../components/page/product/prdMore.vue'
import confirmOrder from '../components/page/order/confirmOrder.vue'
import payment from '../components/page/pay/confirmPayment.vue'
import paymentResult from '../components/page/pay/paymentSuccess.vue'
import orderDetail from '../components/page/order/orderDetail.vue'
import orderLogistics from '../components/page/order/orderLogistics.vue'
import userOrders from '../components/page/order/userOrders.vue'
import receivingAddress from '../components/page/adress/receivingAddress.vue'
import newReceivingAddress from '../components/page/adress/newReceivingAddress.vue'
import subjectAspx from '../components/page/web/subjectAspx.vue'
import coupons from '../components/page/usercenter/coupons.vue'
import userAssets from '../components/page/usercenter/userAssets.vue'
import userReward from '../components/page/usercenter/userReward.vue'
import userFavorite from '../components/page/usercenter/userFavorite.vue'
import userFeedback from '../components/page/usercenter/userFeedback.vue'
import savedAmount from '../components/page/usercenter/savedAmount.vue'
import resetPassword from '../components/page/password/resetPassword.vue'
import register from '../components/page/register/register.vue'
import registerStep2 from '../components/page/register/registerStep2.vue'
import registerStep3 from '../components/page/register/registerStep3.vue'
import registerStep4 from '../components/page/register/registerStep4.vue'
import tests from '../components/base/test.vue'
let router = new VueRouter({
  routes: [
    { path: '/tests', name:'tests', component: tests},// 首页
    { path: '/', redirect: '/index',meta: { keepAlive: true } },// 首页
    { path: '/index', name:'index', component: index,meta: { keepAlive: true } },// 首页
    { path: '/shoppingCare', name:'shoppingCare', component: shoppingCare, meta: {requireAuth: true} }, // 购物车
    { path: '/topic', name:'topic', component: topic,meta: { keepAlive: true } }, // 专题页
    { path: '/userCenter', name:'userCenter', component: userCenter,meta: { keepAlive: true }}, // 我的
    { path: '/prdDetail', name:'prdDetail',component: prdDetail }, // 产品详情页
    { path: '/confirmOrder', name:'confirmOrder',component: confirmOrder }, // 订单确认页面
    { path: '/payment', name:'payment',component: payment }, // 支付页面
    { path: '/paymentResult', name:'paymentResult',component: paymentResult }, // 支付成功页面
    { path: '/search', name:'search', component: search }, //查询页面
    { path: '/prdMore', name:'prdMore', component: prdMore, meta: { keepAlive: false } }, // 更多产品页面
    { path: '/receivingAddress', name:'receivingAddress',component: receivingAddress, meta: {requireAuth: true}}, // 收货地址页面
    { path: '/newReceivingAddress', name:'newReceivingAddress',component: newReceivingAddress, meta: {requireAuth: true} },// 新建收货地址
    { path: '/orderDetail', name:'orderDetail',component: orderDetail, meta: {requireAuth: true}  }, // 订单详情页
    { path: '/userOrders', name:'userOrders',component: userOrders,meta: { keepAlive: true,requireAuth: true }}, // 我的订单
    { path: '/orderLogistics', name:'orderLogistics',component: orderLogistics }, // 订单物流查询页面
    { path: '/coupons', name:'coupons',component: coupons, meta: {requireAuth: true}}, // 优惠卷页面
    { path: '/userAssets', name:'userAssets',component: userAssets, meta: {requireAuth: true}}, // 我的资产
    { path: '/userReward', name:'userReward',component: userReward, meta: {requireAuth: true}}, // 我的奖励
    { path: '/userFavorite', name:'userFavorite',component: userFavorite, meta: {requireAuth: true}}, // 我的收藏
    { path: '/savedAmount', name:'savedAmount',component: savedAmount, meta: {requireAuth: true}}, // 已省金额
    { path: '/userFeedback', name:'userFeedback',component: userFeedback}, // 意见与反馈
    { path: '/resetPassword', name:'resetPassword',component: resetPassword }, //  修改密码
    { path: '/register', name:'register',component: register }, //  注册页面
    { path: '/registerStep2', name:'registerStep2',component: registerStep2}, //  注册页面
    { path: '/registerStep3', name:'registerStep3',component: registerStep3 }, //  注册页面
    { path: '/registerStep4',name:'registerStep4',component: registerStep4 }, //  注册页面
    { path: '/subjectAspx', name:'subjectAspx',component: subjectAspx } // subject.aspx
  ]
})

export default router
