$(window).scroll(function(){

    let aboutscroll = $("#nav-bar").scrollTop() ;
    let aboutoffset = $("#about").offset().top ;

    if(aboutscroll>aboutoffset)
    {
        $("#nav-bar").css("backgroundColor" , "red")
    }




} ) ;

