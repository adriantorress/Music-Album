from flask import request
from bd_acess import *


def sign_up():
    firstName = request.form.get('firstName')
    lastName = request.form.get('lastName')
    username = request.form.get('username')
    email = request.form.get('email')
    phoneNumber = request.form.get('number')
    password = request.form.get('password')
    passwordConfirmation = request.form.get('passwordConfirmation')
    gender = request.form.get('gender')
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
