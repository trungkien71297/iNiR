// Lunar calendar conversion for Chinese/Vietnamese lunar calendar.
// Data covers Gregorian years 1900-2100.
// Generated from the lunar-javascript library.

const LUNAR_YEAR_DATA = [
    0x0217a41f, // 1900
    0x000ea432, // 1901
    0x001d4a27, // 1902
    0x0156541d, // 1903
    0x000c962f, // 1904
    0x00153623, // 1905
    0x01354c19, // 1906
    0x000ad42c, // 1907
    0x0016b221, // 1908
    0x00975416, // 1909
    0x000ea429, // 1910
    0x019b4a1e, // 1911
    0x00164a31, // 1912
    0x00149625, // 1913
    0x0174961a, // 1914
    0x00055a2d, // 1915
    0x000ad622, // 1916
    0x008b6a17, // 1917
    0x001b522a, // 1918
    0x01fd2420, // 1919
    0x001d2433, // 1920
    0x001a4a27, // 1921
    0x015a5a1c, // 1922
    0x0014ac2f, // 1923
    0x00056c24, // 1924
    0x0135aa18, // 1925
    0x000da82c, // 1926
    0x001d5221, // 1927
    0x009e9417, // 1928
    0x001d2429, // 1929
    0x018d4c1e, // 1930
    0x000a5630, // 1931
    0x0014ae25, // 1932
    0x0172ac1a, // 1933
    0x0016b42d, // 1934
    0x000da823, // 1935
    0x00eec218, // 1936
    0x000e922a, // 1937
    0x01f6261f, // 1938
    0x00152632, // 1939
    0x000a5627, // 1940
    0x01aa361b, // 1941
    0x00155a2e, // 1942
    0x000ad424, // 1943
    0x013b4a19, // 1944
    0x0017482c, // 1945
    0x00169221, // 1946
    0x009a9616, // 1947
    0x00152a29, // 1948
    0x01d55a1d, // 1949
    0x000a6c30, // 1950
    0x00155a25, // 1951
    0x0175941b, // 1952
    0x000b642d, // 1953
    0x001b4a22, // 1954
    0x00fd4418, // 1955
    0x001a942b, // 1956
    0x020b2a1f, // 1957
    0x00152e31, // 1958
    0x000aac27, // 1959
    0x018aea1c, // 1960
    0x0015aa2e, // 1961
    0x000da424, // 1962
    0x010eaa19, // 1963
    0x001d4a2c, // 1964
    0x000c9421, // 1965
    0x00cc9e15, // 1966
    0x00153628, // 1967
    0x01d5b41e, // 1968
    0x000ad430, // 1969
    0x0016d225, // 1970
    0x0157641b, // 1971
    0x0016a42e, // 1972
    0x00164a22, // 1973
    0x01165617, // 1974
    0x0014962a, // 1975
    0x0215561f, // 1976
    0x00055a31, // 1977
    0x000ada26, // 1978
    0x01ab521c, // 1979
    0x001b522f, // 1980
    0x001b2424, // 1981
    0x011d2a19, // 1982
    0x001a4a2c, // 1983
    0x029c9a21, // 1984
    0x0014ac33, // 1985
    0x00056c28, // 1986
    0x0185ea1d, // 1987
    0x000daa30, // 1988
    0x001d5225, // 1989
    0x015ea41b, // 1990
    0x001d242e, // 1991
    0x001a4c23, // 1992
    0x00ca5c17, // 1993
    0x0014ae29, // 1994
    0x0215ac1f, // 1995
    0x0006b432, // 1996
    0x000daa26, // 1997
    0x0156d21c, // 1998
    0x000e922f, // 1999
    0x000d2624, // 2000
    0x01153618, // 2001
    0x000a562b, // 2002
    0x0014b620, // 2003
    0x00955c16, // 2004
    0x000ad428, // 2005
    0x01dbaa1d, // 2006
    0x00174831, // 2007
    0x00169226, // 2008
    0x015aa61a, // 2009
    0x00152a2d, // 2010
    0x000a5a22, // 2011
    0x010aba17, // 2012
    0x00156a29, // 2013
    0x0257541f, // 2014
    0x000ba432, // 2015
    0x001b4a27, // 2016
    0x01bd141c, // 2017
    0x001a942f, // 2018
    0x00192a24, // 2019
    0x01153c19, // 2020
    0x000aac2b, // 2021
    0x00156a20, // 2022
    0x0095b416, // 2023
    0x000da429, // 2024
    0x018eca1d, // 2025
    0x000e4a30, // 2026
    0x000c9625, // 2027
    0x014cae1a, // 2028
    0x0019562c, // 2029
    0x000ab422, // 2030
    0x00cadc17, // 2031
    0x0016d22a, // 2032
    0x02dea41f, // 2033
    0x0016a432, // 2034
    0x00164a27, // 2035
    0x01ba161c, // 2036
    0x0014962e, // 2037
    0x00095623, // 2038
    0x01457618, // 2039
    0x000b5a2b, // 2040
    0x0016d420, // 2041
    0x009b5416, // 2042
    0x001b2429, // 2043
    0x01dd4a1e, // 2044
    0x001a4a30, // 2045
    0x0014aa25, // 2046
    0x01749a1a, // 2047
    0x00096c2d, // 2048
    0x000b6a21, // 2049
    0x00eda417, // 2050
    0x001d922a, // 2051
    0x021f2420, // 2052
    0x001d2432, // 2053
    0x001a4c27, // 2054
    0x01aa2c1c, // 2055
    0x0014ae2e, // 2056
    0x000aac23, // 2057
    0x0126ca18, // 2058
    0x000eaa2b, // 2059
    0x000e9221, // 2060
    0x00ce9615, // 2061
    0x000d2628, // 2062
    0x01d5561d, // 2063
    0x000a5630, // 2064
    0x0014b624, // 2065
    0x0155741a, // 2066
    0x000ad42d, // 2067
    0x0016ca22, // 2068
    0x01175417, // 2069
    0x0016942a, // 2070
    0x021b2a1f, // 2071
    0x00152a32, // 2072
    0x000a5a26, // 2073
    0x018ada1b, // 2074
    0x00156a2e, // 2075
    0x000b5424, // 2076
    0x010baa18, // 2077
    0x001b4a2b, // 2078
    0x001a9421, // 2079
    0x00dc9a16, // 2080
    0x00192c28, // 2081
    0x01d99c1d, // 2082
    0x000aac30, // 2083
    0x00156a25, // 2084
    0x0175a41a, // 2085
    0x000da42d, // 2086
    0x001d4a22, // 2087
    0x010e5418, // 2088
    0x000d1629, // 2089
    0x020d2e1e, // 2090
    0x00095631, // 2091
    0x000ab626, // 2092
    0x01aaac1b, // 2093
    0x0016d42e, // 2094
    0x000ea424, // 2095
    0x01172a19, // 2096
    0x00168a2b, // 2097
    0x00151620, // 2098
    0x00949e15, // 2099
    0x00095628, // 2100
];

