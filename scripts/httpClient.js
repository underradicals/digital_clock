/**
 * 
 * @param {string} url
 * @returns {Promise<any>}
 */
async function getRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(response.status);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function requestIp() {
    return await getRequest(`https://api.ipify.org?format=json`);
}

export async function requestTzInfo(data) {
    return await getRequest(`https://api.ipgeolocation.io/timezone?apiKey=${import.meta.env.VITE_API_KEY}&ip=${data.ip}`);
}