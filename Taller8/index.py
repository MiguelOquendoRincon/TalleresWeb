from flask import Flask 
from flask import request
from flask import render_template
from flask_mysqldb import MySQL

app = Flask(__name__) 
app.config()

@app.route('/')
def formulario():
	return render_template('Formulario.html')

if __name__ == '__main__': 
    app.run(debug=True)