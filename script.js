alert("Hey there! Welcome to my website!");
function openYoutube() { 
    window.open("https://youtube.com", "_blank");
}
function openInstagram() { 
    window.open("https://instagram.com", "_blank");
}
function openFacebook() { 
    window.open("https://facebook.com", "_blank");
}
function openPinterest() { 
    window.open("https://pinterest.com", "_blank");
}
function openQuran() { 
    window.open("https://quran.com", "_blank");
}
function openNealFun() { 
    window.open("https://neal.fun", "_blank");
}
function openPokiGames() { 
    window.open("https://poki.com", "_blank");
}
function openGoogle() { 
    window.open("https://google.com", "_blank");
}
function openTheUselessWebsite() { 
    window.open("https://theuselessweb.com", "_blank");
}
function openMiddleHost() {
    window.open("https://middlehost.com", "_blank");
}
function openBored() { 
    window.open("https://bored.com", "_blank");
}
function updateClock() {
    let now = new Date();
     let  clock =document.getElementById("clock");
      if (clock) {
          clock.innerHTML = "🕖" + now.toLocaleTimeString();
       } }
    setInterval(updateClock, 1000);
    updateClock();
    function searchWebsites() {
        let input = document.getElementById("search");
        let filter = input.value.toUpperCase();
        let buttons = document.getElementsByClassName("websiteButton");
        for (let i = 0; i < buttons.length; i++) {
            let text = buttons[i].innerHTML ;
            if (text.toUpperCase().indexOf(filter) > -1) {
                buttons[i].style.display = "inline-block";} 
                else { buttons[i].style.display = "none";}}}
                    let topButton = document.getElementById("topBtn");
                    window.onscroll = function() {
                        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {  
                            topButton.style.display = "block";
                        } else {
                            topButton.style.display = "none";
                        }
                    }
                    function topFunction() {
                        window.scrollTo({ top: 0,
                             behavior: 'smooth' });}
                             function goToWebsite() {
                                let choice=document.querySelector('input[name="purpose"]:checked');
                                if ( !choice) {
                                    alert("Please select an option first.");
                                    return;
                                } if (choice.value === "study") {
                                    window.location.href = "study.html";
                                } else if (choice.value === "work") {
                                    window.location.href = "work.html";
                                } else if (choice.value === "bored") {
                                    window.location.href = "bored.html";
                                } else if (choice.value === "islamic") {
                                    window.location.href = "islamic.html";
                                }}
                        function openChatGPT() {
                            window.open("https://chat.openai.com", "_blank");
                        }
                        function openGemini() {
                            window.open("https://gemini.com", "_blank");
                        }
                        function openClaude() {
                            window.open("https://claude.ai", "_blank");
                        }
                        function openCopilot() {
                            window.open("https://copilot.microsoft.com", "_blank");
                        }
                        function openPerplexity() {
                            window.open("https://perplexity.ai", "_blank");
                        }
                        function openDeepseek() {
                            window.open("https://deepseek.com", "_blank");
                        }
                        function openPoe() {
                            window.open("https://poe.com", "_blank");
                        }
                        function openNotebookLM() {
                            window.open("https://notebooklm.google.com", "_blank");
                        }
                        function openCanvaAI() {
                            window.open("https://canva.com/ai", "_blank");
                        }
                        function openBlackbox() {
                            window.open("https://blackbox.ai", "_blank");
                        }
                        function openW3Schools() {
                            window.open("https://www.w3schools.com", "_blank");
                        }
                        function openKhanAcademy() {
                            window.open("https://www.khanacademy.org", "_blank");
                        }
                        function openDuolingo() {
                            window.open("https://www.duolingo.com", "_blank");
                        }
                        function openCoursera() {
                            window.open("https://www.coursera.org", "_blank");
                        }
                        function openUdemy() {
                            window.open("https://www.udemy.com", "_blank");
                        }
                        function openEdX() {
                            window.open("https://www.edx.org", "_blank");
                        }
                        function openCodecademy() {
                            window.open("https://www.codecademy.com", "_blank");
                        }
                        function openFreeCodeCamp() {
                            window.open("https://www.freecodecamp.org", "_blank");
                        }
                        function openGeeksForGeeks() {
                           window.open("https://www.geeksforgeeks.org", "_blank");
                        }
                        function openBrilliant(){
                            window.open("https://brilliant.org", "_blank")
                        }
                        function openGrammarly() {
                            window.open("https://www.grammarly.com", "_blank");
                        }
                        function openGoogleDocs() {
                            window.open("https://docs.google.com", "_blank");
                        }
                       function openQuillBot() {
                           window.open("https://quillbot.com", "_blank");
                        }
                        function openNotion() {
                           window.open("https://www.notion.so", "_blank");
                        }
                        function openMicrosoftWord() {
                           window.open("https://www.office.com", "_blank");
                        }
                        function openHemingway() {
                          window.open("https://hemingwayapp.com", "_blank");
                        }
                        function openLanguageTool() {
                          window.open("https://languagetool.org", "_blank");
                        }
                        function openCanvaDocs() {
                          window.open("https://www.canva.com/docs", "_blank");
                        }
                        function openTinyWow() {
                          window.open("https://tinywow.com", "_blank");
                        }
                        function openDeepLWrite() {
                          window.open("https://www.deepl.com/write", "_blank");
                        }
                        function searchStudy() {

                let input = document.getElementById("search");
                let filter = input.value.toUpperCase();

    let buttons = document.getElementsByClassName("studyButton");

    for (let i = 0; i < buttons.length; i++) {

        let text = buttons[i].innerText;

        if (text.toUpperCase().indexOf(filter) > -1) {

            buttons[i].style.display = "inline-block";

        } else {

            buttons[i].style.display = "none";

        }
    }
}
                        function openGmail() {
    window.open("https://mail.google.com", "_blank");
}

