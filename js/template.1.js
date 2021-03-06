'use strict';
// 渲染模版
layui.use('laytpl', function() {
    var laytpl = layui.laytpl;
    var header_data = { //数据
        "title": "Layui常用模块",
        "list": [{ "modname": "弹层", "alias": "layer", "site": "layer.layui.com" }, { "modname": "表单", "alias": "form" }]
    }
    var footer_data = { //数据
        "title": "Layui常用模块",
        "list": [{ "modname": "弹层", "alias": "layer", "site": "layer.layui.com" }, { "modname": "表单", "alias": "form" }]
    }
    var header_ = header_el.innerHTML,
        footer_ = footer_el.innerHTML,
        header = document.getElementById('header'),
        footer = document.getElementById('footer');
    laytpl(header_).render(header_data, function(html) {
        header.innerHTML = html;
    });
    laytpl(footer_).render(footer_data, function(html) {
        footer.innerHTML = html;
    });

})


layui.use('element', function() {
    var element = layui.element;

    let localName = location.pathname;
    localName = localName.substr(localName.lastIndexOf("/") + 1);
    localName = localName.split(/\./)[0];
    $(`#${localName}`).addClass("layui-this");
    $(`#${localName}`).siblings().removeClass("layui-this");
    $(".header-nav-main li").click(function() {
        let turn_html = $(this).attr("id")
        window.location.href = `${turn_html}.html`;
    })


    element.tab({
        headerElem: '#tabHeader>li', //指定tab头元素项
        bodyElem: '#tabBody>li' //指定tab主体元素项
    });

    $(".main-content-top").click(function() {
        $(".main-content-more").addClass("show")
        $(".main-content-less").removeClass("show").addClass("hide")
    })

    $(".main-content-bottom-item").click(function() {
        $(".main-content-more").addClass("show")
        $(".main-content-less").removeClass("show").addClass("hide")
    })

    $(".main-content-pic-item").click(function() {
        $(".main-content-more").addClass("show")
        $(".main-content-less").removeClass("show").addClass("hide")
        $(".main-ad").removeClass("hide").addClass("show")
    })
});


layui.use('laypage', function() {
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
        elem: 'lay-page',
        count: 40,
        limit: 20,
        layout: ['count', 'prev', 'page', 'next']
    });
});