# Diseño de Aplicación Educativa: Números Muyscas (5+ años)

## 1. Objetivo General
Crear una experiencia interactiva, lúdica y sonora para que niños desde los 5 años aprendan la numeración muysca (0-19) a través de la exploración y el juego.

## 2. Estructura de la Aplicación (Pantalla a Pantalla)

### Pantalla 1: Inicio (El Despertar)
- **Visual:** Un fondo vibrante (quizá un paisaje andino o un patrón muysca estilizado).
- **Acciones:** 
    - Botón **"Aprender"**: Icono de una mano abierta.
    - Botón **"Jugar"**: Icono de un rompecabezas o una cara sonriente.
    - Botón **"Ajustes"** (Padres/Profesores): Icono de engranaje pequeño.
- **Audio:** Al entrar, una voz cálida dice: "¡Chib-cha-cum! Vamos a conocer los números".

### Pantalla 2: Sección "Aprender" (Exploración)
- **Visual:** Rejilla de glifos (0-19) en botones grandes y redondeados.
- **Interacción:**
    - Al tocar un número:
        1. Se resalta el botón (animación de escala).
        2. Se reproduce el **audio** del nombre (proporcionado por el usuario).
        3. Se muestra una pequeña ilustración de referencia (ej: 3 dedos para *mica*).
- **Meta:** Familiarización visual y auditiva sin presión.

### Pantalla 3: Sección "Jugar" (Reto Auditivo)
- **Mecánica:** "¿Dónde está...?"
    - La app reproduce un audio aleatorio: "¡Busca **muyhyca**!".
    - Se presentan 3 opciones de glifos en pantalla.
- **Feedback:**
    - **Acierto:** Sonido de celebración suave (flauta/caracol) y el glifo baila.
    - **Error:** El glifo incorrecto vibra sutilmente y se repite el audio: "Inténtalo de nuevo, busca **muyhyca**".
- **Niveles:** 
    - Nivel 1: Números 1-5.
    - Nivel 2: Números 6-10.
    - Nivel 3: Números 11-19 (Pies).

## 3. Guía de Interacción y Estilo
- **Audio:** Los archivos deben ser claros (formato .mp3 o .wav). 
- **Colores:** Inspirados en la cerámica y orfebrería muysca (Ocre, Oro, Terracota, Verde esmeralda).
- **Tipografía:** Grande, amigable y muy legible (tipo Sans-Serif redondeada).
- **Navegación:** Siempre debe haber un botón de "Atrás" (Flecha o Icono de Casa) visible para que el niño no se sienta atrapado.

## 4. Requerimientos Técnicos (Próximos Pasos)
1. Integrar los archivos de audio en `src/assets/audio/`.
2. Crear un componente de `Navigation` para cambiar entre pantallas (State-based routing).
3. Implementar el motor del juego (Lógica de selección aleatoria).