function _decodeYearData(packed) {
    return {
        cnyDayOfYear: packed & 0x1FF,
        monthLengths: (packed >>> 9) & 0xFFF,
        leapLength: ((packed >>> 21) & 0x1) ? 30 : 29,
        leapMonth: (packed >>> 22) & 0xF
    };
}

function _daysInMonth(y, m) {
    // m is 0-based
    return new Date(y, m + 1, 0).getDate();
}

function _dayOfYear(y, m, d) {
    // m is 0-based
    var day = 0;
    for (var i = 0; i < m; i++) {
        day += _daysInMonth(y, i);
    }
    return day + d;
}

function _cnyDayOfYear(lunarYear) {
    return _decodeYearData(LUNAR_YEAR_DATA[lunarYear - 1900]).cnyDayOfYear;
}

function _monthLength(data, month, isLeap) {
    if (isLeap) return data.leapLength;
    return (data.monthLengths & (1 << (month - 1))) ? 30 : 29;
}

function solarToLunar(date) {
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();

    if (y < 1900 || y > 2100) {
        return { year: 0, month: 0, day: 0 };
    }

    var lunarYear = y;
    var targetDoy = _dayOfYear(y, m, d);
    if (targetDoy < _cnyDayOfYear(lunarYear)) {
        lunarYear--;
        if (lunarYear < 1900) {
            return { year: 0, month: 0, day: 0 };
        }
    }

    var data = _decodeYearData(LUNAR_YEAR_DATA[lunarYear - 1900]);
    var offset = targetDoy - _cnyDayOfYear(lunarYear);
    if (lunarYear < y) {
        offset += _dayOfYear(lunarYear, 11, 31);
    }

    var month = 1;
    var isLeap = false;
    while (true) {
        var dim = _monthLength(data, month, isLeap);
        if (offset < dim) break;
        offset -= dim;
        if (data.leapMonth === month && !isLeap) {
            isLeap = true;
        } else {
            month++;
            isLeap = false;
        }
    }

    if (isLeap) month = -month;
    return { year: lunarYear, month: month, day: offset + 1 };
}

function lunarLabel(date) {
    var lunar = solarToLunar(date);
    if (lunar.day <= 0) return "";
    if (lunar.day === 1) {
        return "1/" + Math.abs(lunar.month);
    }
    return String(lunar.day);
}
