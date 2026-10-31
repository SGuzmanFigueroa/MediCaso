/* =========================================================
   MediCaso – Expedientes clínicos
   Todos los pacientes son FICTICIOS. No se usan datos reales.
   Cada caso se recorre en 5 etapas:
   consulta → exploración → exámenes → diagnóstico → tratamiento
   ========================================================= */

const CASOS = [
  {
    id: "derma-01",
    codigo: "MC-DER-01",
    titulo: "Dolor urente y vesículas en banda",
    especialidad: "Dermatología",
    icono: "piel",
    color: "#fde4ef",
    dificultad: "Básico",
    tiempo: 6,
    regiones: ["torax"],
    resumen: "Adulto mayor con dolor quemante en el tórax seguido de lesiones vesiculares agrupadas en un solo lado del cuerpo.",
    paciente: { nombre: "Don Aurelio (ficticio)", edad: 68, sexo: "Masculino", ocupacion: "Jubilado", avatar: "A" },
    motivo: "Dolor quemante en el lado derecho del tórax y aparición de ampollas.",
    enfermedadActual: "Hace 4 días inicia dolor urente y hormigueo en el hemitórax derecho. Hace 24 horas aparecen pequeñas vesículas agrupadas sobre piel enrojecida siguiendo una franja que va de la espalda al pecho.",
    antecedentes: ["Varicela en la infancia", "Diabetes tipo 2 controlada", "No ha recibido vacuna contra herpes zóster"],
    vitales: [
      { k: "FC", v: "84 lpm" }, { k: "PA", v: "128/80 mmHg" },
      { k: "T°", v: "37.4 °C" }, { k: "SpO₂", v: "97 %" }
    ],
    examen: "Vesículas agrupadas sobre base eritematosa en un dermatoma torácico derecho (T5). Las lesiones no cruzan la línea media.",
    razonamiento: {
      consulta: "Un dolor quemante que aparece días antes que las lesiones sugiere que el problema empieza en un nervio, no en la piel.",
      exploracion: "Lesiones que siguen una franja de un solo lado y se detienen en la línea media corresponden al territorio de un nervio (dermatoma).",
      examenes: "En un cuadro típico el diagnóstico es clínico. Los exámenes se reservan para casos dudosos o pacientes inmunosuprimidos."
    },
    examenes: [
      { n: "Diagnóstico clínico", r: "Suficiente por la distribución típica" },
      { n: "PCR de líquido vesicular", r: "Solo si hay duda: detecta virus varicela-zóster" },
      { n: "Glucosa capilar", r: "128 mg/dL (control de su diabetes)" }
    ],
    diagnostico: "Herpes zóster torácico (reactivación del virus varicela-zóster)",
    diferencial: [
      { dx: "Herpes zóster", ok: true, razon: "Dolor previo, vesículas agrupadas en un solo dermatoma y antecedente de varicela." },
      { dx: "Dermatitis de contacto", ok: false, razon: "Predomina el picor y aparece donde la piel tocó una sustancia, no sigue un nervio." },
      { dx: "Impétigo", ok: false, razon: "Infección bacteriana con costras color miel, más frecuente en niños y sin dolor nervioso." },
      { dx: "Herpes simple", ok: false, razon: "Suele afectar labios o genitales y no forma una banda a lo largo del tórax." }
    ],
    tratamiento: [
      "Antiviral oral (aciclovir o valaciclovir), idealmente dentro de las primeras 72 horas.",
      "Analgésicos para el dolor agudo.",
      "Mantener las lesiones limpias y secas; no reventar las vesículas.",
      "Evitar contacto con embarazadas y personas no vacunadas hasta que se formen costras.",
      "Tras la recuperación, indicar la vacuna recombinante contra el zóster."
    ],
    alarma: ["Lesiones en la punta de la nariz o cerca del ojo (riesgo de daño ocular)", "Lesiones diseminadas por todo el cuerpo", "Paciente inmunosuprimido"],
    recomendaciones: [
      "Repasa la distribución de los dermatomas.",
      "Compara varicela (primoinfección) con herpes zóster (reactivación).",
      "Estudia la neuralgia postherpética, su complicación más frecuente."
    ],
    fuente: "msd"
  },
  {
    id: "oftal-01",
    codigo: "MC-OFT-01",
    titulo: "Ojo rojo y dolor intenso al salir del cine",
    especialidad: "Oftalmología",
    icono: "ojo",
    color: "#e3ebff",
    dificultad: "Avanzado",
    tiempo: 8,
    regiones: ["cabeza"],
    resumen: "Mujer con dolor ocular brusco, halos de colores alrededor de las luces y náuseas tras permanecer en un ambiente oscuro.",
    paciente: { nombre: "Sra. Elvira (ficticia)", edad: 62, sexo: "Femenino", ocupacion: "Comerciante", avatar: "E" },
    motivo: "Dolor muy fuerte en el ojo izquierdo, visión borrosa y vómitos.",
    enfermedadActual: "Inicia hace 3 horas, después de ver una película en el cine. Refiere halos de colores alrededor de las luces, dolor de cabeza del lado izquierdo y náuseas con un vómito.",
    antecedentes: ["Hipermetropía", "Hipertensión arterial", "Sin cirugías oculares previas"],
    vitales: [
      { k: "FC", v: "96 lpm" }, { k: "PA", v: "150/92 mmHg", alerta: true },
      { k: "T°", v: "36.8 °C" }, { k: "Agudeza OI", v: "Cuenta dedos", alerta: true }
    ],
    examen: "Ojo izquierdo con enrojecimiento alrededor de la córnea, córnea turbia, pupila en midriasis media que no reacciona a la luz. Al palpar, el globo ocular se siente duro.",
    razonamiento: {
      consulta: "La oscuridad dilata la pupila. En ojos hipermétropes, con un ángulo de drenaje estrecho, esto puede bloquear la salida del líquido del ojo.",
      exploracion: "Córnea turbia, pupila fija a medio dilatar y ojo duro indican que la presión dentro del ojo subió de forma brusca.",
      examenes: "Medir la presión intraocular confirma la sospecha en minutos; no hay que esperar otros estudios para tratar."
    },
    examenes: [
      { n: "Tonometría ojo izquierdo", r: "52 mmHg (normal: 10–21 mmHg)", alerta: true },
      { n: "Tonometría ojo derecho", r: "17 mmHg" },
      { n: "Gonioscopia", r: "Ángulo cerrado en el ojo izquierdo y estrecho en el derecho" }
    ],
    diagnostico: "Glaucoma agudo de ángulo cerrado del ojo izquierdo",
    diferencial: [
      { dx: "Glaucoma agudo de ángulo cerrado", ok: true, razon: "Presión intraocular muy alta, ángulo cerrado, córnea turbia y pupila fija." },
      { dx: "Conjuntivitis", ok: false, razon: "Causa secreción y molestia leve, pero no dolor intenso, pérdida de visión ni pupila fija." },
      { dx: "Uveítis anterior", ok: false, razon: "La pupila suele estar pequeña y la presión normal o baja." },
      { dx: "Migraña", ok: false, razon: "Puede dar dolor y náuseas, pero el ojo no se pone rojo ni duro." }
    ],
    tratamiento: [
      "Es una emergencia: el retraso puede causar ceguera en horas.",
      "Fármacos para bajar la presión: acetazolamida y gotas hipotensoras (por ejemplo timolol y pilocarpina).",
      "Analgésico y antiemético para el dolor y los vómitos.",
      "Derivar a oftalmología para iridotomía láser en el ojo afectado.",
      "Iridotomía preventiva en el otro ojo, que también tiene ángulo estrecho."
    ],
    alarma: ["Nunca aplicar gotas para dilatar la pupila", "Pérdida de visión progresiva", "Dolor ocular con halos y vómitos"],
    recomendaciones: [
      "Compara las causas de ojo rojo doloroso y no doloroso.",
      "Repasa la circulación del humor acuoso.",
      "Identifica fármacos que pueden desencadenar una crisis (anticolinérgicos, descongestionantes)."
    ],
    fuente: "aao"
  },
  {
    id: "orl-01",
    codigo: "MC-ORL-01",
    titulo: "Niño que llora y se jala la oreja",
    especialidad: "Otorrinolaringología",
    icono: "oido",
    color: "#fef1d6",
    dificultad: "Básico",
    tiempo: 5,
    regiones: ["cabeza"],
    resumen: "Preescolar con fiebre e irritabilidad días después de un resfriado común.",
    paciente: { nombre: "Mateo (ficticio)", edad: 3, sexo: "Masculino", ocupacion: "Asiste a guardería", avatar: "M" },
    motivo: "Fiebre, llanto y se toca la oreja derecha.",
    enfermedadActual: "Hace 5 días tuvo congestión nasal y tos. Desde ayer presenta fiebre de 38.6 °C, duerme mal, llora al acostarse y se toca la oreja derecha.",
    antecedentes: ["Vacunas completas para la edad", "Exposición a humo de tabaco en casa", "Sin alergias conocidas"],
    vitales: [
      { k: "FC", v: "118 lpm" }, { k: "FR", v: "24 rpm" },
      { k: "T°", v: "38.6 °C", alerta: true }, { k: "Peso", v: "14 kg" }
    ],
    examen: "Otoscopia derecha: membrana timpánica roja, opaca y abombada, con poca movilidad. Oído izquierdo normal. Faringe levemente congestiva.",
    razonamiento: {
      consulta: "En niños pequeños la trompa de Eustaquio es corta y horizontal: tras un resfriado, el oído medio se llena de líquido y se infecta con facilidad.",
      exploracion: "El hallazgo clave es el tímpano abombado. El enrojecimiento solo, por llanto o fiebre, no basta para diagnosticar otitis.",
      examenes: "El diagnóstico es clínico con la otoscopia. No se piden análisis de sangre en un caso típico."
    },
    examenes: [
      { n: "Otoscopia", r: "Tímpano derecho abombado, opaco y rojo" },
      { n: "Otoscopia neumática", r: "Movilidad del tímpano disminuida" },
      { n: "Análisis de laboratorio", r: "No necesarios" }
    ],
    diagnostico: "Otitis media aguda derecha",
    diferencial: [
      { dx: "Otitis media aguda", ok: true, razon: "Síntomas agudos con fiebre y tímpano abombado tras un resfriado." },
      { dx: "Otitis externa", ok: false, razon: "Duele al mover la oreja y el conducto está inflamado, con tímpano normal." },
      { dx: "Otitis media con efusión", ok: false, razon: "Hay líquido detrás del tímpano, pero sin fiebre ni signos de inflamación aguda." },
      { dx: "Cuerpo extraño", ok: false, razon: "Se vería un objeto en el conducto; no explica la fiebre." }
    ],
    tratamiento: [
      "Paracetamol o ibuprofeno para el dolor y la fiebre.",
      "Antibiótico de primera elección: amoxicilina, según edad y gravedad.",
      "En casos leves seleccionados se puede observar 48–72 horas con control asegurado.",
      "Control médico si no mejora en 2–3 días.",
      "Eliminar la exposición al humo de tabaco en casa."
    ],
    alarma: ["Hinchazón o enrojecimiento detrás de la oreja", "Rigidez de nuca o somnolencia excesiva", "Parálisis de un lado de la cara"],
    recomendaciones: [
      "Repasa la anatomía de la trompa de Eustaquio en niños.",
      "Estudia cuándo observar y cuándo dar antibiótico.",
      "Aprende a describir una otoscopia normal y una patológica."
    ],
    fuente: "aap"
  },
  {
    id: "reuma-01",
    codigo: "MC-REU-01",
    titulo: "Dedo gordo inflamado tras una celebración",
    especialidad: "Reumatología",
    icono: "articulacion",
    color: "#ffe9de",
    dificultad: "Intermedio",
    tiempo: 6,
    regiones: ["piernas"],
    resumen: "Varón que despierta de madrugada con dolor insoportable en el primer dedo del pie.",
    paciente: { nombre: "Sr. Ramiro (ficticio)", edad: 52, sexo: "Masculino", ocupacion: "Chofer", avatar: "R" },
    motivo: "Dolor intenso y enrojecimiento en el dedo gordo del pie derecho.",
    enfermedadActual: "Se despertó a las 3 a.m. con dolor muy fuerte en el dedo gordo; no tolera ni el roce de la sábana. La noche anterior asistió a una celebración con abundante carne y cerveza.",
    antecedentes: ["Obesidad (IMC 31)", "Hipertensión tratada con hidroclorotiazida", "Consumo frecuente de alcohol"],
    vitales: [
      { k: "FC", v: "90 lpm" }, { k: "PA", v: "142/88 mmHg", alerta: true },
      { k: "T°", v: "37.6 °C" }, { k: "Dolor", v: "9/10", alerta: true }
    ],
    examen: "Primera articulación metatarsofalángica derecha roja, caliente, muy hinchada y extremadamente dolorosa al tacto.",
    razonamiento: {
      consulta: "Comida rica en purinas, alcohol y un diurético tiazídico elevan el ácido úrico. El inicio brusco de madrugada es típico.",
      exploracion: "Una sola articulación roja y caliente obliga a pensar en dos cosas: gota o infección. La infección siempre debe descartarse.",
      examenes: "El análisis del líquido articular es el estudio definitivo: muestra cristales y permite descartar bacterias."
    },
    examenes: [
      { n: "Líquido articular (microscopio)", r: "Cristales de urato en forma de aguja, birrefringencia negativa", alerta: true },
      { n: "Gram y cultivo del líquido", r: "Sin bacterias" },
      { n: "Ácido úrico en sangre", r: "8.9 mg/dL (elevado)", alerta: true }
    ],
    diagnostico: "Crisis aguda de gota (podagra)",
    diferencial: [
      { dx: "Gota", ok: true, razon: "Podagra típica con cristales de urato en el líquido articular." },
      { dx: "Artritis séptica", ok: false, razon: "Gram y cultivo negativos. Es la causa que más importa descartar." },
      { dx: "Pseudogota", ok: false, razon: "Sus cristales son de pirofosfato, con forma romboidal, y suele afectar la rodilla." },
      { dx: "Celulitis", ok: false, razon: "Infección de la piel; no produce cristales en la articulación." }
    ],
    tratamiento: [
      "En la crisis: antiinflamatorio (AINE), colchicina o corticoide.",
      "Reposo de la articulación y frío local.",
      "Si las crisis se repiten: terapia para bajar el ácido úrico a largo plazo (por ejemplo alopurinol).",
      "Revisar con su médico el cambio de la hidroclorotiazida.",
      "Reducir alcohol, carnes rojas y mariscos; bajar de peso."
    ],
    alarma: ["Fiebre alta con escalofríos (pensar en infección)", "Varias articulaciones inflamadas a la vez", "Crisis frecuentes o bultos bajo la piel (tofos)"],
    recomendaciones: [
      "Estudia los alimentos ricos en purinas.",
      "Diferencia gota de artritis séptica.",
      "Repasa qué fármacos elevan el ácido úrico."
    ],
    fuente: "acr"
  },
  {
    id: "tox-01",
    codigo: "MC-TOX-01",
    titulo: "Agricultor que babea y suda tras fumigar",
    especialidad: "Toxicología",
    icono: "matraz",
    color: "#e6f7ee",
    dificultad: "Avanzado",
    tiempo: 8,
    regiones: ["torax", "cabeza"],
    resumen: "Trabajador del campo con secreciones abundantes, pupilas pequeñas y temblores musculares después de aplicar un plaguicida.",
    paciente: { nombre: "Sr. Faustino (ficticio)", edad: 35, sexo: "Masculino", ocupacion: "Agricultor", avatar: "F" },
    motivo: "Vómitos, mucha saliva, sudoración y dificultad para respirar.",
    enfermedadActual: "Hace 2 horas fumigó su cultivo sin guantes ni mascarilla. Luego presentó visión borrosa, salivación excesiva, sudoración, cólicos, diarrea y sensación de falta de aire.",
    antecedentes: ["Sano previamente", "Su ropa huele a químico", "El familiar trae el envase de un insecticida organofosforado"],
    vitales: [
      { k: "FC", v: "48 lpm", alerta: true }, { k: "PA", v: "96/60 mmHg", alerta: true },
      { k: "FR", v: "28 rpm", alerta: true }, { k: "SpO₂", v: "88 %", alerta: true }
    ],
    examen: "Pupilas puntiformes, salivación excesiva, lagrimeo, piel sudorosa, sibilancias y secreciones bronquiales abundantes. Fasciculaciones en brazos y piernas.",
    razonamiento: {
      consulta: "El antecedente de exposición sin protección y el envase del producto orientan desde el inicio hacia una intoxicación.",
      exploracion: "Todo \"moja\" al paciente: saliva, lágrimas, sudor y bronquios. Junto con pupilas pequeñas y bradicardia forman el síndrome colinérgico.",
      examenes: "El tratamiento no espera al laboratorio. La colinesterasa baja confirma la exposición, pero la decisión se basa en la clínica."
    },
    examenes: [
      { n: "Colinesterasa en sangre", r: "Muy disminuida", alerta: true },
      { n: "Gasometría arterial", r: "Hipoxemia (oxígeno bajo en sangre)", alerta: true },
      { n: "Electrocardiograma", r: "Bradicardia sinusal" }
    ],
    diagnostico: "Intoxicación aguda por plaguicida organofosforado (síndrome colinérgico)",
    diferencial: [
      { dx: "Intoxicación por organofosforados", ok: true, razon: "Exposición clara, síndrome colinérgico completo y colinesterasa baja." },
      { dx: "Intoxicación por opioides", ok: false, razon: "También da pupilas pequeñas, pero el paciente está seco, sin secreciones ni fasciculaciones." },
      { dx: "Crisis de asma", ok: false, razon: "Explica las sibilancias, pero no la salivación, la bradicardia ni las pupilas pequeñas." },
      { dx: "Gastroenteritis", ok: false, razon: "Explica la diarrea, pero no el compromiso respiratorio ni neurológico." }
    ],
    tratamiento: [
      "Personal con guantes y protección para no intoxicarse.",
      "Retirar la ropa y lavar la piel con agua y jabón.",
      "Asegurar vía aérea, respiración y circulación; administrar oxígeno.",
      "Atropina en dosis repetidas hasta lograr secreciones bronquiales secas.",
      "Oximas (como pralidoxima) según disponibilidad, y monitoreo en área crítica."
    ],
    alarma: ["Insuficiencia respiratoria", "Convulsiones o pérdida de conciencia", "Debilidad muscular que aparece días después (síndrome intermedio)"],
    recomendaciones: [
      "Memoriza los toxíndromes principales.",
      "Revisa las medidas de protección en el uso de plaguicidas.",
      "Estudia el objetivo clínico de la atropinización."
    ],
    fuente: "lancet"
  },
  {
    id: "psiq-01",
    codigo: "MC-PSQ-01",
    titulo: "Universitaria que cree que está teniendo un infarto",
    especialidad: "Salud mental",
    icono: "mente",
    color: "#efe9ff",
    dificultad: "Básico",
    tiempo: 5,
    regiones: ["cabeza", "torax"],
    resumen: "Estudiante joven con palpitaciones, sensación de ahogo y miedo intenso a morir en época de exámenes.",
    paciente: { nombre: "Camila (ficticia)", edad: 21, sexo: "Femenino", ocupacion: "Estudiante universitaria", avatar: "C" },
    motivo: "\"Siento que me voy a morir, el corazón me late muy fuerte\".",
    enfermedadActual: "Mientras estudiaba de noche presentó de forma súbita palpitaciones, falta de aire, hormigueo en las manos, mareo y miedo intenso a morir. Los síntomas llegaron a su máximo en 10 minutos. Es el tercer episodio en el mes y teme que se repita.",
    antecedentes: ["Sin enfermedades previas", "Alto consumo de café y bebidas energizantes", "Duerme 4–5 horas por la época de exámenes"],
    vitales: [
      { k: "FC", v: "104 lpm", alerta: true }, { k: "PA", v: "124/78 mmHg" },
      { k: "FR", v: "22 rpm" }, { k: "SpO₂", v: "99 %" }
    ],
    examen: "Ansiosa, respirando rápido. Corazón y pulmones normales. Sin otros hallazgos.",
    razonamiento: {
      consulta: "Síntomas físicos intensos que llegan a su máximo en minutos y se repiten orientan a crisis de pánico, pero primero hay que descartar causas físicas.",
      exploracion: "Un examen físico normal tranquiliza, pero no basta: arritmias, hipoglucemia o problemas de tiroides pueden imitar una crisis.",
      examenes: "Exámenes sencillos (ECG, glucosa, TSH) descartan las causas orgánicas más importantes. Nunca se asume que \"es solo ansiedad\"."
    },
    examenes: [
      { n: "Electrocardiograma", r: "Taquicardia sinusal, sin otras alteraciones" },
      { n: "Glucosa capilar", r: "94 mg/dL (normal)" },
      { n: "TSH", r: "1.8 mUI/L (normal)" }
    ],
    diagnostico: "Trastorno de pánico (con desencadenantes: cafeína y falta de sueño)",
    diferencial: [
      { dx: "Trastorno de pánico", ok: true, razon: "Crisis repetidas de miedo intenso con síntomas físicos y estudios normales." },
      { dx: "Infarto de miocardio", ok: false, razon: "Paciente joven sin factores de riesgo y ECG sin signos de isquemia." },
      { dx: "Hipertiroidismo", ok: false, razon: "La TSH es normal." },
      { dx: "Hipoglucemia", ok: false, razon: "La glucosa es normal durante el episodio." }
    ],
    tratamiento: [
      "Explicarle con claridad qué le ocurre y que no es peligroso para su vida (psicoeducación).",
      "Terapia cognitivo-conductual como primera línea.",
      "Antidepresivo ISRS si los episodios persisten o afectan su vida diaria.",
      "Reducir café y bebidas energizantes; mejorar el sueño.",
      "Las benzodiacepinas, si se usan, solo por periodos cortos."
    ],
    alarma: ["Dolor en el pecho con el esfuerzo o desmayo", "Ideas de hacerse daño", "Consumo de sustancias para controlar la ansiedad"],
    recomendaciones: [
      "Estudia los criterios diagnósticos del trastorno de pánico.",
      "Repasa las causas orgánicas de ansiedad.",
      "Aprende técnicas básicas de respiración para enseñar al paciente."
    ],
    fuente: "nice"
  },
  {
    id: "gine-01",
    codigo: "MC-GIN-01",
    titulo: "Dolor pélvico y retraso menstrual",
    especialidad: "Ginecología",
    icono: "femenino",
    color: "#ffe4ea",
    dificultad: "Avanzado",
    tiempo: 7,
    regiones: ["pelvis"],
    resumen: "Mujer joven con siete semanas de amenorrea, dolor abdominal bajo de un lado y sangrado escaso.",
    paciente: { nombre: "Sra. Lucía (ficticia)", edad: 27, sexo: "Femenino", ocupacion: "Docente", avatar: "L" },
    motivo: "Dolor fuerte en la parte baja del abdomen, lado izquierdo, y sangrado vaginal leve.",
    enfermedadActual: "Su última menstruación fue hace 7 semanas. Desde hoy tiene dolor pélvico izquierdo que va en aumento, sangrado vaginal escaso y se mareó al levantarse.",
    antecedentes: ["Infección pélvica tratada hace 3 años", "Fumadora", "Sin uso de anticonceptivos actualmente"],
    vitales: [
      { k: "FC", v: "118 lpm", alerta: true }, { k: "PA", v: "88/56 mmHg", alerta: true },
      { k: "T°", v: "36.6 °C" }, { k: "SpO₂", v: "98 %" }
    ],
    examen: "Pálida y sudorosa. Abdomen doloroso en el lado izquierdo con signos de irritación peritoneal. Dolor intenso al movilizar el cuello uterino.",
    razonamiento: {
      consulta: "En toda mujer en edad fértil con dolor abdominal y retraso menstrual hay que pensar en embarazo, y en especial en uno fuera del útero.",
      exploracion: "Pulso rápido y presión baja indican que podría estar perdiendo sangre por dentro: es una urgencia.",
      examenes: "La prueba de embarazo y la ecografía transvaginal permiten saber si hay embarazo y dónde está."
    },
    examenes: [
      { n: "β-hCG en sangre", r: "Positiva (2 800 mUI/mL)", alerta: true },
      { n: "Ecografía transvaginal", r: "Útero vacío, masa junto al ovario izquierdo y líquido libre", alerta: true },
      { n: "Hemoglobina", r: "9.8 g/dL (baja)", alerta: true }
    ],
    diagnostico: "Embarazo ectópico tubárico izquierdo roto, con sangrado interno",
    diferencial: [
      { dx: "Embarazo ectópico roto", ok: true, razon: "Prueba positiva con útero vacío, masa anexial, sangre libre e inestabilidad." },
      { dx: "Aborto espontáneo", ok: false, razon: "La gestación o sus restos se verían dentro del útero." },
      { dx: "Quiste ovárico roto", ok: false, razon: "Puede dar dolor y líquido libre, pero la prueba de embarazo sería negativa." },
      { dx: "Apendicitis", ok: false, razon: "Suele doler del lado derecho y no explica la prueba de embarazo positiva." }
    ],
    tratamiento: [
      "Dos vías venosas, sueros y reserva de sangre.",
      "Cirugía de urgencia (generalmente laparoscopia) para detener el sangrado.",
      "El tratamiento con metotrexato solo es una opción en pacientes estables.",
      "Inmunoglobulina anti-D si la paciente es Rh negativa.",
      "Apoyo emocional y seguimiento de la β-hCG."
    ],
    alarma: ["Presión baja y pulso rápido", "Dolor en el hombro (sangre bajo el diafragma)", "Desmayo"],
    recomendaciones: [
      "Repasa el diagnóstico diferencial del dolor pélvico agudo.",
      "Estudia los factores de riesgo del embarazo ectópico.",
      "Compara el tratamiento médico y el quirúrgico."
    ],
    fuente: "acog"
  },
  {
    id: "trauma-01",
    codigo: "MC-TRA-01",
    titulo: "Caída sobre la mano extendida",
    especialidad: "Traumatología",
    icono: "hueso",
    color: "#e7eef6",
    dificultad: "Básico",
    tiempo: 5,
    regiones: ["brazos"],
    resumen: "Adulta mayor que se cae en la calle, apoya la mano y presenta deformidad en la muñeca.",
    paciente: { nombre: "Sra. Rosa (ficticia)", edad: 70, sexo: "Femenino", ocupacion: "Ama de casa", avatar: "R" },
    motivo: "Dolor y deformidad en la muñeca derecha tras una caída.",
    enfermedadActual: "Hace una hora resbaló en la vereda y cayó apoyando la palma de la mano derecha. Presenta dolor intenso, hinchazón y no puede mover la muñeca.",
    antecedentes: ["Menopausia hace 20 años", "Nunca se ha realizado densitometría ósea", "Vida sedentaria"],
    vitales: [
      { k: "FC", v: "92 lpm" }, { k: "PA", v: "136/82 mmHg" },
      { k: "T°", v: "36.5 °C" }, { k: "Dolor", v: "8/10", alerta: true }
    ],
    examen: "Muñeca derecha con deformidad en \"dorso de tenedor\", hinchazón y dolor en el extremo del radio. Pulso presente y buena sensibilidad en los dedos.",
    razonamiento: {
      consulta: "Una caída desde su propia altura que causa fractura sugiere huesos frágiles. El mecanismo (mano extendida) orienta a la muñeca.",
      exploracion: "Antes que nada se revisan pulso y sensibilidad de los dedos. La deformidad en \"dorso de tenedor\" es muy característica.",
      examenes: "La radiografía en dos proyecciones confirma la fractura y muestra cuánto se desplazó, lo que define el tratamiento."
    },
    examenes: [
      { n: "Radiografía de muñeca (frente y perfil)", r: "Fractura del radio distal con desplazamiento dorsal", alerta: true },
      { n: "Evaluación neurovascular", r: "Pulso y sensibilidad conservados" },
      { n: "Densitometría (posterior)", r: "T-score −2.8: osteoporosis", alerta: true }
    ],
    diagnostico: "Fractura de Colles (radio distal) por fragilidad ósea",
    diferencial: [
      { dx: "Fractura de Colles", ok: true, razon: "Caída sobre la mano extendida, deformidad típica y radiografía confirmatoria." },
      { dx: "Esguince de muñeca", ok: false, razon: "No produce deformidad y la radiografía es normal." },
      { dx: "Fractura de escafoides", ok: false, razon: "Duele en la base del pulgar y no deforma la muñeca." },
      { dx: "Fractura de Smith", ok: false, razon: "El fragmento se desplaza hacia la palma; suele ocurrir al caer sobre el dorso de la mano." }
    ],
    tratamiento: [
      "Analgesia e inmovilización inicial.",
      "Reducción cerrada y yeso, o cirugía si la fractura es inestable.",
      "Rehabilitación para recuperar la movilidad.",
      "Tratamiento de la osteoporosis, calcio y vitamina D.",
      "Plan de prevención de caídas en casa."
    ],
    alarma: ["Dedos fríos, pálidos o morados", "Adormecimiento de los dedos", "Dolor que aumenta bajo el yeso"],
    recomendaciones: [
      "Repasa la evaluación neurovascular de una extremidad lesionada.",
      "Estudia las fracturas por fragilidad.",
      "Compara la fractura de Colles con la de Smith."
    ],
    fuente: "aaos"
  },
  {
    id: "endo-01",
    codigo: "MC-END-01",
    titulo: "Cansancio, frío y aumento de peso",
    especialidad: "Endocrinología",
    icono: "tiroides",
    color: "#dff3fb",
    dificultad: "Intermedio",
    tiempo: 6,
    regiones: ["cuello"],
    resumen: "Mujer de mediana edad con fatiga progresiva, intolerancia al frío y piel seca durante varios meses.",
    paciente: { nombre: "Sra. Marta (ficticia)", edad: 45, sexo: "Femenino", ocupacion: "Contadora", avatar: "M" },
    motivo: "\"Me siento cansada todo el tiempo y subí de peso sin comer más\".",
    enfermedadActual: "Desde hace 6 meses nota cansancio, somnolencia, aumento de 6 kg, estreñimiento, caída del cabello y siente frío cuando los demás no. Sus menstruaciones son más abundantes.",
    antecedentes: ["Madre con enfermedad de la tiroides", "Vitíligo", "Sin medicamentos habituales"],
    vitales: [
      { k: "FC", v: "56 lpm", alerta: true }, { k: "PA", v: "118/84 mmHg" },
      { k: "T°", v: "36.1 °C" }, { k: "Peso", v: "74 kg" }
    ],
    examen: "Piel seca y fría, cabello quebradizo, leve hinchazón alrededor de los ojos. Tiroides algo aumentada de tamaño, no dolorosa. Reflejos con relajación lenta.",
    razonamiento: {
      consulta: "Muchos síntomas a la vez que indican un cuerpo \"en cámara lenta\" (cansancio, frío, estreñimiento, aumento de peso) apuntan a la tiroides.",
      exploracion: "Bradicardia, piel seca y reflejos lentos refuerzan la sospecha. El vitíligo y la historia familiar sugieren una causa autoinmune.",
      examenes: "La TSH es la prueba inicial. Si está alta y la T4 libre baja, la tiroides está fallando."
    },
    examenes: [
      { n: "TSH", r: "18 mUI/L (alta)", alerta: true },
      { n: "T4 libre", r: "0.5 ng/dL (baja)", alerta: true },
      { n: "Anticuerpos anti-TPO", r: "Positivos" },
      { n: "Hemoglobina", r: "12.8 g/dL (normal)" }
    ],
    diagnostico: "Hipotiroidismo primario por tiroiditis de Hashimoto",
    diferencial: [
      { dx: "Hipotiroidismo (Hashimoto)", ok: true, razon: "TSH alta, T4 libre baja y anticuerpos anti-TPO positivos." },
      { dx: "Depresión", ok: false, razon: "Explica el cansancio, pero no el frío, la bradicardia ni la TSH alta." },
      { dx: "Anemia", ok: false, razon: "La hemoglobina es normal." },
      { dx: "Hipertiroidismo", ok: false, razon: "Cuadro opuesto: calor, pérdida de peso, taquicardia y TSH baja." }
    ],
    tratamiento: [
      "Levotiroxina oral una vez al día, en ayunas.",
      "Tomarla separada de calcio, hierro y café.",
      "Control de TSH cada 6–8 semanas hasta ajustar la dosis.",
      "En general el tratamiento es de por vida.",
      "Explicar que la mejoría de los síntomas toma algunas semanas."
    ],
    alarma: ["Somnolencia extrema o confusión", "Temperatura corporal muy baja", "Respiración lenta (posible coma mixedematoso)"],
    recomendaciones: [
      "Construye una tabla comparativa de hipo- e hipertiroidismo.",
      "Repasa el eje hipotálamo–hipófisis–tiroides.",
      "Estudia la asociación de Hashimoto con otras enfermedades autoinmunes."
    ],
    fuente: "ata"
  }
];

// Regiones del mapa corporal
const REGIONES = {
  cabeza: { nombre: "Cabeza y sentidos", desc: "Ojos, oídos y sistema nervioso." },
  cuello: { nombre: "Cuello", desc: "Tiroides y estructuras del cuello." },
  torax: { nombre: "Tórax", desc: "Piel del tronco, pulmones y corazón." },
  pelvis: { nombre: "Abdomen y pelvis", desc: "Órganos reproductores y abdomen bajo." },
  brazos: { nombre: "Brazos y manos", desc: "Huesos y articulaciones del miembro superior." },
  piernas: { nombre: "Piernas y pies", desc: "Huesos y articulaciones del miembro inferior." }
};
