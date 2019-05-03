            //tabs describing the code lang
            var tabLinks;
            var tabPanels;
            window.onload=function() {
                tabLinks= document.getElementById("tabs").getElementsByTagName("li");
                tabPanels= document.getElementById("containers").getElementsByTagName("div");

                tabsDisplay(tabLinks[0]);
                for(var i=0 ; i < tabLinks.length ; i++)
                {
                    tabLinks[i].onclick = function()
                    {
                        tabsDisplay(this);
                        return false;
                    }
                    tabLinks[i].oncfoucs = function()
                    {
                        tabsDisplay(this);
                        return false;
                    }
                }
            }
            function tabsDisplay(tabToActivate)
            {
                for (var j = 0; j < tabLinks.length; j++) {
                 if (tabLinks[j] == tabToActivate) {
                     tabLinks[j].classList.add("activate");
                     tabPanels[j].style.display = "block";
                 }   
                 else{
                    tabLinks[j].classList.remove("active");
                    tabPanels[j].style.display="none";
                 }
                }
            }
        