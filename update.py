import requests

js = requests.get("https://static.onlyfans.com/theme/onlyfans/spa/33415.js?rev=91ab031-2023-11-10")
print(js.text)
updated_list = js.text.split("const W=[")[1].split("]")[0]
updated_id = js.text.split(",{")[1].split(":")[0]
print(updated_list)