from flask import Flask, render_template

app = Flask(
    __name__,
    static_folder='./templates'
)
app.debug = True
app.secret_key = 'qpalzm10woskxn'


@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
