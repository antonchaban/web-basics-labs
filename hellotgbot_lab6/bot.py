import telebot
from dotenv import load_dotenv
import os
import requests
import json

load_dotenv()

bot = telebot.TeleBot(os.environ.get('BOT_TOKEN'))
api_key = os.environ.get('API_KEY')


@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'Hello, ' + str(
        message.from_user.first_name) + '\n' + 'Enter the city name to get the weather')


@bot.message_handler(content_types=['text'])
def get_weather(message):
    city = message.text.strip().lower()
    res = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric')
    data = json.loads(res.text)
    bot.reply_to(message,
                 f'Weather in {city}:\n {data["main"]["temp"]}\n {data["weather"][0]["description"]}')


bot.polling(none_stop=True)