function openOutlook() {
    window.open("https://outlook.live.com", "_blank");
}

function openZoom() {
    window.open("https://zoom.us", "_blank");
}

function openGoogleMeet() {
    window.open("https://meet.google.com", "_blank");
}

function openTeams() {
    window.open("https://teams.microsoft.com", "_blank");
}

function openSlack() {
    window.open("https://slack.com", "_blank");
}

function openDiscord() {
    window.open("https://discord.com/app", "_blank");
}

function openWhatsAppWeb() {
    window.open("https://web.whatsapp.com", "_blank");
}

function openTelegramWeb() {
    window.open("https://web.telegram.org", "_blank");
}

function openSkype() {
    window.open("https://web.skype.com", "_blank");
}
function openGoogleSheets() {
    window.open("https://docs.google.com/spreadsheets", "_blank");
}

function openGoogleSlides() {
    window.open("https://docs.google.com/presentation", "_blank");
}

function openMicrosoftExcel() {
    window.open("https://www.office.com/launch/excel", "_blank");
}

function openMicrosoftPowerPoint() {
    window.open("https://www.office.com/launch/powerpoint", "_blank");
}

function openCanva() {
    window.open("https://www.canva.com", "_blank");
}

function openAdobeExpress() {
    window.open("https://www.adobe.com/express", "_blank");
}

function openDropbox() {
    window.open("https://www.dropbox.com", "_blank");
}
function openGoogleDrive() {
    window.open("https://drive.google.com", "_blank");
}

function openOneDrive() {
    window.open("https://onedrive.live.com", "_blank");
}

function openGoogleCalendar() {
    window.open("https://calendar.google.com", "_blank");
}

function openGoogleKeep() {
    window.open("https://keep.google.com", "_blank");
}

function openTodoist() {
    window.open("https://todoist.com", "_blank");
}

function openTrello() {
    window.open("https://trello.com", "_blank");
}

function openAsana() {
    window.open("https://asana.com", "_blank");
}

function openClickUp() {
    window.open("https://clickup.com", "_blank");
}

function openEvernote() {
    window.open("https://evernote.com", "_blank");
}
function searchWork() {
    let input=document.getElementById("search");
    let filter=input.value.toUpperCase();
    let buttons=document.getElementsByClassName("workButton");
       for(let i=0; i< buttons.length; i++){
        let text = buttons[i].innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {

            buttons[i].style.display = "inline-block";

        } else {

            buttons[i].style.display = "none";

        }

    }

}
       function openTikTok() {
    window.open("https://www.tiktok.com", "_blank");
}

function openX() {
    window.open("https://x.com", "_blank");
}

function openReddit() {
    window.open("https://www.reddit.com", "_blank");
}

function openSnapchat() {
    window.open("https://web.snapchat.com", "_blank");
}

function openThreads() {
    window.open("https://www.threads.net", "_blank");
}
function openShellShockers() {
    window.open("https://shellshock.io", "_blank");
}

function openKrunker() {
    window.open("https://krunker.io", "_blank");
}

function openSlope() {
    window.open("https://slopegame.com", "_blank");
}

function open2048() {
    window.open("https://play2048.co", "_blank");
}

function openChess() {
    window.open("https://www.chess.com/play", "_blank");
}

function openWordle() {
    window.open("https://www.nytimes.com/games/wordle/index.html", "_blank");
}

function openLittleAlchemy() {
    window.open("https://littlealchemy2.com", "_blank");
}

function openQuickDraw() {
    window.open("https://quickdraw.withgoogle.com", "_blank");
}

function openGeoGuessr() {
    window.open("https://www.geoguessr.com", "_blank");
}

function openSudoku() {
    window.open("https://sudoku.com", "_blank");
}
function searchBored() {

    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();

    let buttons = document.getElementsByClassName("boredButton");

    for (let i = 0; i < buttons.length; i++) {

        let text = buttons[i].innerText;

        if (text.toUpperCase().indexOf(filter) > -1) {

            buttons[i].style.display = "inline-block";

        } else {

            buttons[i].style.display = "none";

        }

    }

}
function playSong(songFile, songName) {

    let player = document.getElementById("audioPlayer");

    player.pause();

    player.src = songFile;

    player.load();

    player.play();

    document.getElementById("songTitle").innerHTML =
        "🎧 Now Playing: " + songName;

}