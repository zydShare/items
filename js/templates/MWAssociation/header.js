function isIE() {
    if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
      console.log("1");
      document.write('<link rel="stylesheet" href="../../style/pc/IE8.css">');
      return true;
    } else {
      console.log("2");
      document.write('<link rel="stylesheet" href="../../style/pc/flex.css">');
      document.write('<link rel="stylesheet" href="../../style/pc/style.css">');
      return false;
    }
  }
  isIE();
document.write('<div id="header"><div class="header-content flex-hb-vc"> <div class="logo flex-hc-vc"> <img src="../../images/templates/MWAssociation/logo.png" alt=""> </div>' +
    '<div class="header-nav layui-tab layui-tab-card flex-hc-vc"> <ul class="header-nav-main layui-tab-title flex-hc-vc"> ' +
    '<li id="index">首  页</li> ' +
    '<li id="associationAbout">协会概况</li> ' +
    '<li id="newsCenter">新闻中心</li>' +
    '<li id="industryStandard">行业标准</li> ' +
    '<li id="memberCenter">会员中心</li>' +
    '<li id="contactUs">联系我们</li> </ul> </div> <div class="search flex-hc-vc"> <input type="text" placeholder="中/EN/藏"> <button>分享</button> </div> </div></div>')

