/* =========================================================
   MediCaso – Contenido educativo
   Todos los pacientes son FICTICIOS. No se usan datos reales.
   Para añadir un caso, copia un objeto del arreglo CASOS
   y cambia sus valores.
   ========================================================= */

const CASOS = [
  {
    id: "derma-01",
    codigo: "MC-DER-01",
    titulo: "Dolor urente y vesículas en banda",
    especialidad: "Dermatología",
    icono: "🧴",
    color: "#fde4ef",
    dificultad: "Básico",
    tiempo: 6,
    resumen: "Adulto mayor con dolor quemante en el tórax seguido de lesiones vesiculares agrupadas en un solo lado del cuerpo.",
    paciente: { nombre: "Don Aurelio (ficticio)", edad: 68, sexo: "Masculino", ocupacion: "Jubilado", avatar: "👴" },
    motivo: "Dolor quemante en el lado derecho del tórax y aparición de ampollas.",
    enfermedadActual: "Hace 4 días inicia dolor urente y hormigueo en el hemitórax derecho. Hace 24 horas aparecen pequeñas vesículas agrupadas sobre piel enrojecida siguiendo una franja que va de la espalda al pecho.",
    antecedentes: ["Varicela en la infancia", "Diabetes tipo 2 controlada", "No ha recibido vacuna contra herpes zóster"],
    vitales: [
      { k: "FC", v: "84 lpm" }, { k: "PA", v: "128/80 mmHg" },
      { k: "T°", v: "37.4 °C" }, { k: "SpO₂", v: "97 %" }
    ],
    examen: "Vesículas agrupadas sobre base eritematosa en un dermatoma torácico derecho (T5). Las lesiones no cruzan la línea media.",
    preguntas: [
      {
        tipo: "Diagnóstico",
        enunciado: "¿Cuál es el diagnóstico más probable?",
        opciones: ["Dermatitis de contacto", "Herpes zóster", "Impétigo", "Urticaria aguda"],
        correcta: 1,
        explicacion: "El dolor previo a las lesiones y las vesículas agrupadas en un solo dermatoma, sin cruzar la línea media, son típicos del herpes zóster: la reactivación del virus de la varicela que quedó latente en un ganglio nervioso."
      },
      {
        tipo: "Tratamiento",
        enunciado: "¿Cuál es la conducta terapéutica más adecuada?",
        opciones: ["Antibiótico tópico", "Corticoide tópico potente", "Antiviral oral (aciclovir o valaciclovir), idealmente antes de 72 h", "Solo observar, no requiere tratamiento"],
        correcta: 2,
        explicacion: "Los antivirales orales iniciados dentro de las primeras 72 horas aceleran la curación y reducen el dolor agudo. En mayores de 50 años están especialmente indicados. Los antibióticos no actúan sobre virus."
      },
      {
        tipo: "Complicaciones",
        enunciado: "¿Cuál es la complicación más frecuente en este paciente?",
        opciones: ["Neuralgia postherpética", "Insuficiencia renal", "Neumonía bacteriana", "Anemia"],
        correcta: 0,
        explicacion: "La neuralgia postherpética es un dolor que persiste semanas o meses después de que sanan las lesiones. Su riesgo aumenta con la edad. La vacuna recombinante contra el zóster ayuda a prevenirla."
      }
    ],
    recomendaciones: [
      "Repasa la distribución de los dermatomas para reconocer patrones de lesiones.",
      "Estudia la diferencia entre varicela (primoinfección) y herpes zóster (reactivación).",
      "Revisa las indicaciones de la vacuna contra el herpes zóster en adultos mayores."
    ],
    fuente: "msd"
  },
  {
    id: "oftal-01",
    codigo: "MC-OFT-01",
    titulo: "Ojo rojo y dolor intenso al salir del cine",
    especialidad: "Oftalmología",
    icono: "👁️",
    color: "#e3ebff",
    dificultad: "Avanzado",
    tiempo: 8,
    resumen: "Mujer con dolor ocular brusco, halos de colores alrededor de las luces y náuseas tras permanecer en un ambiente oscuro.",
    paciente: { nombre: "Sra. Elvira (ficticia)", edad: 62, sexo: "Femenino", ocupacion: "Comerciante", avatar: "👵" },
    motivo: "Dolor muy fuerte en el ojo izquierdo, visión borrosa y vómitos.",
    enfermedadActual: "Inicia hace 3 horas, después de ver una película en el cine. Refiere ver halos de colores alrededor de las luces, dolor de cabeza del lado izquierdo y náuseas con un vómito.",
    antecedentes: ["Hipermetropía (usa lentes para ver de cerca y de lejos)", "Hipertensión arterial", "Sin cirugías oculares previas"],
    vitales: [
      { k: "FC", v: "96 lpm" }, { k: "PA", v: "150/92 mmHg", alerta: true },
      { k: "T°", v: "36.8 °C" }, { k: "Agudeza OI", v: "Cuenta dedos", alerta: true }
    ],
    examen: "Ojo izquierdo con enrojecimiento alrededor de la córnea, córnea turbia (edematosa), pupila en midriasis media que no reacciona a la luz. Al palpar, el globo ocular se siente duro.",
    preguntas: [
      {
        tipo: "Diagnóstico",
        enunciado: "¿Qué diagnóstico debe sospecharse primero?",
        opciones: ["Conjuntivitis viral", "Glaucoma agudo de ángulo cerrado", "Orzuelo", "Ojo seco"],
        correcta: 1,
        explicacion: "La oscuridad dilata la pupila y, en ojos hipermétropes con ángulo estrecho, puede bloquear la salida del humor acuoso. Esto eleva bruscamente la presión intraocular: dolor intenso, halos, córnea turbia, pupila fija y náuseas."
      },
      {
        tipo: "Examen",
        enunciado: "¿Qué medición confirma rápidamente la sospecha?",
        opciones: ["Prueba de colores", "Tonometría (presión intraocular)", "Cultivo de secreción", "Medición de glucosa"],
        correcta: 1,
        explicacion: "La tonometría mide la presión intraocular, que en una crisis de ángulo cerrado suele estar muy por encima de lo normal (aprox. 10–21 mmHg)."
      },
      {
        tipo: "Conducta",
        enunciado: "¿Cuál es la conducta correcta?",
        opciones: ["Aplicar gotas para dilatar la pupila", "Indicar lágrimas artificiales y control en un mes", "Tratamiento urgente para bajar la presión y derivar a oftalmología para iridotomía láser", "Colocar un parche y enviar a casa"],
        correcta: 2,
        explicacion: "Es una emergencia que puede causar ceguera en horas. Se usan fármacos que bajan la presión (por ejemplo, acetazolamida y gotas hipotensoras) y se deriva para iridotomía láser. Dilatar la pupila empeoraría el bloqueo."
      }
    ],
    recomendaciones: [
      "Compara las causas de ojo rojo doloroso vs. ojo rojo no doloroso.",
      "Repasa la circulación del humor acuoso y por qué la midriasis empeora el cierre angular.",
      "Identifica los fármacos que pueden desencadenar una crisis (anticolinérgicos, descongestionantes)."
    ],
    fuente: "aao"
  },
  {
    id: "orl-01",
    codigo: "MC-ORL-01",
    titulo: "Niño que llora y se jala la oreja",
    especialidad: "Otorrinolaringología",
    icono: "👂",
    color: "#fef1d6",
    dificultad: "Básico",
    tiempo: 5,
    resumen: "Preescolar con fiebre e irritabilidad días después de un resfriado común.",
    paciente: { nombre: "Mateo (ficticio)", edad: 3, sexo: "Masculino", ocupacion: "Asiste a guardería", avatar: "👦" },
    motivo: "Fiebre, llanto y se toca la oreja derecha.",
    enfermedadActual: "Hace 5 días tuvo congestión nasal y tos. Desde ayer presenta fiebre de 38.6 °C, duerme mal, llora al acostarse y se toca la oreja derecha.",
    antecedentes: ["Vacunas completas para la edad", "Exposición a humo de tabaco en casa", "Sin alergias conocidas"],
    vitales: [
      { k: "FC", v: "118 lpm" }, { k: "FR", v: "24 rpm" },
      { k: "T°", v: "38.6 °C", alerta: true }, { k: "Peso", v: "14 kg" }
    ],
    examen: "Otoscopia derecha: membrana timpánica roja, opaca y abombada, con poca movilidad. Oído izquierdo normal. Faringe levemente congestiva.",
    preguntas: [
      {
        tipo: "Diagnóstico",
        enunciado: "¿Cuál es el diagnóstico?",
        opciones: ["Otitis externa", "Otitis media aguda", "Tapón de cerumen", "Cuerpo extraño en oído"],
        correcta: 1,
        explicacion: "La membrana timpánica abombada con signos inflamatorios y síntomas agudos (fiebre, otalgia) después de una infección respiratoria es el criterio clave de otitis media aguda."
      },
      {
        tipo: "Tratamiento",
        enunciado: "Si se decide dar antibiótico, ¿cuál es la primera elección habitual?",
        opciones: ["Amoxicilina", "Ciprofloxacino", "Vancomicina", "Gotas de antibiótico en el oído"],
        correcta: 0,
        explicacion: "La amoxicilina es la primera línea en la mayoría de niños con otitis media aguda. Además se debe tratar el dolor y la fiebre con analgésicos como paracetamol o ibuprofeno."
      },
      {
        tipo: "Prevención",
        enunciado: "¿Cuál de estos es un factor de riesgo modificable en Mateo?",
        opciones: ["Su edad", "Su sexo", "Exposición al humo de tabaco", "Ser vacunado"],
        correcta: 2,
        explicacion: "El humo de tabaco irrita la mucosa y aumenta el riesgo de otitis. Otros factores son la guardería y tomar biberón acostado. Las vacunas (neumococo, influenza) ayudan a prevenirla."
      }
    ],
    recomendaciones: [
      "Repasa la anatomía de la trompa de Eustaquio en niños y por qué favorece la otitis.",
      "Estudia los criterios para observar sin antibiótico vs. tratar de inmediato.",
      "Aprende a describir una otoscopia normal y una patológica."
    ],
    fuente: "aap"
  },
  {
    id: "reuma-01",
    codigo: "MC-REU-01",
    titulo: "Dedo gordo inflamado tras una celebración",
    especialidad: "Reumatología",
    icono: "🦶",
    color: "#ffe9de",
    dificultad: "Intermedio",
    tiempo: 6,
    resumen: "Varón que despierta de madrugada con dolor insoportable en el primer dedo del pie.",
    paciente: { nombre: "Sr. Ramiro (ficticio)", edad: 52, sexo: "Masculino", ocupacion: "Chofer", avatar: "👨" },
    motivo: "Dolor intenso y enrojecimiento en el dedo gordo del pie derecho.",
    enfermedadActual: "Se despertó a las 3 a.m. con dolor muy fuerte en el dedo gordo; no tolera ni el roce de la sábana. La noche anterior asistió a una celebración con abundante carne y cerveza.",
    antecedentes: ["Obesidad (IMC 31)", "Hipertensión tratada con hidroclorotiazida", "Consumo frecuente de alcohol"],
    vitales: [
      { k: "FC", v: "90 lpm" }, { k: "PA", v: "142/88 mmHg", alerta: true },
      { k: "T°", v: "37.6 °C" }, { k: "Ácido úrico", v: "8.9 mg/dL", alerta: true }
    ],
    examen: "Primera articulación metatarsofalángica derecha roja, caliente, muy hinchada y extremadamente dolorosa al tacto.",
    preguntas: [
      {
        tipo: "Diagnóstico",
        enunciado: "¿Cuál es el diagnóstico más probable?",
        opciones: ["Artrosis", "Crisis aguda de gota (podagra)", "Esguince", "Artritis reumatoide"],
        correcta: 1,
        explicacion: "La inflamación súbita del primer dedo del pie (podagra), de madrugada y tras comida rica en purinas y alcohol, es la presentación clásica de la gota. Los diuréticos tiazídicos también elevan el ácido úrico."
      },
      {
        tipo: "Examen",
        enunciado: "¿Qué estudio confirma el diagnóstico de forma definitiva?",
        opciones: ["Radiografía de tórax", "Análisis del líquido articular con cristales de urato", "Electrocardiograma", "Hemograma"],
        correcta: 1,
        explicacion: "Encontrar cristales de urato monosódico (en forma de aguja, con birrefringencia negativa) en el líquido sinovial confirma la gota. Un ácido úrico normal en sangre no la descarta durante la crisis."
      },
      {
        tipo: "Tratamiento",
        enunciado: "¿Qué tratamiento alivia la crisis aguda?",
        opciones: ["Antiinflamatorio (AINE) o colchicina", "Antibiótico", "Solo alopurinol", "Inmovilizar con yeso"],
        correcta: 0,
        explicacion: "La crisis se trata con AINE, colchicina o corticoides. El alopurinol baja el ácido úrico a largo plazo para evitar nuevas crisis, pero no alivia el dolor agudo por sí solo."
      }
    ],
    recomendaciones: [
      "Estudia los alimentos ricos en purinas y su relación con la hiperuricemia.",
      "Diferencia gota de artritis séptica: ambas causan monoartritis caliente.",
      "Repasa qué fármacos elevan el ácido úrico (tiazidas, aspirina en dosis bajas)."
    ],
    fuente: "acr"
  },
  {
    id: "tox-01",
    codigo: "MC-TOX-01",
    titulo: "Agricultor que babea y suda tras fumigar",
    especialidad: "Toxicología",
    icono: "☠️",
    color: "#e6f7ee",
    dificultad: "Avanzado",
    tiempo: 8,
    resumen: "Trabajador del campo con secreciones abundantes, pupilas pequeñas y temblores musculares después de aplicar un plaguicida.",
    paciente: { nombre: "Sr. Faustino (ficticio)", edad: 35, sexo: "Masculino", ocupacion: "Agricultor", avatar: "👨‍🌾" },
    motivo: "Vómitos, mucha saliva, sudoración y dificultad para respirar.",
    enfermedadActual: "Hace 2 horas fumigó su cultivo sin guantes ni mascarilla. Luego presentó visión borrosa, salivación excesiva, sudoración, cólicos, diarrea y sensación de falta de aire.",
    antecedentes: ["Sano previamente", "Su ropa huele a químico", "El familiar trae el envase de un insecticida organofosforado"],
    vitales: [
      { k: "FC", v: "48 lpm", alerta: true }, { k: "PA", v: "96/60 mmHg", alerta: true },
      { k: "FR", v: "28 rpm", alerta: true }, { k: "SpO₂", v: "88 %", alerta: true }
    ],
    examen: "Pupilas puntiformes (miosis), sialorrea, lagrimeo, piel sudorosa, sibilancias y secreciones bronquiales abundantes. Fasciculaciones en brazos y piernas.",
    preguntas: [
      {
        tipo: "Fisiopatología",
        enunciado: "¿Qué explica los síntomas del paciente?",
        opciones: ["Exceso de adrenalina", "Inhibición de la acetilcolinesterasa con exceso de acetilcolina", "Déficit de insulina", "Reacción alérgica"],
        correcta: 1,
        explicacion: "Los organofosforados bloquean la enzima que degrada la acetilcolina. Se acumula y produce un síndrome colinérgico: miosis, salivación, lagrimeo, sudoración, broncorrea, bradicardia y fasciculaciones."
      },
      {
        tipo: "Conducta inicial",
        enunciado: "¿Qué debe hacerse primero al recibirlo?",
        opciones: ["Darle leche para beber", "Inducir el vómito", "Asegurar vía aérea y descontaminar (retirar ropa y lavar la piel) con protección del personal", "Esperar el resultado de laboratorio"],
        correcta: 2,
        explicacion: "La prioridad es el ABC (vía aérea, respiración, circulación) y la descontaminación: retirar la ropa y lavar la piel con agua y jabón. El personal debe usar guantes para no intoxicarse."
      },
      {
        tipo: "Antídoto",
        enunciado: "¿Cuál es el antídoto principal para controlar las secreciones y la bradicardia?",
        opciones: ["Naloxona", "Flumazenil", "Atropina", "Vitamina K"],
        correcta: 2,
        explicacion: "La atropina bloquea los receptores muscarínicos y seca las secreciones bronquiales; se repite hasta lograr pulmones limpios. Las oximas (como pralidoxima) pueden complementarla. Naloxona es para opioides y flumazenil para benzodiacepinas."
      }
    ],
    recomendaciones: [
      "Memoriza los toxíndromes: colinérgico, anticolinérgico, simpaticomimético y opioide.",
      "Revisa las medidas de protección personal en el manejo de plaguicidas.",
      "Estudia el objetivo clínico de la atropinización (secreciones bronquiales secas)."
    ],
    fuente: "lancet"
  },
  {
    id: "psiq-01",
    codigo: "MC-PSQ-01",
    titulo: "Universitaria que cree que está teniendo un infarto",
    especialidad: "Salud mental",
    icono: "🧠",
    color: "#efe9ff",
    dificultad: "Básico",
    tiempo: 5,
    resumen: "Estudiante joven con palpitaciones, sensación de ahogo y miedo intenso a morir en época de exámenes.",
    paciente: { nombre: "Camila (ficticia)", edad: 21, sexo: "Femenino", ocupacion: "Estudiante universitaria", avatar: "👩‍🎓" },
    motivo: "\"Siento que me voy a morir, el corazón me late muy fuerte\".",
    enfermedadActual: "Mientras estudiaba de noche presentó de forma súbita palpitaciones, falta de aire, hormigueo en las manos, mareo y miedo intenso a morir. Los síntomas llegaron a su máximo en 10 minutos. Es el tercer episodio en el mes y teme que se repita.",
    antecedentes: ["Sin enfermedades previas", "Alto consumo de café y bebidas energizantes", "Duerme 4–5 horas por la época de exámenes"],
    vitales: [
      { k: "FC", v: "104 lpm", alerta: true }, { k: "PA", v: "124/78 mmHg" },
      { k: "FR", v: "22 rpm" }, { k: "SpO₂", v: "99 %" }
    ],
    examen: "Ansiosa, hiperventilando. Corazón y pulmones normales. ECG: taquicardia sinusal sin otras alteraciones. Glucosa capilar normal.",
    preguntas: [
      {
        tipo: "Abordaje",
        enunciado: "¿Por qué fue correcto hacer un ECG y medir la glucosa antes de concluir?",
        opciones: ["No era necesario", "Para descartar causas orgánicas que imitan una crisis de ansiedad", "Para cobrar más la consulta", "Para confirmar ansiedad"],
        correcta: 1,
        explicacion: "Arritmias, hipoglucemia, hipertiroidismo o el exceso de estimulantes pueden parecer un ataque de pánico. Primero se descartan causas físicas; nunca se asume que \"es solo ansiedad\"."
      },
      {
        tipo: "Diagnóstico",
        enunciado: "Con estudios normales y episodios repetidos, ¿qué cuadro es el más probable?",
        opciones: ["Infarto de miocardio", "Trastorno de pánico", "Asma", "Epilepsia"],
        correcta: 1,
        explicacion: "Crisis bruscas de miedo intenso con síntomas físicos que alcanzan su pico en minutos, repetidas y con preocupación por nuevos episodios, sugieren trastorno de pánico."
      },
      {
        tipo: "Tratamiento",
        enunciado: "¿Qué tratamiento a largo plazo tiene mejor evidencia?",
        opciones: ["Benzodiacepinas de forma indefinida", "Terapia cognitivo-conductual y/o un antidepresivo ISRS", "Aumentar el café para rendir más", "Ningún tratamiento"],
        correcta: 1,
        explicacion: "La terapia cognitivo-conductual y los ISRS son la base del tratamiento. Las benzodiacepinas solo se usan por periodos cortos por riesgo de dependencia. Reducir cafeína y mejorar el sueño ayuda."
      }
    ],
    recomendaciones: [
      "Estudia los criterios diagnósticos del trastorno de pánico.",
      "Repasa las causas orgánicas de ansiedad que deben descartarse.",
      "Conoce técnicas básicas de respiración y psicoeducación para el paciente."
    ],
    fuente: "nice"
  },
  {
    id: "gine-01",
    codigo: "MC-GIN-01",
    titulo: "Dolor pélvico y retraso menstrual",
    especialidad: "Ginecología",
    icono: "🌸",
    color: "#ffe4ea",
    dificultad: "Avanzado",
    tiempo: 7,
    resumen: "Mujer joven con siete semanas de amenorrea, dolor abdominal bajo de un lado y sangrado escaso.",
    paciente: { nombre: "Sra. Lucía (ficticia)", edad: 27, sexo: "Femenino", ocupacion: "Docente", avatar: "👩" },
    motivo: "Dolor fuerte en la parte baja del abdomen, lado izquierdo, y sangrado vaginal leve.",
    enfermedadActual: "Su última menstruación fue hace 7 semanas. Desde hoy tiene dolor pélvico izquierdo que va en aumento, sangrado vaginal escaso y se mareó al levantarse.",
    antecedentes: ["Infección pélvica tratada hace 3 años", "Fumadora", "Sin uso de anticonceptivos actualmente"],
    vitales: [
      { k: "FC", v: "118 lpm", alerta: true }, { k: "PA", v: "88/56 mmHg", alerta: true },
      { k: "T°", v: "36.6 °C" }, { k: "SpO₂", v: "98 %" }
    ],
    examen: "Pálida y sudorosa. Abdomen doloroso en fosa ilíaca izquierda con signos de irritación peritoneal. Dolor intenso al movilizar el cuello uterino.",
    preguntas: [
      {
        tipo: "Examen",
        enunciado: "¿Qué estudios iniciales son prioritarios?",
        opciones: ["Prueba de embarazo (β-hCG) y ecografía transvaginal", "Resonancia de columna", "Radiografía de abdomen", "Urocultivo y esperar 48 h"],
        correcta: 0,
        explicacion: "En toda mujer en edad fértil con dolor abdominal se debe descartar embarazo. La β-hCG junto con la ecografía transvaginal permite ubicar dónde está la gestación."
      },
      {
        tipo: "Diagnóstico",
        enunciado: "La β-hCG es positiva, el útero está vacío y hay una masa anexial con líquido libre. ¿Diagnóstico?",
        opciones: ["Quiste ovárico simple", "Embarazo ectópico roto", "Embarazo normal", "Apendicitis"],
        correcta: 1,
        explicacion: "Una prueba positiva con útero vacío, masa junto al ovario y sangre libre en el abdomen indica un embarazo ectópico, probablemente roto. La infección pélvica previa y fumar son factores de riesgo."
      },
      {
        tipo: "Conducta",
        enunciado: "Con la paciente hipotensa y taquicárdica, ¿qué corresponde?",
        opciones: ["Metotrexato y control ambulatorio", "Reposo en casa", "Estabilización y cirugía de urgencia", "Repetir la ecografía en una semana"],
        correcta: 2,
        explicacion: "La inestabilidad hemodinámica indica sangrado activo: se estabiliza con fluidos y se opera de urgencia. El metotrexato solo es una opción en pacientes estables con criterios específicos."
      }
    ],
    recomendaciones: [
      "Repasa el diagnóstico diferencial del dolor pélvico agudo en mujeres.",
      "Estudia los factores de riesgo del embarazo ectópico.",
      "Revisa los criterios para tratamiento médico vs. quirúrgico."
    ],
    fuente: "acog"
  },
  {
    id: "trauma-01",
    codigo: "MC-TRA-01",
    titulo: "Caída sobre la mano extendida",
    especialidad: "Traumatología",
    icono: "🦴",
    color: "#e7eef6",
    dificultad: "Básico",
    tiempo: 5,
    resumen: "Adulta mayor que se cae en la calle, apoya la mano y presenta deformidad en la muñeca.",
    paciente: { nombre: "Sra. Rosa (ficticia)", edad: 70, sexo: "Femenino", ocupacion: "Ama de casa", avatar: "👵" },
    motivo: "Dolor y deformidad en la muñeca derecha tras una caída.",
    enfermedadActual: "Hace una hora resbaló en la vereda y cayó apoyando la palma de la mano derecha. Presenta dolor intenso, hinchazón y no puede mover la muñeca.",
    antecedentes: ["Menopausia hace 20 años", "Nunca se ha realizado densitometría ósea", "Vida sedentaria"],
    vitales: [
      { k: "FC", v: "92 lpm" }, { k: "PA", v: "136/82 mmHg" },
      { k: "T°", v: "36.5 °C" }, { k: "Dolor", v: "8/10", alerta: true }
    ],
    examen: "Muñeca derecha con deformidad en \"dorso de tenedor\", hinchazón y dolor a la palpación del radio distal. Pulso radial presente y buena sensibilidad en los dedos.",
    preguntas: [
      {
        tipo: "Diagnóstico",
        enunciado: "¿Qué lesión es la más probable?",
        opciones: ["Fractura de Colles (radio distal con desplazamiento dorsal)", "Luxación de hombro", "Fractura de cadera", "Tendinitis"],
        correcta: 0,
        explicacion: "La caída sobre la mano extendida en una adulta mayor, con deformidad en \"dorso de tenedor\", es la presentación típica de la fractura de Colles."
      },
      {
        tipo: "Examen",
        enunciado: "¿Qué estudio de imagen se pide primero?",
        opciones: ["Resonancia magnética de cerebro", "Radiografía de muñeca en dos proyecciones (frente y perfil)", "Ecografía abdominal", "No se necesita imagen"],
        correcta: 1,
        explicacion: "La radiografía en dos proyecciones confirma la fractura y muestra el desplazamiento, necesario para decidir entre reducción con yeso o cirugía."
      },
      {
        tipo: "Prevención",
        enunciado: "¿Qué condición de fondo debe estudiarse en esta paciente?",
        opciones: ["Osteoporosis", "Gota", "Asma", "Hipertiroidismo"],
        correcta: 0,
        explicacion: "Una fractura por una caída de baja energía en una mujer posmenopáusica sugiere fragilidad ósea. Se recomienda densitometría y evaluar calcio, vitamina D y prevención de caídas."
      }
    ],
    recomendaciones: [
      "Repasa la evaluación neurovascular de una extremidad lesionada.",
      "Estudia las fracturas por fragilidad y la prevención de caídas en adultos mayores.",
      "Compara la fractura de Colles con la fractura de Smith."
    ],
    fuente: "aaos"
  },
  {
    id: "endo-01",
    codigo: "MC-END-01",
    titulo: "Cansancio, frío y aumento de peso",
    especialidad: "Endocrinología",
    icono: "🦋",
    color: "#dff3fb",
    dificultad: "Intermedio",
    tiempo: 6,
    resumen: "Mujer de mediana edad con fatiga progresiva, intolerancia al frío y piel seca durante varios meses.",
    paciente: { nombre: "Sra. Marta (ficticia)", edad: 45, sexo: "Femenino", ocupacion: "Contadora", avatar: "👩‍💼" },
    motivo: "\"Me siento cansada todo el tiempo y subí de peso sin comer más\".",
    enfermedadActual: "Desde hace 6 meses nota cansancio, somnolencia, aumento de 6 kg, estreñimiento, caída del cabello y siente frío cuando los demás no. Sus menstruaciones son más abundantes.",
    antecedentes: ["Madre con enfermedad de la tiroides", "Vitíligo", "Sin medicamentos habituales"],
    vitales: [
      { k: "FC", v: "56 lpm", alerta: true }, { k: "PA", v: "118/84 mmHg" },
      { k: "T°", v: "36.1 °C" }, { k: "Peso", v: "74 kg" }
    ],
    examen: "Piel seca y fría, cabello quebradizo, leve hinchazón alrededor de los ojos. Tiroides algo aumentada de tamaño, no dolorosa. Reflejos con relajación lenta.",
    preguntas: [
      {
        tipo: "Sospecha",
        enunciado: "¿Qué alteración explica mejor el cuadro?",
        opciones: ["Hipertiroidismo", "Hipotiroidismo", "Diabetes tipo 1", "Anemia por falta de vitamina C"],
        correcta: 1,
        explicacion: "Cansancio, frío, aumento de peso, estreñimiento, piel seca y bradicardia reflejan un metabolismo lento por falta de hormona tiroidea."
      },
      {
        tipo: "Examen",
        enunciado: "¿Cuál es el examen inicial más útil?",
        opciones: ["TSH y T4 libre en sangre", "Radiografía de tórax", "Colesterol solamente", "Examen de orina"],
        correcta: 0,
        explicacion: "La TSH es la prueba de tamizaje. Una TSH alta con T4 libre baja confirma hipotiroidismo primario. La causa más común, con yodo suficiente en la dieta, es la tiroiditis de Hashimoto (autoinmune)."
      },
      {
        tipo: "Tratamiento",
        enunciado: "¿Cómo se trata?",
        opciones: ["Yodo radiactivo", "Levotiroxina oral diaria, en ayunas", "Antitiroideos como metimazol", "Cirugía de tiroides inmediata"],
        correcta: 1,
        explicacion: "La levotiroxina reemplaza la hormona que falta. Se toma en ayunas y la dosis se ajusta según la TSH cada 6–8 semanas. Yodo radiactivo y metimazol son tratamientos del hipertiroidismo."
      }
    ],
    recomendaciones: [
      "Construye una tabla comparativa de hipo- vs. hipertiroidismo.",
      "Repasa el eje hipotálamo–hipófisis–tiroides y la retroalimentación de la TSH.",
      "Estudia la asociación de Hashimoto con otras enfermedades autoinmunes."
    ],
    fuente: "ata"
  }
];

