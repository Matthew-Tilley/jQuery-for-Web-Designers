$(function()
{
    
    $("#TESTER").on("click", function()
    {
        console.log("FIRST LINK ", $("a:first").attr("href"));
        
        $("a:first").attr("href", "https://www.yahoo.com");
        
        console.log("CHANGED LINK", $("a:first").attr("href"));

    });
  
    
});