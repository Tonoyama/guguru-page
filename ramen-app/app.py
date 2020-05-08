from flask import Flask, render_template
import os

"""
デプロイ手順
docker build . -t guguru_page
gcloud builds submit --tag gcr.io/ramen-app-id/guguru_page --project ramen-app-id
"""

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
