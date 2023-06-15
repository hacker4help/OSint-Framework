import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

path = os.getcwd()
options = webdriver.ChromeOptions()
options.add_argument('--headless')
prefs = {"download.default_directory": path}
options.add_experimental_option("prefs", prefs)
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)
url = "https://whatsmyname.app/"

driver.get(url)

search_box = driver.find_element(By.CLASS_NAME, 'form-control')
uname = input("Enter the username you want to search: ")
search_box.send_keys(uname)

search_bttn = driver.find_element(By.CLASS_NAME, 'btn-success')
search_bttn.click()

time.sleep(30)

csv = driver.find_element(By.CLASS_NAME,
                          'buttons-csv')
csv.click()
