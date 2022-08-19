import mysql.connector


def connect_database():
    global music_album_bd
    global cursor
    try:
        if music_album_bd.is_connected():
            pass
    except:
        print("\nCreating new db connection...")
        music_album_bd = mysql.connector.connect(
            host='localhost', user='user', password='password', database='music-album-bd')
        cursor = music_album_bd.cursor()


def disconnect_database():
    global music_album_bd
    global cursor
    try:
        if music_album_bd.is_connected():
            print("\nClosing db connection...")
            cursor.close()
            music_album_bd.close()
    except:
        pass


def write_in_db(firstName, lastName, username, email, phoneNumber, password, passwordConfirmation, gender):
    connect_database()
    global music_album_bd
    global cursor
    create_user = f'''INSERT INTO usuario (nome, sobrenome, nomeUsuario, email, celular, senha, genero) 
                      VALUES ("{firstName}", "{lastName}", "{username}", "{email}", "{phoneNumber}", "{password}", "{gender}")'''
    try:
        cursor.execute(create_user)
    except:
        select_user = f'SELECT nomeUsuario,email,celular,senha FROM usuario'
        cursor.execute(select_user)
        users = cursor.fetchall()
        for user in users:
            if user[0] == username:
                error = "Nome de usuário indisponível."
                return error
            if user[1] == email:
                error = "Email indisponível."
                return error
            if user[2] == phoneNumber:
                error = "Celular indisponível."
                return error
    else:
        if password != passwordConfirmation:
            error = "Digite a mesma senha em ambos os campos de senha!"
            return error
        else:
            music_album_bd.commit()
            sucess = "Usuário cadastrado com sucesso!"
            return sucess


def read_from_db(user, password):
    connect_database()
    global music_album_bd
    global cursor
    select_user = f'''SELECT nome, sobrenome, nomeUsuario,email,celular,senha FROM usuario where nomeUsuario="{user}" or email="{user}" or celular="{user}"'''
    cursor.execute(select_user)
    userDb = cursor.fetchall()
    if len(userDb) == 0:
        error = "Usuário não cadastrado!"
        return error
    elif password != userDb[0][5]:
        error = "Senha incorreta!"
        return error
    else:
        return [userDb[0][0], userDb[0][1]]


disconnect_database()