const GLOSARIO = [
  { t: "Acetilcolinesterasa", cat: "Bioquímica", d: "Enzima que destruye la acetilcolina para que el nervio deje de enviar la señal. Si se bloquea, la señal se queda \"encendida\".", ej: "Los plaguicidas organofosforados la inhiben." },
  { t: "Amenorrea", cat: "Ginecología", d: "Ausencia de menstruación. Puede deberse a embarazo, estrés, cambios hormonales u otras causas.", ej: "Siete semanas de amenorrea obligan a descartar embarazo." },
  { t: "Antídoto", cat: "Toxicología", d: "Sustancia que neutraliza o contrarresta los efectos de un tóxico." },
  { t: "Artrocentesis", cat: "Procedimiento", d: "Punción con aguja de una articulación para sacar líquido y analizarlo o aliviar la presión." },
  { t: "Atropina", cat: "Fármaco", d: "Medicamento que bloquea la acetilcolina en ciertos receptores; seca secreciones y sube la frecuencia cardiaca." },
  { t: "Bradicardia", cat: "Signo", d: "Frecuencia cardiaca más lenta de lo normal, generalmente menos de 60 latidos por minuto en adultos." },
  { t: "β-hCG", cat: "Laboratorio", d: "Hormona que produce la placenta. Se mide en sangre u orina para saber si hay embarazo." },
  { t: "Dermatoma", cat: "Anatomía", d: "Zona de la piel que recibe sensibilidad de un solo nervio raquídeo. Forman \"franjas\" en el cuerpo.", ej: "El herpes zóster sigue un dermatoma." },
  { t: "Densitometría ósea", cat: "Imagen", d: "Estudio que mide la densidad de los huesos para diagnosticar osteoporosis." },
  { t: "Diagnóstico diferencial", cat: "Clínica", d: "Lista de enfermedades que podrían explicar los síntomas del paciente y que el médico debe ir descartando." },
  { t: "Embarazo ectópico", cat: "Ginecología", d: "Embarazo que se implanta fuera del útero, con mayor frecuencia en la trompa de Falopio. Puede romperse y sangrar." },
  { t: "Fasciculación", cat: "Signo", d: "Pequeñas contracciones involuntarias de un músculo que se ven como \"temblores\" bajo la piel." },
  { t: "Gota", cat: "Reumatología", d: "Artritis causada por cristales de ácido úrico que se depositan en las articulaciones y provocan dolor intenso." },
  { t: "Hipotiroidismo", cat: "Endocrinología", d: "La tiroides produce menos hormona de la necesaria y el metabolismo se vuelve lento." },
  { t: "Iridotomía", cat: "Procedimiento", d: "Pequeña abertura hecha con láser en el iris para que el líquido del ojo vuelva a circular." },
  { t: "Midriasis", cat: "Signo", d: "Dilatación de la pupila (la pupila se ve grande)." },
  { t: "Miosis", cat: "Signo", d: "Contracción de la pupila (la pupila se ve pequeña, \"puntiforme\")." },
  { t: "Neuralgia postherpética", cat: "Complicación", d: "Dolor en la zona donde hubo herpes zóster que persiste después de que la piel ya sanó." },
  { t: "Osteoporosis", cat: "Traumatología", d: "Enfermedad en la que los huesos pierden densidad y se vuelven frágiles, por lo que se fracturan con facilidad." },
  { t: "Otalgia", cat: "Síntoma", d: "Dolor de oído." },
  { t: "Otoscopia", cat: "Examen", d: "Revisión del conducto auditivo y del tímpano con un instrumento con luz llamado otoscopio." },
  { t: "Podagra", cat: "Reumatología", d: "Inflamación aguda y dolorosa de la articulación del dedo gordo del pie, típica de la gota." },
  { t: "Presión intraocular", cat: "Oftalmología", d: "Presión del líquido dentro del ojo. Si sube mucho puede dañar el nervio óptico." },
  { t: "Sialorrea", cat: "Signo", d: "Producción excesiva de saliva." },
  { t: "Signos vitales", cat: "Clínica", d: "Mediciones básicas del funcionamiento del cuerpo: frecuencia cardiaca, presión arterial, respiración, temperatura y saturación de oxígeno." },
  { t: "Taquicardia", cat: "Signo", d: "Frecuencia cardiaca más rápida de lo normal, generalmente más de 100 latidos por minuto en adultos." },
  { t: "Tonometría", cat: "Examen", d: "Prueba que mide la presión dentro del ojo." },
  { t: "Toxíndrome", cat: "Toxicología", d: "Conjunto de signos y síntomas típicos de un grupo de tóxicos que ayuda a identificar la sustancia." },
  { t: "TSH", cat: "Laboratorio", d: "Hormona de la hipófisis que \"ordena\" a la tiroides producir hormona. Sube cuando la tiroides trabaja poco." },
  { t: "Vesícula (dermatología)", cat: "Lesión", d: "Pequeña ampolla en la piel llena de líquido claro, de menos de 1 cm." }
];

