$(function()
{
    
    $("#TESTER").mouseover(BONK);
    $("#TESTER").mouseleave(BING);
    
    
    function BONK()
    {
        $(this).css("background-color", "purple");
    };
    
    
    function BING()
    {
        $(this).css("background-color", "white");
    };
    
    
});