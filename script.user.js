// ==UserScript==
// @name        Filter Faculty@sonomaacademy.org
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/5/2024, 3:22:23 PM
// ==/UserScript==
const page = {
    init: function () {
        const gridUl = document.querySelector("#content_1903384 > div > div > ul");
        gridUl.style.gridTemplateColumns = "18% 18% 18% 18% 18%";
        page.filterSelector();
        console.log("1")
    },

    filterSelector: function () {
        const filterLocation = document.querySelector("#content_1903384");
        const filterInput = document.createElement("input");
        filterInput.setAttribute("type", "text");
        filterInput.setAttribute("id", "filterInput")

        filterLocation.prepend(filterInput);

        console.log("2");
        filterInput.addEventListener("input", page.filter);
    },

    filter: function(){
        for (i in page.getList()) {
            page.getList()[i].style.display = "grid";
        }

        for (i in page.getList()) {
            if (!page.listName(page.getList()[i]).includes(filterInput.value)){
                page.getList()[i].style.display = "none";
                console.log(page.getList()[i])

            }
        }
    },

    getList: function () {
        const listElementsNode = document.querySelectorAll("#content_1903384 > div > div > ul > li");
        const listElements = Array.from(listElementsNode);
        return listElements;
    },

    listName: function (input) {
        //console.log(input.children[1].innerHTML);
        return input.children[1].innerHTML.toLowerCase();
    },

}
window.addEventListener("load", page.init);
