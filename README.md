# MediCaso – Simulador de Casos Clínicos

Página web estática (HTML, CSS y JavaScript) con fines educativos. Todos los casos son ficticios.

## Secciones
- **Inicio**: presentación, objetivo educativo y cómo funciona.
- **Casos clínicos**: 9 casos (Dermatología, Oftalmología, Otorrino, Reumatología, Toxicología, Salud mental, Ginecología, Traumatología, Endocrinología) con buscador y filtros por dificultad y especialidad.
- **Expediente por etapas**: consulta, exploración, exámenes, diagnóstico (con pausa para pensar y diagnóstico diferencial) y tratamiento, con razonamiento clínico en cada etapa.
- **Mapa corporal**: figura interactiva para explorar los casos por zona del cuerpo.
- **Glosario**: términos médicos explicados de forma sencilla, con buscador y filtro por letra.
- **Fuentes**: guías y organismos de salud con enlaces verificables.

## Estructura
```
index.html
css/styles.css
js/casos.js   ← expedientes clínicos (editar aquí los casos)
js/datos.js   ← glosario y fuentes
js/iconos.js  ← iconos SVG
js/app.js     ← lógica de la página
```

## Publicar en Netlify
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta `MediCaso` completa.
3. Netlify te da la URL pública al instante.
