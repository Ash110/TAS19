$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".scroll_for_baral").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".content_title").offset().top
        }, 1000);
    });
    $('input.autocomplete').autocomplete({
        data: {
            "Science Expo": null,
            "Bot 'N' Brawl": null,
            "CodeWars":null,
            "The Inquisitors Trials":null,
            "Quizzards of Oz":null,
            "Treasure Island":null,
            "Eclipse - Shadow Art":null,
            "Junkyard Showdown":null,
            "The Enigma":null,
            "Scotland Yard":null,
            "Shark Tank":null,
            "IntelliSense":null,
            "Workshop":null,
            "Mini Certification":null,
        },
        onAutocomplete(id){
            window.location.href=events[id];
        }
    });
    events = {

        "Science Expo": "./EventPages/ScienceExpo.html",
        "Bot 'N' Brawl": "./EventPages/BotNBrawl.html",
        "CodeWars": "./EventPages/CodeWars.html",
        "The Inquisitors Trials": "./EventPages/InquisitorsTrial.html",
        "Quizzards of Oz": "./EventPages/QuizzardsofOz.html",
        "Treasure Island": "./EventPages/TreasureIsland.html",
        "Eclipse - Shadow Art": "./EventPages/Eclipse.html",
        "Junkyard Showdown": "./EventPages/Junkyard.html",
        "The Enigma": "./EventPages/Enigma.html",
        "Scotland Yard": "./EventPages/ScotlandYard.html",
        "Shark Tank": "./EventPages/SharkTank.html",
        "IntelliSense": "./EventPages/IntelliSense.html",
        "Workshop": "./EventPages/Workshop.html",
        "Mini Certification": "./EventPages/MiniCertification.html",
    }
});