# MediCaso – Simulador de Casos Clínicos

Página web estática (HTML, CSS y JavaScript) con fines educativos. Todos los casos son ficticios.

## Secciones
- **Inicio**: presentación, objetivo educativo y cómo funciona.
- **Biblioteca**: 9 casos (Dermatología, Oftalmología, Otorrino, Reumatología, Toxicología, Salud mental, Ginecología, Traumatología, Endocrinología) con buscador y filtros por dificultad y especialidad.
- **Simulador**: historia clínica + preguntas de opción múltiple con explicación inmediata.
- **Resultados**: puntuación, revisión de respuestas, recomendaciones e historial.
- **Glosario**: términos médicos explicados de forma sencilla, con buscador y filtro por letra.
- **Fuentes**: guías y organismos de salud con enlaces verificables.

## Estructura
```
index.html
css/styles.css
js/datos.js   ← casos, glosario y fuentes (editar aquí el contenido)
js/app.js     ← lógica de la página
```

## Publicar en Netlify
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta `MediCaso` completa.
3. Netlify te da la URL pública al instante.
