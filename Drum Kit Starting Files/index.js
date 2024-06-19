
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var c=this.innerHTML;
        Sound(c);
        addbutton(c);
        
    
       
    });
}
document.addEventListener("keypress",function(event){
    Sound(event.key);
    addbutton(event.key);
})
    function Sound(key){
        switch (key) {
            case "w":
                var a=new Audio("sounds/tom-1.mp3");
                a.play();
                break;
            case "a":
                var a=new Audio("sounds/tom-2.mp3");
                a.play();
                break;
            case "s":
                var a=new Audio("sounds/tom-3.mp3");
                a.play();
                break;
            case "d":
                var a=new Audio("sounds/tom-4.mp3");
                a.play();
                break;
            case "j":
                var a=new Audio("sounds/snare.mp3");
                a.play();
                break;
            case "k":
                var a=new Audio("sounds/crash.mp3");
                a.play();
                break;
        
            default:
                
                var a=new Audio("sounds/kick-bass.mp3");
                a.play();
                break;
        }
    }
    function addbutton(akey){
        var ab=document.querySelector("."+akey);
        ab.classList.add("pressed");
        setTimeout(function(){
            ab.classList.remove("pressed");

        },100);
        
    }
    function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
        if (localStorageTheme !== null) {
          return localStorageTheme;
        }
      
        if (systemSettingDark.matches) {
          return "dark";
        }
      
        return "light";
      }
      
      /**
      * Utility function to update the button text and aria-label.
      */
      function updateButton({ buttonEl, isDark }) {
        const newCta = isDark ? "Change to light theme" : "Change to dark theme";
        // use an aria-label if you are omitting text on the button
        // and using a sun/moon icon, for example
        buttonEl.setAttribute("aria-label", newCta);
        buttonEl.innerText = newCta;
      }
      
      /**
      * Utility function to update the theme setting on the html tag
      */
      function updateThemeOnHtmlEl({ theme }) {
        document.querySelector("html").setAttribute("data-theme", theme);
      }
      
      
      /**
      * On page load:
      */
      
      /**
      * 1. Grab what we need from the DOM and system settings on page load
      */
      const button = document.querySelector("[data-theme-toggle]");
      const localStorageTheme = localStorage.getItem("theme");
      const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
      
      /**
      * 2. Work out the current site settings
      */
      let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
      
      /**
      * 3. Update the theme setting and button text accoridng to current settings
      */
      updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
      updateThemeOnHtmlEl({ theme: currentThemeSetting });
      
      /**
      * 4. Add an event listener to toggle the theme
      */
      button.addEventListener("click", (event) => {
        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
      
        localStorage.setItem("theme", newTheme);
        updateButton({ buttonEl: button, isDark: newTheme === "dark" });
        updateThemeOnHtmlEl({ theme: newTheme });
      
        currentThemeSetting = newTheme;
      }); 