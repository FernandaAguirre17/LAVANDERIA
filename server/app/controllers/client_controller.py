from app.models.client import Client
from app import db

def create_client(name, phone_number, address):
    new_client = Client(name=name, phone_number=phone_number, address=address)
    db.session.add(new_client)
    db.session.commit()
    return new_client

def search_client_by_name(name):
    #Las regulas expresion hacen busquedas/ stringsde manera mas dinamica 
    #LIKE= metodo para buscar 
    #Los porcentajes son parte de las "REGULAR EXPRESION"
    return Client.query.filter(Client.name.ilike(f"%{name}%")).all()

def search_client_by_phone(phone):
    return Client.query.filter_by(phone_number = phone).first()

def update_client(client_id, update_data):
    #el punto get siempre busca el id si se quiere otra propiedad especifica se usa el find by 
    client = Client.query.get(client_id)
    if not client:
        return None
    
    for key, value in update_data.items():
        #items regresa una dupla de pares de clave valor 
        setattr(client, key, value)
    db.session.commit()
    #commit genera un cierre de procesos en la base de datos 
    return client

def delete_client(client_id):
    client = Client.query.get(client_id)
    if not client:
        return None
    
    db.session.delete(client)
    db.session.commit()
    return client


