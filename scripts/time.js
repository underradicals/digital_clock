import { numberMap } from "../store";



/**
 * 
 * @param {HTMLElement} block 
 * @param {HTMLBodyElement} html 
 */
function render(block, html) {
    block.innerHTML = "";
    const frag = new DocumentFragment();
    [...html.children].forEach(el => frag.appendChild(el.cloneNode(true)));
    block.append(frag);
}


/**
 * 
 * @param {number} tens 
 * @param {number} ones 
 * @param {HTMLElement} leftBlock 
 * @param {HTMLElement} rightBlock
 * @param {object} numberMap
 * @param {IGlobalState} state 
 * @param {"Hours"|"Minutes"|"Seconds"} type 
 * @returns 
 */
function handleNumberTick(tens, ones, leftBlock, rightBlock, numberMap, state, type) {
    if (leftBlock.children.length === 0) {
        state[`current${type}_Tens`] = tens;
        const num1 = numberMap[tens];
        render(leftBlock, state[num1]);
    }

    if (rightBlock.children.length === 0) {
        state[`current${type}_Ones`] = ones;
        const num2 = numberMap[ones];
        render(rightBlock, state[num2]);
    }

    if (state[`current${type}_Ones`] === ones) {
        return;

    } else if (state[`current${type}_Tens`] === tens && state[`current${type}_Ones`] !== ones) {
        state[`current${type}_Ones`] = ones;
        const num2 = numberMap[ones];
        render(rightBlock, state[num2]);
    } else {
        state[`current${type}_Tens`] = tens;
        state[`current${type}_Ones`] = ones;
        const num1 = numberMap[tens];
        const num2 = numberMap[ones];
        render(leftBlock, state[num1]);
        render(rightBlock, state[num2]);
        return;
    }
}


/**
 * 
 * @param {number} number
 * @param {HTMLElement} block1
 * @param {HTMLElement} block2
 * @param {IGlobalState} state
 * @param {object} numberMap 
 */
export function getHours(number, block1, block2, state, numberMap) {
    const tens = (number / 10) | 0;
    const ones = number - (10 * tens);
    handleNumberTick(tens, ones, block1, block2, numberMap, state, "Hours");
}

/**
 * 
 * @param {number} number
 * @param {HTMLElement} block1
 * @param {HTMLElement} block2
 * @param {IGlobalState} state
  * @param {object} numberMap 
 */
export function getMinutes(number, block1, block2, state, numberMap) {
    const tens = (number / 10) | 0;
    const ones = number - (10 * tens);
    handleNumberTick(tens, ones, block1, block2, numberMap, state, "Minutes");
}

/**
 * 
 * @param {number} number
 * @param {HTMLElement} block1
 * @param {HTMLElement} block2
 * @param {IGlobalState} state
  * @param {object} numberMap 
 */
export function getSeconds(number, block1, block2, state, numberMap) {
    const tens = (number / 10) | 0;
    const ones = number - (10 * tens);
    handleNumberTick(tens, ones, block1, block2, numberMap, state, "Seconds");
}