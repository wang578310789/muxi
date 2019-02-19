
$(function(){
    const pages =["common-html/shouye.html","common-html/gongshi.html","common-html/ps.html","common-html/jiameng.html","common-html/lianxi.html"];
    $("#main").load(pages[0]);
    // console.log(1);
    $("#lianjie li").click(function(){
        console.log($(this).index());
        $(this).addClass("nav-one").siblings().removeClass("nav-one");
        $("#main").load(pages[$(this).index()]);
    })
    // $("#changepage div").click(function(){
    //     $(" #head .conainer .collapse li").eq($(this).index()+1).addClass("nav-one").siblings().removeClass("nav-one");
    //     $("main").load(pages[$(this).index()+1]);
    // });
})
