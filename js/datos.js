/* =========================================================
   MediCaso – Contenido educativo
   Todos los pacientes son FICTICIOS. No se usan datos reales.
   Glosario y fuentes bibliográficas.
   Los casos clínicos están en js/casos.js.
   ========================================================= */

const GLOSARIO = [
  { t: "Acetilcolinesterasa", cat: "Bioquímica", d: "Enzima que destruye la acetilcolina para que el nervio deje de enviar la señal. Si se bloquea, la señal se queda \"encendida\".", ej: "Los plaguicidas organofosforados la inhiben." },
  { t: "Amenorrea", cat: "Ginecología", d: "Ausencia de menstruación. Puede deberse a embarazo, estrés, cambios hormonales u otras causas.", ej: "Siete semanas de amenorrea obligan a descartar embarazo." },
  { t: "Antídoto", cat: "Toxicología", d: "Sustancia que neutraliza o contrarresta los efectos de un tóxico." },
  { t: "Artrocentesis", cat: "Procedimiento", d: "Punción con aguja de una articulación para sacar líquido y analizarlo o aliviar la presión." },
  { t: "Anticuerpos anti-TPO", cat: "Laboratorio", d: "Defensas que atacan por error a la tiroides. Su presencia indica una causa autoinmune, como la tiroiditis de Hashimoto." },
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
  { t: "Gonioscopia", cat: "Examen", d: "Revisión con una lente especial del ángulo por donde drena el líquido del ojo, para saber si está abierto o cerrado." },
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
