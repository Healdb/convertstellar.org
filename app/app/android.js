if (window.innerWidth && window.innerWidth <= 600) { 
    $(document).ready(function(){
        $('#header ul').addClass('hide'); 
        $('#header').append('<div class="leftButton"><a href="about.html" style="color: #FFFFFF; text-decoration: none;">Menu</a></div>');
    }); 
    function toggleMenu() {
        $('#header ul').toggleClass('hide'); 
        $('#header .leftButton').toggleClass('pressed');
    }
}
