/**
 * GlobalState object holds the current time, location information, and configuration.
 * @type {IGlobalState}
 * @property {number} currentHour - The current hour in 24-hour format.
 * @property {number} currentMinutes - The current minutes.
 * @property {number} currentHour_Tens - The tens digit of the current hour.
 * @property {number} currentHour_Ones - The ones digit of the current hour.
 * @property {number} currentMinutes_Tens - The tens digit of the current minutes.
 * @property {number} currentMinutes_Ones - The ones digit of the current minutes.
 * @property {number} currentSeconds_Tens - The tens digit of the current seconds.
 * @property {number} currentSeconds_Ones - The ones digit of the current seconds.
 * @property {null|HTMLElement} one - Placeholder for future data.
 * @property {null|HTMLElement} two - Placeholder for future data.
 * @property {null|HTMLElement} three - Placeholder for future data.
 * @property {null|HTMLElement} four - Placeholder for future data.
 * @property {null|HTMLElement} five - Placeholder for future data.
 * @property {null|HTMLElement} six - Placeholder for future data.
 * @property {null|HTMLElement} seven - Placeholder for future data.
 * @property {null|HTMLElement} eight - Placeholder for future data.
 * @property {null|HTMLElement} nine - Placeholder for future data.
 * @property {null|HTMLElement} zero - Placeholder for future data.
 * @property {null|string} ip - The IP address of the user.
 * @property {null|string} continent_code - Code of the continent.
 * @property {null|string} continent_name - Name of the continent.
 * @property {null|string} country_code2 - Two-letter country code.
 * @property {null|string} country_code3 - Three-letter country code.
 * @property {null|string} country_name - Name of the country.
 * @property {null|string} country_name_official - Official name of the country.
 * @property {null|boolean} is_eu - Whether the country is in the European Union.
 * @property {null|string} state_prov - State or province name.
 * @property {null|string} state_code - Code of the state or province.
 * @property {null|string} district - District name.
 * @property {null|string} city - City name.
 * @property {null|string} zipcode - Postal code.
 * @property {null|number} latitude - Latitude coordinates.
 * @property {null|number} longitude - Longitude coordinates.
 * @property {null|string} timezone - The timezone name.
 * @property {null|number} timezone_offset - Offset in hours from UTC.
 * @property {null|number} timezone_offset_with_dst - Offset with daylight saving time adjustment.
 * @property {null|string} date - Current date.
 * @property {null|string} date_time - Current date and time.
 * @property {null|string} date_time_txt - Current date and time as text.
 * @property {null|string} date_time_wti - Current date and time in WTI format.
 * @property {null|string} date_time_ymd - Current date in YMD format.
 * @property {null|number} date_time_unix - Current date and time in Unix format.
 * @property {null|string} time_24 - Current time in 24-hour format.
 * @property {null|string} time_12 - Current time in 12-hour format.
 * @property {null|number} week - The current week number.
 * @property {null|number} month - The current month number.
 * @property {null|number} year - The current year.
 * @property {null|number} year_abbr - The abbreviated year.
 * @property {null|boolean} is_dst - Whether daylight saving time is active.
 * @property {null|number} dst_savings - The amount of daylight saving time in hours.
 * @property {null|boolean} dst_exists - Whether daylight saving time is observed.
 * @property {null|string} utc_time - The current time in UTC.
 * @property {null|string} duration - Duration information.
 * @property {null|number} gap - Gap in hours, if any.
 * @property {null|string} dateTimeAfter - Datetime after an event.
 * @property {null|string} dateTimeBefore - Datetime before an event.
 * @property {null|boolean} overlap - Whether an overlap occurred.
 * @property {"dark"|"light"} theme - The UI theme, either 'dark' or 'light'.
 */
let GlobalState = {
    currentHour: 0,
    currentMinutes: 0,
    currentHour_Tens: 0,
    currentHour_Ones: 0,
    currentMinutes_Tens: 0,
    currentMinutes_Ones: 0,
    currentSeconds_Tens: 0,
    currentSeconds_Ones: 0,
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null,
    zero: null,
    ip: null,
    continent_code: null,
    continent_name: null,
    country_code2: null,
    country_code3: null,
    country_name: null,
    country_name_official: null,
    is_eu: null,
    state_prov: null,
    state_code: null,
    district: null,
    city: null,
    zipcode: null,
    latitude: null,
    longitude: null,
    timezone: null,
    timezone_offset: null,
    timezone_offset_with_dst: null,
    date: null,
    date_time: null,
    date_time_txt: null,
    date_time_wti: null,
    date_time_ymd: null,
    date_time_unix: null,
    time_24: null,
    time_12: null,
    week: null,
    month: null,
    year: null,
    year_abbr: null,
    is_dst: null,
    dst_savings: null,
    dst_exists: null,
    utc_time: null,
    duration: null,
    gap: null,
    dateTimeAfter: null,
    dateTimeBefore: null,
    overlap: null,
    utc_time: null,
    duration: null,
    gap: null,
    dateTimeAfter: null,
    dateTimeBefore: null,
    overlap: null,
    theme: 'dark'
}

export const numberMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
}

export default GlobalState;