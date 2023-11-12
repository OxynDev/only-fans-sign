import requests

def hash_args(
        url: str,
    ):
    
    end_point = url.split("https://onlyfans.com")[1]
    data = '{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{},"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json","accept":"application/json, text/plain, */*"},"baseURL":"https://onlyfans.com","params":{},"withCredentials":true,"maxRedirects":0,"method":"get","url":"'+end_point+'"}'
    payload = {
        "accountId": None,
        "endPoint": end_point,
        "requestData": data
    }
    response = requests.post("http://localhost:3000/runScript", json=payload)
    hashed_data = response.json()
    return hashed_data



url = 'https://onlyfans.com/api2/v2/users/roxystyleztv'
hashed_data = hash_args(url)

cookies = {
    'fp': '094506bcc234caec8fadde96ca23f9a5fab392d7',
    'sess': 'vg3cv08u6ui1k4f447qfopf6ae',
    'csrf': 'FQLIY417deb29912ab216585274e352a305d9630',
    'lang': 'en',
    'cookiesAccepted': 'all',
    'auth_id': '375831552',
    'st': 'c59b70b14b325039fc643662e0e74bc8441f0e1a1e7e28d6ab38b04c44c0f8a8',
    'ref_src': '',
}

headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        'sign': hashed_data['sign'],
        'time': str(hashed_data['time']),
        "app-token": "33d57ade8c02dbc5a333db99ff9ae26a",
        "x-bc": "094506bcc234caec8fadde96ca23f9a5fab392d7",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
}

response = requests.get(url, cookies=cookies, headers=headers)
print(response.text)