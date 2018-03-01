$(function()
{
    
    $("#TESTER").hover(BLURP);
    $("#TESTER").mouseout(FLURP);
    
    
    function BLURP()
    {
        $(this).css("background-color", "yellow");
    };
    
    
    function FLURP()
    {
        $(this).css("background-color", "white");
    };
    
    
    
});