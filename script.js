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
