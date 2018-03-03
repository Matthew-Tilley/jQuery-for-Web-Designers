$(function()
{
 
    $(".BOX-T-01").on("click", function()
    {
        $(this).fadeOut();
    });
    
    
    $("#BUT01").on("click", function()
    {
        $(".SEC-T-01").animate({ "margin-left" : 50 });
    });
    
    
    
});