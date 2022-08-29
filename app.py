from flask import Flask, render_template, url_for, redirect
from sign import *

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def homepage():
    return render_template('home.html')


@app.route('/register', methods=['POST'])
def register():
    global userData, sign_up_response, come_from
    userData, sign_up_response = sign_up()
    come_from = "register"
    if sign_up_response == "Usuário cadastrado com sucesso!":
        return redirect(url_for('user'), code=307)
    else:
        return redirect(url_for('sign'), code=307)


@app.route('/authentication', methods=['POST'])
def authentication():
    global userData, sign_in_response, come_from
    sign_in_response = sign_in()
    come_from = "authentication"
    if type(sign_in_response) == list:
        global userData
        userData = {
            "firstName": sign_in_response[0], "lastName": sign_in_response[1]}
        return redirect(url_for('user'), code=307)
    else:
        return redirect(url_for('sign'), code=307)


@app.route('/sign', methods=['GET', 'POST'])
def sign():
    if request.method == 'GET':
        return render_template('sign.html')
    elif request.method == 'POST' and come_from == "register":
        return render_template('sign.html', sign_up_response=sign_up_response)
    elif request.method == 'POST' and come_from == "authentication":
        return render_template('sign.html', sign_in_response=sign_in_response)


@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        return redirect(url_for('sign'))
    elif request.method == 'POST':
        titleName = userData["firstName"] + " " + userData["lastName"]
        return render_template('user.html', titleName=titleName)


if __name__ == '__main__':
    app.run(debug=True)