const FUENTES = [
  {
    id: "msd", tipo: "Manual de referencia", titulo: "Manual MSD – Versión para profesionales",
    desc: "Referencia médica en español con capítulos de diagnóstico y tratamiento, incluido el herpes zóster.",
    cita: "Merck & Co. Manual MSD versión para profesionales [Internet]. Rahway (NJ): Merck & Co.; 2026.",
    url: "https://www.msdmanuals.com/es/professional"
  },
  {
    id: "medline", tipo: "Portal para pacientes", titulo: "MedlinePlus en español",
    desc: "Información de salud confiable y en lenguaje sencillo de la Biblioteca Nacional de Medicina de EE. UU.",
    cita: "National Library of Medicine (US). MedlinePlus [Internet]. Bethesda (MD): NLM.",
    url: "https://medlineplus.gov/spanish/"
  },
  {
    id: "aao", tipo: "Sociedad científica", titulo: "American Academy of Ophthalmology – Glaucoma",
    desc: "Información sobre glaucoma de ángulo cerrado, síntomas de alarma y tratamiento.",
    cita: "American Academy of Ophthalmology. EyeSmart: Eye health [Internet]. San Francisco (CA): AAO.",
    url: "https://www.aao.org/eye-health"
  },
  {
    id: "aap", tipo: "Guía de práctica clínica", titulo: "Guía de otitis media aguda (AAP)",
    desc: "Guía de la Academia Americana de Pediatría para el diagnóstico y manejo de la otitis media aguda.",
    cita: "Lieberthal AS, et al. The diagnosis and management of acute otitis media. Pediatrics. 2013;131(3):e964-e999.",
    url: "https://doi.org/10.1542/peds.2012-3488"
  },
  {
    id: "acr", tipo: "Guía de práctica clínica", titulo: "Guía de manejo de la gota (ACR 2020)",
    desc: "Recomendaciones del Colegio Americano de Reumatología para el tratamiento de la gota.",
    cita: "FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res. 2020;72(6):744-760.",
    url: "https://doi.org/10.1002/acr.24180"
  },
  {
    id: "lancet", tipo: "Artículo de revisión", titulo: "Intoxicación aguda por organofosforados",
    desc: "Revisión sobre el manejo clínico de la intoxicación por plaguicidas organofosforados.",
    cita: "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008;371(9612):597-607.",
    url: "https://doi.org/10.1016/S0140-6736(07)61202-1"
  },
  {
    id: "nice", tipo: "Guía de práctica clínica", titulo: "Trastorno de ansiedad y pánico (NICE CG113)",
    desc: "Guía del Instituto Nacional de Salud del Reino Unido sobre ansiedad generalizada y trastorno de pánico.",
    cita: "National Institute for Health and Care Excellence. Generalised anxiety disorder and panic disorder in adults: management (CG113). London: NICE; 2011, actualizada.",
    url: "https://www.nice.org.uk/guidance/cg113"
  },
  {
    id: "acog", tipo: "Boletín de práctica", titulo: "Embarazo ectópico tubárico (ACOG)",
    desc: "Recomendaciones del Colegio Americano de Obstetras y Ginecólogos sobre diagnóstico y tratamiento.",
    cita: "ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstet Gynecol. 2018;131(3):e91-e103.",
    url: "https://doi.org/10.1097/AOG.0000000000002560"
  },
  {
    id: "aaos", tipo: "Sociedad científica", titulo: "Fracturas de radio distal (AAOS OrthoInfo)",
    desc: "Información de la Academia Americana de Cirujanos Ortopédicos sobre fracturas de muñeca.",
    cita: "American Academy of Orthopaedic Surgeons. Distal radius fractures (broken wrist). OrthoInfo [Internet].",
    url: "https://orthoinfo.aaos.org/en/diseases--conditions/distal-radius-fractures-broken-wrist/"
  },
  {
    id: "ata", tipo: "Guía de práctica clínica", titulo: "Tratamiento del hipotiroidismo (ATA)",
    desc: "Guía de la Asociación Americana de Tiroides para el tratamiento del hipotiroidismo.",
    cita: "Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.",
    url: "https://doi.org/10.1089/thy.2014.0028"
  },
  {
    id: "oms", tipo: "Organismo internacional", titulo: "Organización Mundial de la Salud",
    desc: "Notas descriptivas, datos y recomendaciones de salud pública a nivel mundial.",
    cita: "Organización Mundial de la Salud [Internet]. Ginebra: OMS.",
    url: "https://www.who.int/es"
  },
  {
    id: "minsa", tipo: "Organismo nacional", titulo: "Ministerio de Salud del Perú (MINSA)",
    desc: "Normas técnicas, guías de práctica clínica y documentos oficiales del sistema de salud peruano.",
    cita: "Ministerio de Salud del Perú. Portal institucional [Internet]. Lima: MINSA.",
    url: "https://www.gob.pe/minsa"
  }
];
