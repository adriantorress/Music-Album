from flask import Flask, render_template
from sign import *

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def homepage():
    return render_template('home.html')


@app.route('/sign')
def login():
    return render_template('sign.html')


@app.route('/register', methods=['POST'])
def register():
    userData, sign_up_response = sign_up()
    if sign_up_response != "Usuário cadastrado com sucesso!":
        return render_template('sign.html', sign_up_response=sign_up_response)
    else:
        return user(userData)


@app.route('/authentication', methods=['POST'])
def authentication():
    sign_in_response = sign_in()
    if type(sign_in_response) == list:
        userData = {
            "firstName": sign_in_response[0], "lastName": sign_in_response[1]}
        return user(userData)
    else:
        return render_template('sign.html', sign_in_response=sign_in_response)


@app.route('/user', methods=['POST'])
def user(userData):
    titleName = userData["firstName"] + " " + userData["lastName"]
    return render_template('user.html', titleName=titleName)


if __name__ == '__main__':
    app.run(debug=True)
