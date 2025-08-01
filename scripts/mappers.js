import { requestIp, requestTzInfo } from "./httpClient";
import GeolocationDTO from "./GeoDto";

/**
 * 
 * @param {IGlobaState} state 
 */
export async function mapGeoLocationDataToGlobalState(state) {
    const data = await requestIp();
    state.ip = data.ip;
    const geo_data = await requestTzInfo(data);
    new GeolocationDTO(geo_data, state);
}