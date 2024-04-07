from flask import Flask, jsonify, render_template
from flask_cors import CORS
import requests
from openai import OpenAI
import finnhub
import json
app = Flask(__name__)
CORS(app)
finnhub_client = finnhub.Client(api_key="")



client = OpenAI(
    api_key="sk-",
)

#unused
def ask_gpt(prompt):
    response = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": "Here " + prompt,
                }
            ],
            model="gpt-3.5-turbo",
        )
    return response.choices[0].message.content

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/reddit_api/<username>', methods=["GET", "POST"])
def reddit_api(username):
    return "YEow!"

@app.route("/sportsnews", methods=["GET", "POST"])
def current_scores():
    response = requests.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c3b58e07353b4680873794649725a0ba')
    data = response.json()
    return jsonify(data)

@app.route("/nytimes", methods=["GET", "POST"])
def nytimes():
    response = requests.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=q5RqjwuLkWiZaxFlbVbc8PiYkk7v4g3q")
    response.raise_for_status()
  
    data = response.json()
    print(jsonify(data))
    return jsonify(data)

@app.route("/git_trending", methods=["GET", "POST"])
def git_trending():
    response = requests.get("https://api.gitterapp.com/developers?language=javascript&since=weekly")
    data = response.json()
    return jsonify(data)

@app.route("/stocks", methods=["GET", "POST"])
def stock():
    response = requests.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=VL79PLCBSNNFH7R0")
    data = response.json()
    return jsonify(data)

@app.route("/hackernews", methods=["GET", "POST"])
def hackernews():
    response = requests.get("https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty")
    max_item_id = int(response.text)
    hacker_news_data = []

    # Fetching the last 15 items from Hacker News
    for item_id in range(max_item_id, max_item_id - 15, -1):
        response = requests.get(f"https://hacker-news.firebaseio.com/v0/item/{item_id}.json?print=pretty")
        hacker_news_data.append(response.json())

    return (hacker_news_data)

@app.route('/quotes')
def get_quotes():
    # Fetch quotes for the specified symbols
    symbols = ['AAPL', 'MSFT', 'NVDA', 'AMZN', 'GOOG', 'META', 'TSLA', 'NFLX', 'AMD', 'LLY', 'TSM', 'BRK-B']
    quotes = {symbol: finnhub_client.quote(symbol) for symbol in symbols}

    # Return JSON response with additional 'results' key
    return jsonify(results=quotes)

  
if __name__ == "__main__":
    app.run(port=3945, host="0.0.0.0")
