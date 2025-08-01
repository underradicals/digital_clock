

class GeolocationDTO {
    constructor(data, store) {
        store.continent_code = data.geo.continent_code;
        store.continent_name = data.geo.continent_name;
        store.country_code2 = data.geo.country_code2;
        store.country_code3 = data.geo.country_code3;
        store.country_name = data.geo.country_name;
        store.country_name_official = data.geo.country_name_official;
        store.is_eu = data.geo.is_eu;
        store.state_prov = data.geo.state_prov;
        store.state_code = data.geo.state_code;
        store.district = data.geo.district;
        store.city = data.geo.city;
        store.zipcode = data.geo.zipcode;
        store.latitude = data.geo.latitude;
        store.longitude = data.geo.longitude;
        store.timezone = data.timezone;
        store.timezone_offset = data.timezone_offset;
        store.timezone_offset_with_dst = data.timezone_offset_with_dst;
        store.date = data.date;
        store.date_time = data.date_time;
        store.date_time_txt = data.date_time_txt;
        store.date_time_wti = data.date_time_wti;
        store.date_time_ymd = data.date_time_ymd;
        store.date_time_unix = data.date_time_unix;
        store.time_24 = data.time_24;
        store.time_12 = data.time_12;
        store.week = data.week;
        store.month = data.month;
        store.year = data.year;
        store.year_abbr = data.year_abbr;
        store.is_dst = data.is_dst;
        store.dst_savings = data.dst_savings;
        store.dst_exists = data.dst_exists;
        store.utc_time = data.dst_start.utc_time;
        store.duration = data.dst_start.duration;
        store.gap = data.dst_start.gap;
        store.dateTimeAfter = data.dst_start.dateTimeAfter;
        store.dateTimeBefore = data.dst_start.dateTimeBefore;
        store.overlap = data.dst_start.overlap;
        store.utc_time = data.dst_end.utc_time;
        store.duration = data.dst_end.duration;
        store.gap = data.dst_end.gap;
        store.dateTimeAfter = data.dst_end.dateTimeAfter;
        store.dateTimeBefore = data.dst_end.dateTimeBefore;
        store.overlap = data.dst_end.overlap;
    }
}

export default GeolocationDTO;