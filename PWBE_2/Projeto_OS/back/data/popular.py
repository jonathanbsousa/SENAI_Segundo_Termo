import pandas as pd
import sqlite3
import os

print(f"Banco de dados utilizado: {os.path.abspath('db.sqlite3')}")

conn = sqlite3.connect('back/db.sqlite3')

caminho_atual = os.getcwd()
c = caminho_atual.replace("\\", "/")

df = pd.read_json(c+"/back/data/dados.json")

df.columns = [
    'localizacao', 'ni', 'descricao'
]

df.to_sql('api_modelpatrimonio', conn, if_exists='append', index=False)
conn.commit()

conn.close()

print("Dados inseridos com sucesso na tabela api_modelpatrimonio.")