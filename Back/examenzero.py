from transformers import pipeline
from flask import Flask, request, jsonify
from flask_cors import CORS
import re
 
app = Flask(__name__)
CORS(app)
 
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
 
# Lista global para almacenar todas las entradas y resultados
resultados_historicos = []
 
@app.route('/clasificar', methods=['POST'])
def classify_text():
    data = request.json
    entrada = data.get('texto', '')
 
    # Extraer el número y el texto usando regex
    match = re.match(r"(\d+)\.\s*(.*)", entrada)
    if match:
        numero = match.group(1)
        texto = match.group(2)
    else:
        return jsonify({'error': 'Formato de entrada no válido'}), 400
 
    candidate_labels = ['1. Arte', '2. Politica', '3. Religión']
    resultado_clasificacion = classifier(texto, candidate_labels)
    max_score = resultado_clasificacion['scores'].index(max(resultado_clasificacion['scores']))
    label_score = resultado_clasificacion['labels'][max_score]
    # Construir la salida en el formato deseado
    salida = f"{numero}. {texto} - {label_score}"
    # Agregar el resultado a la lista global
    resultados_historicos.append(salida)
 
    # Devolver la clasificación y el historial completo
    return jsonify({'resultado': salida, 'historico': resultados_historicos})
 
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5010)