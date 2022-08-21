from flask import request
from bd_acess import *


def sign_up():
    firstName = request.form['firstName']
    lastName = request.form['lastName']
    username = request.form['username']
    email = request.form['email']
    phoneNumber = request.form['number']
    password = request.form['password']
    passwordConfirmation = request.form['passwordConfirmation']
    gender = request.form['gender']
    userData = {"firstName": firstName, "lastName": lastName, "username": username, "email": email,
                "phoneNumber": phoneNumber, "password": password, "passwordConfirmation": passwordConfirmation, "gender": gender}
    sign_up_response = write_in_db(
        firstName, lastName, username, email, phoneNumber, password, passwordConfirmation, gender)
    return userData, sign_up_response


def sign_in():
    user = request.form.get('ent')
    password = request.form.get('password-login')
    sign_in_response = read_from_db(user, password)

    return sign_in_response


if __name__ == '__main__':
    print(sign_up())
