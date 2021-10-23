export default ({ app: { router }, store }) => {
  // 每次路由变更时进行 pv 统计
  router.afterEach((to, from) => {
    // 告诉增加一个 PV
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {
    }
  })
}
