from flask import Flask, render_template, url_for, redirect
from sign import *

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def homepage():
    return render_template('home.html')


@app.route('/register', methods=['POST'])
def register():
    global userData, sign_up_response
    userData, sign_up_response = sign_up()
    if sign_up_response == "Usuário cadastrado com sucesso!":
        return redirect(url_for('user'), code=307)
    else:
        return redirect(url_for('signUp'), code=307)


@app.route('/authentication', methods=['POST'])
def authentication():
    global userData, sign_in_response
    sign_in_response = sign_in()
    if type(sign_in_response) == list:
        global userData
        userData = {
            "firstName": sign_in_response[0], "lastName": sign_in_response[1]}
        return redirect(url_for('user'), code=307)
    else:
        return redirect(url_for('signIn'), code=307)


@app.route('/sign', methods=['GET', 'POST'])
def signUp():
    if request.method == 'GET':
        return render_template('sign.html')
    elif request.method == 'POST':
        return render_template('sign.html', sign_up_response=sign_up_response)


@app.route('/sign-in', methods=['GET', 'POST'])
def signIn():
    if request.method == 'GET':
        return render_template('sign.html')
    elif request.method == 'POST':
        return render_template('sign.html', sign_in_response=sign_in_response)


@app.route('/user', methods=['GET', 'POST'])
def user():
    titleName = userData["firstName"] + " " + userData["lastName"]
    return render_template('user.html', titleName=titleName)


if __name__ == '__main__':
    app.run(debug=True)
