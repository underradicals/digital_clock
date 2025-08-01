/**
 * 
 * @param {IGlobaState} state 
 * @param {HTMLDialogElement} modal 
 * @returns 
 */
export function handleChangeThemeClick(state, modal) {
    return (event) => {
        const light = "light";
        const dark = "dark";
        if (state.theme === dark) {
            document.documentElement.dataset.theme = light;
            state.theme = light;
            event.target.textContent = "Dark Mode";
        } else {
            document.documentElement.dataset.theme = dark;
            state.theme = dark;
            event.target.textContent = "Light Mode";
        }
        modal.close();
    }
}


/**
 * 
 * @param {HTMLDialogElement} modal 
 * @returns 
 */
export function showModalDisplay(modal) {
    return (event) => {
        modal.showModal();
    }
}