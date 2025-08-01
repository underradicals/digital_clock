import './style.css';
import GlobalState, { numberMap } from "./store.js";
import { Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine } from "./scripts/numbers.js";
import { getHours, getMinutes, getSeconds } from "./scripts/time.js";
import { changeThemeButton, cog, dataList, dateSlot, daySlot, firstBlock, twoBlock, threeBlock, fourBlock, fiveBlock, sixtBlock, ipAddress, longLatt, modal, Parser } from "./scripts/elements.js";
import { handleChangeThemeClick, showModalDisplay } from "./scripts/eventHanlders.js";
import { mapGeoLocationDataToGlobalState } from "./scripts/mappers.js";



/**
 * 
 * @param {IGlobaState} state
 * @param {DOMParser} parser 
 * @returns {void}
 */
function InitializeGlobalStateBoxes(state, parser) {
    return (func, index) => {
        const html = func();
        const elements = parser.parseFromString(html, 'text/html').body;
        let w_index = numberMap[index]
        state[w_index] = elements;
    }
}

[Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine]
    .forEach(InitializeGlobalStateBoxes(GlobalState, Parser));



/**
 * 
 * @param {string} tagName 
 * @param {HTMLElement} dataList 
 * @returns 
 */
function buildTopbar(tagName, dataList) {
    return (item) => {
        const li = document.createElement(tagName);
        li.textContent = item;
        dataList.appendChild(li);
    }
}


addEventListener("load", async () => {

    await mapGeoLocationDataToGlobalState(GlobalState);

    setInterval(() => {
        const d = new Date(Date.now());
        getHours(d.getHours(), firstBlock, twoBlock, GlobalState, numberMap);
        getMinutes(d.getMinutes(), threeBlock, fourBlock, GlobalState, numberMap);
        getSeconds(d.getSeconds(), fiveBlock, sixtBlock, GlobalState, numberMap);
    }, 1000);

    const date_value = GlobalState.date_time_txt.split(",");
    const month_and_date = date_value[1];
    dateSlot.textContent = month_and_date;
    daySlot.textContent = `${date_value[0]} WK-${GlobalState.week}`;
    ipAddress.textContent = GlobalState.ip
    longLatt.textContent = `${GlobalState.longitude} :: ${GlobalState.latitude}`;
    const topbarData = [
        GlobalState.city,
        GlobalState.district,
        GlobalState.state_code,
        GlobalState.timezone
    ]

    topbarData.map(buildTopbar('li', dataList));

    cog.addEventListener('click', showModalDisplay(modal));

    changeThemeButton.addEventListener('click', handleChangeThemeClick(GlobalState, modal));
    // console.log(GlobalState);
});