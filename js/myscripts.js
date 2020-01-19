document.getElementById('english-btn').click(function(){
    console.log("trigger function");
    var today = new Date();
    var oneYear = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);
    var url = window.location.href;
    document.cookie = "lcid=" + value + ";path=/;expires=" + oneYear.toGMTString();
    window.location.href = url;
});
 


// <a href="javascript:OnSelectionChange(1031)">./svgs/united-kingdom-lang.svg</a>
// <a href="javascript:OnSelectionChange(1033)">./svgs/germany-lang.svg"</a>