$(document).ready(function(){
    $("#project1").click(function(){
        layer_open('layer2');
        $('.projectList').bxSlider();
        $('.project1').load("assets/projects/project1.html");
        return false;
    });
    
    
    
    
    $(".custom-open-table").click(function(){
        if($("#profile").css("display")!="none"){
            $("#profile").fadeOut("slow");
            $(this).find(".fa-hand-o-right").removeClass("fa-hand-o-right").addClass("fa-hand-o-down"); 
        } else {
            $("#profile").fadeIn("slow");
            $(this).find(".fa-hand-o-down").removeClass("fa-hand-o-down").addClass("fa-hand-o-right");  
        }
    });
    
    $(".custom-open-timeline").click(function(){
        if($("#timeline").css("display")!="none"){
            $("#timeline").fadeOut("fast");
            $(this).find(".fa-hand-o-right").removeClass("fa-hand-o-right").addClass("fa-hand-o-down");    
        } else {
            $("#timeline").fadeIn("fast");
            $(this).find(".fa-hand-o-down").removeClass("fa-hand-o-down").addClass("fa-hand-o-right");  
        }
    });
    
    $(".tl-section").click(function(){
        var index = $(this).attr("class").substr(11, 1);
        if($(".tl-items."+index).css("display")=="none"){
            $(".tl-items."+index).show("fast");
            $(this).find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        } else {
            $(".tl-items."+index).hide("fast");
            $(this).find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });
});
