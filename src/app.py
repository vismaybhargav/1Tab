from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/sportsnews')
def sports_news():
    response = requests.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=YOUR_API_KEY')
    data = response.json()

    articles = []

    for article in data['articles'][:5]:
        articles.append({'title': article['title'], 'url': article['url']})
    return data


if __name__ == '__main__':
    app.run(debug=True)
