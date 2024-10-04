import { sleep, group } from 'k6';
import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

export const options = {
    cloud: {
        distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
        apm: []
    },
    thresholds: {},
    scenarios: {
        Scenario_1: {
            executor: 'ramping-vus',
            gracefulStop: '30s',
            stages: [
                { target: 20, duration: '1m' },
                { target: 20, duration: '3m30s' },
                { target: 0, duration: '1m' }
            ],
            gracefulRampDown: '30s',
            exec: 'scenario_1'
        }
    }
};

export function scenario_1() {
    let formData, response;

    group('page_1 - https://www.legalmatch.com/', function () {
        response = http.get('https://www.legalmatch.com/', {
            headers: {
                host: 'www.legalmatch.com',
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'upgrade-insecure-requests': '1',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'none',
                'sec-fetch-user': '?1'
            }
        });
        sleep(0.8);

        response = http.get(
            'https://www.legalmatch.com/bd/bem/block.php?path=explore-lm/_base&ai=115',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        response = http.get(
            'https://www.legalmatch.com/bd/bem/block.php?path=other-categories/_base&ai=115',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        response = http.get(
            'https://www.legalmatch.com/bd/bem/header/_mobile-menu-listings.html?ai=115',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        response = http.get(
            'https://www.legalmatch.com/bd/bem/block.php?path=w-top-rated/_modals&mixes=w-top-rated__modal',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        response = http.get('https://www.legalmatch.com/AB/clear.php', {
            headers: {
                host: 'www.legalmatch.com',
                accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'image',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        response = http.get('https://main.legalmatch.com/iframe.html', {
            headers: {
                host: 'main.legalmatch.com',
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'upgrade-insecure-requests': '1',
                'sec-fetch-dest': 'iframe',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'same-site'
            }
        });

        response = http.get('https://www.legalmatch.com/geoip.php', {
            headers: {
                host: 'www.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        response = http.get(
            'https://www.legalmatch.com/home/affIdChecker?defaultForThePage=115&incomingId=115&mode=text&t=1728021157819',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );
        sleep(1.2);

        response = http.post(
            'https://www.legalmatch.com/home/staticPageAnalytics.do?et=undefined&eu=undefined',
            null,
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/x-www-form-urlencoded',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );
        sleep(3);

        formData = new FormData();
        formData.boundary = '---------------------------238341486918843226222424797242';
        formData.append('query', '00001');

        response = http.post(
            'https://location-finder.legalmatch.com/location/suggest',
            formData.body(),
            {
                headers: {
                    host: 'location-finder.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------238341486918843226222424797242',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-site'
                }
            }
        );
        sleep(1.9);
    });

    group(
        'page_2 - https://www.legalmatch.com/link.php?supCatIds=&supCatIds%5B%5D=287&location=Nowheresville%2C+XX+00001&city_select=Nowheresville&state_select=XX&zip_select=00001&country_select=USA&ar=%2Fhome%2Fstart.do&catBypass=true&combo_loc=1&require_loc=1&ai=115',
        function () {
            response = http.get(
                'https://www.legalmatch.com/post-case/?supCatIds%5B0%5D=287&location=Nowheresville%2C+XX+00001&city_select=Nowheresville&state_select=XX&zip_select=00001&country_select=USA&catBypass=true&combo_loc=1&require_loc=1',
                {
                    headers: {
                        host: 'www.legalmatch.com',
                        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
                        'accept-language': 'en-US,en;q=0.5',
                        'accept-encoding': 'gzip, deflate, br, zstd',
                        dnt: '1',
                        'sec-gpc': '1',
                        connection: 'keep-alive',
                        'upgrade-insecure-requests': '1',
                        'sec-fetch-dest': 'document',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-user': '?1'
                    }
                }
            );

            response = http.get(
                'https://www.legalmatch.com/post-case/?supCatIds%5B0%5D=287&location=Nowheresville%2C+XX+00001&city_select=Nowheresville&state_select=XX&zip_select=00001&country_select=USA&catBypass=true&combo_loc=1&require_loc=1',
                {
                    headers: {
                        host: 'www.legalmatch.com',
                        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
                        'accept-language': 'en-US,en;q=0.5',
                        'accept-encoding': 'gzip, deflate, br, zstd',
                        dnt: '1',
                        'sec-gpc': '1',
                        connection: 'keep-alive',
                        'upgrade-insecure-requests': '1',
                        'sec-fetch-dest': 'document',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-user': '?1'
                    }
                }
            );
            sleep(1.8);

            response = http.get('https://main.legalmatch.com/iframe.html', {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'upgrade-insecure-requests': '1',
                    'sec-fetch-dest': 'iframe',
                    'sec-fetch-mode': 'navigate',
                    'sec-fetch-site': 'same-site'
                }
            });
            sleep(2.7);

            formData = new FormData();
            formData.boundary = '---------------------------7359092625183567632034537401';
            formData.append('enableTrackAdmin', 'false');
            formData.append('_', '1728021168468');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; _ga=GA1.1.519866790.1728019303; newaffId=115; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021164.38.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021164.38.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------7359092625183567632034537401',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            });
            sleep(0.7);

            response = http.post(
                'https://www.legalmatch.com/post-case/graphql',
                '{"names":["maintenance.notice.popup.ccpm"],"method":"getRamProperties"}',
                {
                    headers: {
                        host: 'www.legalmatch.com',
                        accept: 'application/json',
                        'accept-language': 'en-US,en;q=0.5',
                        'accept-encoding': 'gzip, deflate, br, zstd',
                        'content-type': 'application/json',
                        priority: 'high',
                        'x-cookie':
                            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; _ga=GA1.1.519866790.1728019303; newaffId=115; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021164.38.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021164.38.0.0',
                        origin: 'https://www.legalmatch.com',
                        dnt: '1',
                        'sec-gpc': '1',
                        connection: 'keep-alive',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin'
                    }
                }
            );

            response = http.get('https://www.legalmatch.com/geoip.php?t=1728021168445', {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            response = http.get('https://www.legalmatch.com/post-case/env', {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            response = http.post(
                'https://www.legalmatch.com/post-case/graphql',
                '{"names":["activeprospect.certificate.sandbox"],"method":"getRamProperties"}',
                {
                    headers: {
                        host: 'www.legalmatch.com',
                        accept: 'application/json',
                        'accept-language': 'en-US,en;q=0.5',
                        'accept-encoding': 'gzip, deflate, br, zstd',
                        'content-type': 'application/json',
                        priority: 'high',
                        'x-cookie':
                            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; _ga=GA1.1.519866790.1728019303; newaffId=115; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021164.38.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021164.38.0.0',
                        origin: 'https://www.legalmatch.com',
                        dnt: '1',
                        'sec-gpc': '1',
                        connection: 'keep-alive',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin'
                    }
                }
            );

            response = http.get('https://www.legalmatch.com/post-case/env', {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            response = http.post(
                'https://www.legalmatch.com/post-case/graphql',
                '{"names":["activeprospect.switch.prematching"],"method":"getRamProperties"}',
                {
                    headers: {
                        host: 'www.legalmatch.com',
                        accept: 'application/json',
                        'accept-language': 'en-US,en;q=0.5',
                        'accept-encoding': 'gzip, deflate, br, zstd',
                        'content-type': 'application/json',
                        priority: 'high',
                        'x-cookie':
                            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; _ga=GA1.1.519866790.1728019303; newaffId=115; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021164.38.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021164.38.0.0',
                        origin: 'https://www.legalmatch.com',
                        dnt: '1',
                        'sec-gpc': '1',
                        connection: 'keep-alive',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin'
                    }
                }
            );
            sleep(0.5);

            response = http.post(
                'https://www.legalmatch.com/post-case/graphql',
                '{"names":["maintenance.notice.popup.ccpm.message"],"method":"getRamProperties"}',
                {
                    headers: {
                        host: 'www.legalmatch.com',
                        accept: 'application/json',
                        'accept-language': 'en-US,en;q=0.5',
                        'accept-encoding': 'gzip, deflate, br, zstd',
                        'content-type': 'application/json',
                        priority: 'high',
                        'x-cookie':
                            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; _ga=GA1.1.519866790.1728019303; newaffId=115; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021164.38.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021164.38.0.0',
                        origin: 'https://www.legalmatch.com',
                        dnt: '1',
                        'sec-gpc': '1',
                        connection: 'keep-alive',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin'
                    }
                }
            );
            sleep(4);

            formData = new FormData();
            formData.boundary = '---------------------------3292628550306726341314734204';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'PLAN1480_control');
            formData.append('_', '1728021168454');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------3292628550306726341314734204',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------233529939742110057962833599575';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS17718_control');
            formData.append('_', '1728021168455');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------233529939742110057962833599575',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------82575765119531634632219447941';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS-17669_control');
            formData.append('_', '1728021168455');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------82575765119531634632219447941',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------39714262110010928741584821457';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS-18806_control');
            formData.append('_', '1728021168455');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------39714262110010928741584821457',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------401974887720223893533126623272';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS-17230_control');
            formData.append('_', '1728021168455');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------401974887720223893533126623272',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------14269334722072179162877521314';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS-18097_control');
            formData.append('_', '1728021168455');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------14269334722072179162877521314',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------321400323815931045652656942958';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS14220_control');
            formData.append('_', '1728021169915');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------321400323815931045652656942958',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------263363171818001985433607016994';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'LMS-10215 TrustSignals NextBtn');
            formData.append('_', '1728021171780');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------263363171818001985433607016994',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------309383670142431411302431494227';
            formData.append('enableTrackAdmin', 'false');
            formData.append(
                'e0',
                'CIF-LocationTracker^session-1616236583~~City_Select-Nowheresville,State_Select-XX,Zip_Select-00001,Country_Select-USA'
            );
            formData.append('_', '1728021172604');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------309383670142431411302431494227',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });

            formData = new FormData();
            formData.boundary = '---------------------------18962632683161717551832214254';
            formData.append('enableTrackAdmin', 'false');
            formData.append('e0', 'CIF-CategoryTracker^session-1616236583~3');
            formData.append('_', '1728021172605');
            formData.append(
                'pURL',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );
            formData.append('referrer', 'https://www.legalmatch.com/');
            formData.append('pTag', 'CategorySelection');
            formData.append('pTitle', 'Present Your Case – Legal Category');
            formData.append(
                'parentWindowCookies',
                'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021171.31.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021171.31.0.0'
            );
            formData.append(
                'originalUrl',
                'https://www.legalmatch.com/post-case/subcategory?city_select=Nowheresville&state_select=XX&zip_select=00001&combo_loc=true&supCatIds=287'
            );

            response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
                headers: {
                    host: 'main.legalmatch.com',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type':
                        'multipart/form-data; boundary=---------------------------18962632683161717551832214254',
                    origin: 'https://main.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-site': 'same-origin'
                }
            });
            sleep(4.7);
        }
    );

    group('page_3 - https://www.legalmatch.com/post-case/questions', function () {
        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"names":["activeprospect.certificate.sandbox"],"method":"getRamProperties"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021177.25.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021177.25.0.0',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        formData = new FormData();
        formData.boundary = '---------------------------27412227432067591892808475740';
        formData.append('enableTrackAdmin', 'false');
        formData.append('_', '1728021178579');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/questions');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Issue-Specific Questions');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021177.25.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021177.25.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/questions');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------27412227432067591892808475740',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(4.2);
    });

    group('page_4 - https://www.legalmatch.com/post-case/description', function () {
        formData = new FormData();
        formData.boundary = '---------------------------298094991932104190342322743273';
        formData.append('enableTrackAdmin', 'false');
        formData.append('_', '1728021182727');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Description');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------298094991932104190342322743273',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------386113645933950289311462766799';
        formData.append('enableTrackAdmin', 'false');
        formData.append('_', '1728021182736');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Description');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------386113645933950289311462766799',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(1.1);

        formData = new FormData();
        formData.boundary = '---------------------------98847868732697198532390652053';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'PLAN1480_control');
        formData.append('_', '1728021178486');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------98847868732697198532390652053',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------120456564810162853972601331140';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS17718_control');
        formData.append('_', '1728021178486');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------120456564810162853972601331140',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------303526870324656124221117996423';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-17669_control');
        formData.append('_', '1728021178486');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------303526870324656124221117996423',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------3067869669194374970926923979';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-18806_control');
        formData.append('_', '1728021178486');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------3067869669194374970926923979',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------136685002640655379172475668862';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'PLAN1480_control');
        formData.append('_', '1728021182634');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------136685002640655379172475668862',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------3204296489341485416239610549';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS17718_control');
        formData.append('_', '1728021182634');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------3204296489341485416239610549',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------26548476973748807938117117524';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-17669_control');
        formData.append('_', '1728021182634');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------26548476973748807938117117524',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------13174528108284427753700009317';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-17258_Control');
        formData.append('_', '1728021182634');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------13174528108284427753700009317',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------318395340514599316532238258105';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-17669_control');
        formData.append('_', '1728021182634');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------318395340514599316532238258105',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------31662388927232439911291488273';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-18806_control');
        formData.append('_', '1728021182634');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/description');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'IssueSpecificQuestions');
        formData.append('pTitle', 'Present Your Case – Describe Your Case');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021181.21.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021181.21.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/description');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------31662388927232439911291488273',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(4.2);

        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"description":"this is test from email notificationes","method":"checkIfBogusCase"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021186.16.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021187.15.0.0',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );
        sleep(4.3);
    });

    group('page_5 - https://www.legalmatch.com/post-case/signup', function () {
        formData = new FormData();
        formData.boundary = '---------------------------271195595339169434592333254555';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-18273_control');
        formData.append('_', '1728021192322');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'undefined');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------271195595339169434592333254555',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------178886589640198115842733805025';
        formData.append('enableTrackAdmin', 'false');
        formData.append('_', '1728021192429');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'undefined');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------178886589640198115842733805025',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------60302424241064228892865459197';
        formData.append('enableTrackAdmin', 'false');
        formData.append('_', '1728021192859');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------60302424241064228892865459197',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(4.9);

        formData = new FormData();
        formData.boundary = '---------------------------61141911826737806094122945825';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'PLAN1480_control');
        formData.append('_', '1728021192757');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------61141911826737806094122945825',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------4522304821750863531477925724';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS17718_control');
        formData.append('_', '1728021192757');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------4522304821750863531477925724',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------324602164415058651493151491091';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-17669_control');
        formData.append('_', '1728021192757');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------324602164415058651493151491091',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------150749516112328118792437960595';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-18806_control');
        formData.append('_', '1728021192758');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------150749516112328118792437960595',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(2.3);

        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"names":["ccpm.cif.inappropriate.case.type"],"method":"getRamProperties"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isvu=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        formData = new FormData();
        formData.boundary = '---------------------------185033293735514920072107167051';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-10602 RemovePass Control NextBtn');
        formData.append('_', '1728021200018');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------185033293735514920072107167051',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------42549733173876688552402941819';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-18273_control NextBtn');
        formData.append('_', '1728021200018');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------42549733173876688552402941819',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(0.6);

        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"email":"this is test from email notificationes","method":"getClientByUsername"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0; isvu=0',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        formData = new FormData();
        formData.boundary = '---------------------------157512900423121952261679192024';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'formErrors^email~invalid:this is test from email notificationes');
        formData.append('_', '1728021200666');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isvu=1; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------157512900423121952261679192024',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });
        sleep(8.7);

        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"names":["ccpm.cif.inappropriate.case.type"],"method":"getRamProperties"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0; isvu=0',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );

        formData = new FormData();
        formData.boundary = '---------------------------383657327432402095484253233667';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-10602 RemovePass Control NextBtn');
        formData.append('_', '1728021209352');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0; isvu=0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------383657327432402095484253233667',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------166693706413247644094285605877';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-18273_control NextBtn');
        formData.append('_', '1728021209353');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/signup');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'Registration');
        formData.append('pTitle', 'Present Your Case – Create Profile');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0; isvu=0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/signup');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------166693706413247644094285605877',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"email":"criscarloqatest@gmail.com","method":"getClientByUsername"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0; isvu=0',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );
        sleep(0.5);

        response = http.post(
            'https://www.legalmatch.com/post-case/graphql',
            '{"email":"criscarloqatest@gmail.com","method":"getClientByUsername"}',
            {
                headers: {
                    host: 'www.legalmatch.com',
                    accept: 'application/json',
                    'accept-language': 'en-US,en;q=0.5',
                    'accept-encoding': 'gzip, deflate, br, zstd',
                    'content-type': 'application/json',
                    priority: 'high',
                    'x-cookie':
                        'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638,439,648,423,432,429,1069,421,431,424,1296; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021191.11.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021191.11.0.0; isvu=1',
                    origin: 'https://www.legalmatch.com',
                    dnt: '1',
                    'sec-gpc': '1',
                    connection: 'keep-alive',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin'
                }
            }
        );
        sleep(4.6);
    });

    group('page_6 - https://www.legalmatch.com/post-case/cost-estimate', function () {
        formData = new FormData();
        formData.boundary = '---------------------------23488581361948365796794883584';
        formData.append('enableTrackAdmin', 'false');
        formData.append('e0', 'LMS-17226_control');
        formData.append('_', '1728021214904');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/cost-estimate');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'CostEstimate');
        formData.append('pTitle', 'undefined');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; isvu=1; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021213.60.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021213.60.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/cost-estimate');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------23488581361948365796794883584',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'no-cors',
                'sec-fetch-site': 'same-origin'
            }
        });

        formData = new FormData();
        formData.boundary = '---------------------------37513737259001544171926831294';
        formData.append('enableTrackAdmin', 'false');
        formData.append('_', '1728021215019');
        formData.append('pURL', 'https://www.legalmatch.com/post-case/cost-estimate');
        formData.append('referrer', 'https://www.legalmatch.com/');
        formData.append('pTag', 'CostEstimate');
        formData.append('pTitle', 'Cost Estimate and Payment Methods');
        formData.append(
            'parentWindowCookies',
            'ccpmIntakeDataDebug=eJyrVipOzlSyilYysjBXitVRSi4GcfzyyzNSi1KLyzJzclJBwsVg4YgIELsKzDYAAkOwjhwQF8isBQBfNRWc; ccpmVisitId=HTHBei09u2fe; _gcl_au=1.1.1586746077.1728019302; refUrl=https://www.legalmatch.com/; affId=115; vsr2=02b11e9f8fb8b6edce987f8ebc0c5125f9ce355a; vst2=1616236583; vst2ai=115; caseLocationState=XX; baffids=638%2C439%2C648%2C423%2C432%2C429%2C1069%2C421%2C431%2C424%2C1296; isCasePosted=1; isCasePosted=1; newaffId=115; _ga=GA1.1.519866790.1728019303; isvu=1; _ga_DZHHCMCY6F=GS1.1.1728019303.1.1.1728021213.60.0.0; _ga_9PYGGPWZS7=GS1.1.1728019303.1.1.1728021213.60.0.0'
        );
        formData.append('originalUrl', 'https://www.legalmatch.com/post-case/cost-estimate');

        response = http.post('https://main.legalmatch.com/logo.gif', formData.body(), {
            headers: {
                host: 'main.legalmatch.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.5',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'content-type':
                    'multipart/form-data; boundary=---------------------------37513737259001544171926831294',
                origin: 'https://main.legalmatch.com',
                dnt: '1',
                'sec-gpc': '1',
                connection: 'keep-alive',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin'
            }
        });
    });
}
