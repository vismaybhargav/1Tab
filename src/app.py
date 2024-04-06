from flask import Flask, render_template
import requests
app = Flask(__name__)


@app.route('/')
def main():
    return render_template("index.html")


@app.route('/reddit_api/<username>', methods = ["GET", "POST"])
def reddit_api(username):
    return "YEow!"


@app.route("/sportsnews", methods = ["GET", "POST"])
def current_scores():
    response = requests.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c3b58e07353b4680873794649725a0ba')
    data = response.json()

    top_titles = []
    top_urls = []

    for article in data['articles'][:5]:
        top_titles.append(article['title'])
        top_urls.append(article['url'])

    result = '\n'.join([f"{title}\n{url}" for title, url in zip(top_titles, top_urls)])

    return result


@app.route

if __name__ == '__main__':
    app.run()
