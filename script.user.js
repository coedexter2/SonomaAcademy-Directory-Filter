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
        page.filterSelector();
        console.log("1")
    },

    filterSelector: function () {
        const filterLocation = document.querySelector("#content_1903384");
        const filterInput = document.createElement("input");
        const filterButton = document.createElement("input");

        filterInput.setAttribute("type", "text");
        filterInput.setAttribute("id", "filterInput")
        filterButton.setAttribute("type", "button");
        filterButton.setAttribute("value", "Filter");

        filterLocation.prepend(filterButton);
        filterLocation.prepend(filterInput);

        filterButton.addEventListener("click", page.filter);
        console.log("2");
    },

    filter: function(){
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
        return input.children[1].innerHTML;
    },

}
window.addEventListener("load", page.init);
