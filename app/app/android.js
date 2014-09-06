$(document).ready(function(){
        $('#header').append('<div class="leftButton"><a href="navigate.html" style="color: #FFFFFF; text-decoration: none;">Menu</a></div>');
    }); 
    function toggleMenu() {
        $('#header ul').toggleClass('hide'); 
        $('#header .leftButton').toggleClass('pressed');
    }
