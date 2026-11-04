/* =====================================================================
   MI PERRO, MI RAZA · CONTENIDO DE LAS RAZAS
   ---------------------------------------------------------------------
   Para agregar un lote nuevo: pega los objetos nuevos ANTES del "];"
   del final, separados por coma. Cada raza usa un "id" único, en
   minúsculas y sin acentos (es también el nombre de la foto: img/<id>.jpg).
   grupo: "pequena" | "mediana" | "grande" | "mestizo"
   Mestizos: usa los id "mestizo-pequeno-tranquilo", "mestizo-pequeno-activo",
   "mestizo-mediano-tranquilo", "mestizo-mediano-activo",
   "mestizo-grande-tranquilo" y "mestizo-grande-activo".
   ===================================================================== */
const RAZAS = [

  /* ---------- 1. CHIHUAHUA ---------- */
  {
    id: "chihuahua",
    nombre: "Chihuahua",
    grupo: "pequena",
    tamano: "Muy pequeño",
    peso: "1,5 a 3 kg",
    vida: "14 a 16 años",
    energia: 3,
    asi_es: "Pequeño en tamaño, pero con una personalidad enorme. El Chihuahua es muy apegado a su familia y suele elegir a una persona favorita. Es alerta, valiente y algo desconfiado con los desconocidos, por eso ladra para avisar de todo. Le encanta el calor, las mantas y estar en tu regazo. Con una buena socialización desde cachorro, es un compañero cariñoso, divertido y muy leal.",
    alimentacion: {
      necesidades: "Tiene un metabolismo rápido y un estómago muy pequeño, así que le van mejor porciones chicas repartidas en el día. Como pesa tan poco, unos gramos de más ya son mucho para él: cuida los premios y los restos de la mesa. Corta la comida en trozos pequeños, fáciles de masticar para su boca diminuta.",
      porcion: "Usa la Tabla de Porción por Peso de Cocina Peluda y pésalo cada mes para ajustar. Cachorro: 3 a 4 comidas pequeñas al día, para evitar bajadas de azúcar. Adulto: 2 comidas al día. Senior: 2 comidas, con porciones algo menores si se mueve menos, y comida más blanda si le cuesta masticar.",
      recetas_recomendadas: [
        "Recetas de pollo con arroz y zanahoria, en trozos muy pequeños",
        "Recetas suaves y húmedas, fáciles de masticar",
        "Premios caseros mini, contando siempre las calorías del día"
      ]
    },
    salud: [
      {
        problema: "Luxación de rótula",
        que_es: "La rótula (el huesito de la rodilla) se sale de su lugar. Es muy común en razas pequeñas.",
        senales: "Cojea a ratos, da unos pasos con una pata trasera levantada y luego camina normal, o evita saltar.",
        ir_al_veterinario_si: "Cojea seguido, se queja al tocarle la pata o deja de apoyarla."
      },
      {
        problema: "Problemas dentales",
        que_es: "Su boca es tan pequeña que los dientes quedan apretados y acumulan sarro con facilidad.",
        senales: "Mal aliento, encías rojas, sarro amarillo o café, o mastica de un solo lado.",
        ir_al_veterinario_si: "Tiene sangrado en las encías, un diente flojo, deja de comer o le duele la boca."
      },
      {
        problema: "Bajadas de azúcar (hipoglucemia) en cachorros",
        que_es: "Los cachorros muy pequeños pueden quedarse sin energía si pasan muchas horas sin comer.",
        senales: "Debilidad, temblores, se ve desorientado, camina tambaleándose o está muy decaído.",
        ir_al_veterinario_si: "Ves cualquiera de estas señales: es una urgencia, llama a tu veterinario de inmediato."
      },
      {
        problema: "Colapso de tráquea",
        que_es: "Los anillos de la tráquea se debilitan y el aire pasa con dificultad.",
        senales: "Tos seca que suena como un ganso (graznido), sobre todo al emocionarse o al jalar la correa.",
        ir_al_veterinario_si: "La tos es frecuente, le cuesta respirar o sus encías se ven moradas o grises."
      }
    ],
    educacion: [
      {
        problema: "Ladra por todo",
        por_que: "Es un perro de alerta: avisa cada ruido o persona nueva. No lo hace para molestarte.",
        pasos: [
          "Cuando ladre, espera unos segundos de silencio y prémialo justo en ese momento.",
          "Enséñale una palabra como \"gracias\" o \"listo\" y prémialo cuando se calle al oírla.",
          "Acostúmbralo poco a poco a los ruidos de la casa (timbre, puerta) con premios cuando se mantenga tranquilo."
        ]
      },
      {
        problema: "Hace sus necesidades dentro de casa",
        por_que: "Su vejiga es muy pequeña y no le gusta salir cuando hace frío o llueve.",
        pasos: [
          "Llévalo a su lugar de baño al despertar, después de comer y después de jugar.",
          "Cuando lo haga en el lugar correcto, felicítalo y dale un premio en ese mismo instante.",
          "Si tiene un accidente, límpialo sin regañarlo y usa un limpiador que quite bien el olor."
        ]
      },
      {
        problema: "Gruñe o se asusta cuando lo cargan",
        por_que: "Al ser tan pequeño, que lo levanten de golpe lo hace sentir inseguro.",
        pasos: [
          "Avísale con una palabra (por ejemplo \"arriba\") antes de cargarlo.",
          "Levántalo siempre con las dos manos, sosteniendo el pecho y la parte de atrás.",
          "Pide a las visitas que lo dejen acercarse solo, y prémialo cuando lo haga con calma."
        ]
      }
    ],
    ejercicio: {
      minutos: "Unos 30 minutos al día, repartidos en 2 o 3 momentos.",
      paseo: "Paseos cortos y tranquilos. Usa pechera en lugar de collar para no presionar su cuello.",
      juegos: [
        "Pelotitas suaves y peluches de su tamaño dentro de casa",
        "Esconder premios para que los busque con el olfato",
        "Enseñarle trucos sencillos como sentarse o dar la pata"
      ],
      cuidado: "Siente mucho el frío: abrígalo en días fríos. Cuidado con los saltos desde el sofá o la cama y con perros grandes en el parque."
    },
    pelo: {
      cepillado: "Pelo corto: una vez por semana. Pelo largo: 2 o 3 veces por semana.",
      bano: "Cada 3 o 4 semanas, o cuando esté sucio. Sécalo muy bien para que no pase frío.",
      unas: "Revísalas cada 3 o 4 semanas. Si suenan al caminar sobre el piso, ya toca cortarlas.",
      orejas_ojos: "Revisa sus orejas cada semana y limpia el lagrimeo de los ojos con una gasa húmeda. Cepilla sus dientes, idealmente todos los días."
    },
    etapas: {
      cachorro: "Comidas pequeñas y frecuentes, mucha socialización suave con personas y sonidos, y cuidado con caídas: sus huesos son muy frágiles.",
      adulto: "Mantén su peso estable, paseos diarios y cuidado de los dientes. Revisión con el veterinario una vez al año.",
      senior: "Puede necesitar comida más blanda, más abrigo y rampas para subir al sofá. Revisiones con el veterinario más seguido."
    },
    curiosos: [
      "Su nombre viene del estado de Chihuahua, en el norte de México.",
      "Muchos cachorros nacen con una \"molera\": una zona blanda en la cabeza, como los bebés. En algunos se cierra y en otros no."
    ]
  },

  /* ---------- 2. SHIH TZU ---------- */
  {
    id: "shih-tzu",
    nombre: "Shih Tzu",
    grupo: "pequena",
    tamano: "Pequeño",
    peso: "4 a 7 kg",
    vida: "10 a 16 años",
    energia: 2,
    asi_es: "El Shih Tzu nació para ser compañero, y se nota. Es cariñoso, alegre y amigable con casi todo el mundo, incluidos niños y otras mascotas. No necesita mucho ejercicio y se adapta muy bien a vivir en departamento. Puede ser algo testarudo, pero responde muy bien a los premios y al cariño. Su cara chata y su pelo largo necesitan cuidados especiales.",
    alimentacion: {
      necesidades: "Tiende a subir de peso con facilidad porque se mueve poco. Por su cara chata, le cuesta agarrar trozos grandes: dale la comida picada en trozos pequeños y en un plato bajo y ancho. Limpia su cara después de comer para que los restos no irriten la piel.",
      porcion: "Usa la Tabla de Porción por Peso de Cocina Peluda. Cachorro: 3 a 4 comidas al día. Adulto: 2 comidas al día, sin pasarte con los premios. Senior: 2 comidas, con porciones ajustadas a su actividad y comida más blanda si tiene problemas en los dientes.",
      recetas_recomendadas: [
        "Recetas ligeras con pollo y verduras, bajas en grasa",
        "Recetas con pescado blanco cocido, para ayudar a cuidar su pelo",
        "Recetas en textura de puré o trozos muy pequeños"
      ]
    },
    salud: [
      {
        problema: "Problemas en los ojos",
        que_es: "Sus ojos son grandes y salientes, así que se irritan, se rayan o se lastiman con facilidad.",
        senales: "Ojo rojo, lagrimeo abundante, legañas verdes o amarillas, entrecierra el ojo o se lo frota.",
        ir_al_veterinario_si: "Ves el ojo rojo, nublado o cerrado, o si se lo frota: los problemas del ojo empeoran rápido."
      },
      {
        problema: "Dificultad para respirar (cara chata)",
        que_es: "Por su hocico corto, el aire pasa con más dificultad, sobre todo con calor o ejercicio.",
        senales: "Ronca mucho, respira con ruido, se cansa rápido o jadea mucho con el calor.",
        ir_al_veterinario_si: "Le cuesta respirar, se desmaya o sus encías se ven moradas: es una urgencia."
      },
      {
        problema: "Otitis (infección de oídos)",
        que_es: "Sus orejas caídas y con mucho pelo guardan humedad, lo que favorece las infecciones.",
        senales: "Se rasca las orejas, sacude la cabeza, mal olor o secreción oscura en el oído.",
        ir_al_veterinario_si: "Hay mal olor, dolor al tocarlo, la oreja está hinchada o inclina la cabeza."
      },
      {
        problema: "Problemas dentales",
        que_es: "Su mandíbula pequeña hace que los dientes queden apretados y acumulen sarro.",
        senales: "Mal aliento, sarro, encías rojas o le cuesta masticar.",
        ir_al_veterinario_si: "Las encías sangran, tiene un diente flojo o deja de comer."
      }
    ],
    educacion: [
      {
        problema: "Le cuesta aprender a ir al baño",
        por_que: "Es una raza conocida por tardar un poco más en aprender dónde hacer sus necesidades.",
        pasos: [
          "Llévalo siempre al mismo lugar, a las mismas horas: al despertar, después de comer y antes de dormir.",
          "Prémialo con entusiasmo en el momento exacto en que termina en el lugar correcto.",
          "Ten paciencia y constancia: si hay un accidente, limpia sin regañar y vuelve a la rutina."
        ]
      },
      {
        problema: "Se pone triste o llora cuando se queda solo",
        por_que: "Fue criado durante siglos para estar siempre junto a las personas.",
        pasos: [
          "Practica salidas muy cortas (1 o 2 minutos) y vuelve antes de que se angustie.",
          "Al salir, déjale un juguete con premios escondidos para que se entretenga.",
          "Sal y entra con calma, sin despedidas largas ni saludos muy emocionados."
        ]
      },
      {
        problema: "Muerde manos y cosas de cachorro",
        por_que: "Los cachorros exploran con la boca y muerden más cuando les están saliendo los dientes.",
        pasos: [
          "Cuando muerda tu mano, deja de jugar unos segundos con calma.",
          "Ofrécele un juguete para morder y prémialo cuando lo use.",
          "Retoma el juego solo cuando esté tranquilo, para que aprenda qué juego sí funciona."
        ]
      }
    ],
    ejercicio: {
      minutos: "Entre 20 y 30 minutos al día.",
      paseo: "Paseos tranquilos, a su ritmo. Usa pechera para no apretar su cuello.",
      juegos: [
        "Juegos suaves de buscar su juguete dentro de casa",
        "Alfombras olfativas con premios escondidos",
        "Aprender trucos cortos con premios"
      ],
      cuidado: "Por su cara chata, evita el ejercicio en las horas de calor. Siempre agua fresca y sombra."
    },
    pelo: {
      cepillado: "Pelo largo: todos los días, para evitar nudos. Si lo llevas con corte corto, 2 o 3 veces por semana.",
      bano: "Cada 3 o 4 semanas. Sécalo por completo, sobre todo orejas y pliegues de la cara.",
      unas: "Cada 3 o 4 semanas, o cuando suenen al caminar.",
      orejas_ojos: "Limpia el lagrimeo todos los días con una gasa húmeda. Recoge el pelo de la cara con una colita o recórtalo para que no le toque los ojos. Revisa sus orejas cada semana."
    },
    etapas: {
      cachorro: "Acostúmbralo desde pequeño al cepillado, al baño y a que le toquen la cara y las patas, siempre con premios.",
      adulto: "Controla su peso, cuida sus ojos y dientes, y llévalo al peluquero cada 4 a 6 semanas si tiene el pelo largo.",
      senior: "Revisa más seguido ojos, dientes y oídos. Puede necesitar paseos más cortos y comida más blanda."
    },
    curiosos: [
      "\"Shih Tzu\" significa \"pequeño león\" en chino.",
      "Fue el perro de compañía favorito en el palacio imperial de China durante siglos."
    ]
  },

  /* ---------- 3. POODLE ---------- */
  {
    id: "poodle",
    nombre: "Poodle (Caniche)",
    grupo: "pequena",
    tamano: "De toy a grande, según la variedad",
    peso: "Toy: 2 a 4 kg · Mini: 4 a 7 kg · Estándar: 20 a 30 kg aprox.",
    vida: "12 a 15 años",
    energia: 4,
    asi_es: "El Poodle es uno de los perros más inteligentes que existen. Aprende rápido, le encanta complacer a su familia y disfruta los retos. Es alegre, activo y muy cariñoso. Hay varios tamaños (toy, mini, mediano y estándar), y todos comparten el mismo carácter. Su pelo rizado casi no se cae, pero necesita cuidado frecuente. Si se aburre, puede ladrar o volverse travieso.",
    alimentacion: {
      necesidades: "Sus necesidades cambian mucho según el tamaño: un toy come muy poco, y un estándar bastante más. Es activo, así que necesita buena proteína. Algunos tienen el estómago sensible: haz los cambios de comida poco a poco.",
      porcion: "Usa la Tabla de Porción por Peso de Cocina Peluda con el peso real de tu Poodle. Cachorro: 3 a 4 comidas al día (los toy, con especial cuidado de no pasar muchas horas sin comer). Adulto: 2 comidas al día. Senior: 2 comidas, con porciones ajustadas si se mueve menos. En el estándar, evita que haga ejercicio intenso justo antes o después de comer.",
      recetas_recomendadas: [
        "Recetas con pollo o pavo y verduras, para su energía diaria",
        "Recetas con pescado blanco, para ayudar a cuidar su pelo y su piel",
        "Recetas suaves para estómago sensible durante los cambios"
      ]
    },
    salud: [
      {
        problema: "Luxación de rótula (toy y mini)",
        que_es: "La rótula se sale de su lugar. Es común en los tamaños pequeños.",
        senales: "Cojea a ratos, da saltitos con una pata trasera levantada o evita saltar.",
        ir_al_veterinario_si: "Cojea seguido, se queja o deja de apoyar la pata."
      },
      {
        problema: "Problemas en los ojos",
        que_es: "La raza puede tener cataratas o una pérdida de visión progresiva que aparece con los años.",
        senales: "Ojos nublados o grisáceos, choca con muebles, le da miedo moverse de noche o en lugares oscuros.",
        ir_al_veterinario_si: "Notas cualquier cambio en sus ojos o en cómo ve."
      },
      {
        problema: "Otitis (infección de oídos)",
        que_es: "Le crece pelo dentro del oído, lo que guarda humedad y suciedad.",
        senales: "Se rasca las orejas, sacude la cabeza, mal olor o secreción.",
        ir_al_veterinario_si: "Hay mal olor, dolor, hinchazón o inclina la cabeza."
      },
      {
        problema: "Estómago hinchado (Poodle estándar)",
        que_es: "En perros grandes de pecho profundo, el estómago puede llenarse de gas y girarse. Es una emergencia.",
        senales: "Abdomen hinchado y duro, intenta vomitar sin sacar nada, está inquieto o babea mucho.",
        ir_al_veterinario_si: "Ves estas señales: ve de inmediato al veterinario o a la clínica 24 horas."
      }
    ],
    educacion: [
      {
        problema: "Se aburre y hace travesuras",
        por_que: "Es muy inteligente: si su mente no tiene nada que hacer, busca su propia diversión.",
        pasos: [
          "Dale cada día unos minutos de entrenamiento con premios: le encanta aprender.",
          "Usa juguetes rellenables o alfombras olfativas para que trabaje su cabeza.",
          "Premia los momentos en que está tranquilo, para que entienda que la calma también trae cosas buenas."
        ]
      },
      {
        problema: "Salta sobre las personas para saludar",
        por_que: "Es muy alegre y quiere llegar a tu cara para saludarte.",
        pasos: [
          "Cuando salte, date vuelta con calma y no le hables ni lo toques.",
          "En cuanto tenga las cuatro patas en el piso, salúdalo y dale un premio.",
          "Enséñale a sentarse para saludar y pide a las visitas que hagan lo mismo."
        ]
      },
      {
        problema: "Ladra mucho",
        por_que: "Es un perro sensible y atento: avisa todo y también ladra cuando se aburre.",
        pasos: [
          "Asegúrate de que tenga suficiente ejercicio y juegos de cabeza cada día.",
          "Prémialo justo en los momentos de silencio después de ladrar.",
          "Enséñale una señal de \"calma\" y practícala primero con ruidos suaves."
        ]
      }
    ],
    ejercicio: {
      minutos: "Toy y mini: unos 30 a 45 minutos al día. Estándar: 60 minutos o más.",
      paseo: "Paseos diarios con tiempo para olfatear. El estándar disfruta caminatas largas.",
      juegos: [
        "Traer la pelota",
        "Aprender trucos nuevos cada semana",
        "Juegos de olfato y de esconder premios"
      ],
      cuidado: "Muchos Poodles disfrutan nadar. Si lo dejas, vigílalo siempre y sécale bien las orejas después."
    },
    pelo: {
      cepillado: "De 3 a 7 veces por semana, hasta la piel, para que no se formen nudos.",
      bano: "Cada 3 a 6 semanas, normalmente junto con el corte de peluquería.",
      unas: "Cada 3 o 4 semanas.",
      orejas_ojos: "Revisa sus orejas cada semana y mantenlas secas. Limpia el lagrimeo con una gasa húmeda. Cepilla sus dientes, idealmente cada día."
    },
    etapas: {
      cachorro: "Socialización y entrenamiento desde temprano: aprende muy rápido. Acostúmbralo al cepillado y al secador con premios.",
      adulto: "Ejercicio y juegos de cabeza todos los días. Peluquería cada 4 a 6 semanas.",
      senior: "Revisiones más frecuentes de ojos, dientes y articulaciones. Paseos más cortos pero diarios."
    },
    curiosos: [
      "Aunque se asocia con Francia, se cree que se originó en Alemania como perro de agua: su nombre viene del alemán \"pudel\", relacionado con chapotear.",
      "Su pelo crece de forma continua y casi no se cae, por eso necesita cortes regulares."
    ]
  },

  /* ---------- 4. YORKSHIRE ---------- */
  {
    id: "yorkshire",
    nombre: "Yorkshire Terrier",
    grupo: "pequena",
    tamano: "Muy pequeño",
    peso: "Hasta 3,2 kg",
    vida: "11 a 15 años",
    energia: 4,
    asi_es: "El Yorkshire es un terrier en miniatura: valiente, curioso y lleno de energía. Es muy cariñoso con su familia y le encanta ser el centro de atención. Puede ser mandón y ladrador si no le enseñas con paciencia. Se adapta muy bien a la vida en departamento. Su pelo largo y sedoso es parecido al pelo humano y necesita cepillado frecuente.",
    alimentacion: {
      necesidades: "Come muy poquito, pero gasta mucha energía. Los cachorros pequeños no deben pasar muchas horas sin comer. Tiende a acumular sarro, así que la comida en trozos pequeños y el cuidado dental son clave. Algunos tienen el estómago delicado: cambia la comida de forma gradual.",
      porcion: "Usa la Tabla de Porción por Peso de Cocina Peluda y pésalo cada mes. Cachorro: 3 a 4 comidas pequeñas al día. Adulto: 2 comidas al día. Senior: 2 comidas, con porciones algo menores y textura más blanda si le cuesta masticar.",
      recetas_recomendadas: [
        "Recetas de pollo y arroz en trozos mini",
        "Recetas suaves para estómago delicado",
        "Recetas con pescado blanco, para ayudar a cuidar su pelo"
      ]
    },
    salud: [
      {
        problema: "Problemas dentales",
        que_es: "Sus dientes quedan muy juntos y a veces los de leche no se caen solos.",
        senales: "Mal aliento, sarro, encías rojas o dos dientes en el mismo lugar.",
        ir_al_veterinario_si: "Ves dientes de leche que no se caen después de los 6 meses, sangrado o dolor al comer."
      },
      {
        problema: "Colapso de tráquea",
        que_es: "La tráquea se debilita y el aire pasa con dificultad.",
        senales: "Tos seca como graznido de ganso, sobre todo al emocionarse o al jalar la correa.",
        ir_al_veterinario_si: "La tos es frecuente, le cuesta respirar o sus encías se ven moradas."
      },
      {
        problema: "Luxación de rótula",
        que_es: "La rótula se sale de su lugar por momentos.",
        senales: "Cojea a ratos o camina unos pasos con una pata trasera levantada.",
        ir_al_veterinario_si: "Cojea seguido, se queja o no apoya la pata."
      },
      {
        problema: "Bajadas de azúcar (hipoglucemia) en cachorros",
        que_es: "Los cachorros muy pequeños pueden quedarse sin energía si no comen seguido.",
        senales: "Debilidad, temblores, desorientación o mucho sueño fuera de lo normal.",
        ir_al_veterinario_si: "Ves cualquiera de estas señales: llama a tu veterinario de inmediato."
      }
    ],
    educacion: [
      {
        problema: "Ladra mucho",
        por_que: "Es un terrier: fue criado para estar alerta y avisar.",
        pasos: [
          "Prémialo cuando se quede en silencio después de ladrar.",
          "Enséñale una palabra de \"listo\" y prémialo cuando la respete.",
          "Dale suficiente juego y ejercicio: un Yorkshire cansado ladra menos."
        ]
      },
      {
        problema: "Se pone mandón o celoso",
        por_que: "Es muy seguro de sí mismo y puede querer controlar sus juguetes, su cama o a su persona favorita.",
        pasos: [
          "Enséñale a cambiar: tú le das un premio y él suelta el juguete.",
          "Pide un \"sentado\" antes de darle comida, juguetes o caricias.",
          "Prémialo cuando esté tranquilo cerca de otras personas o mascotas."
        ]
      },
      {
        problema: "Hace sus necesidades dentro de casa",
        por_que: "Su vejiga es muy pequeña y le cuesta aguantar.",
        pasos: [
          "Sácalo o llévalo a su tapete con frecuencia, sobre todo después de comer y de dormir.",
          "Prémialo en el momento exacto en que lo hace en el lugar correcto.",
          "Limpia los accidentes sin regañarlo, con un limpiador que quite bien el olor."
        ]
      }
    ],
    ejercicio: {
      minutos: "Unos 30 minutos al día, en paseos cortos y juegos.",
      paseo: "Le encanta explorar. Usa pechera en lugar de collar para cuidar su tráquea.",
      juegos: [
        "Buscar juguetes escondidos",
        "Juegos de jalar suave con un peluche",
        "Trucos cortos con premios"
      ],
      cuidado: "Siente el frío: abrígalo en días fríos. Cuidado con los saltos altos y con perros grandes."
    },
    pelo: {
      cepillado: "Pelo largo: todos los días. Con corte corto (\"corte cachorro\"): 2 o 3 veces por semana.",
      bano: "Cada 2 a 4 semanas, con un buen secado.",
      unas: "Cada 3 o 4 semanas.",
      orejas_ojos: "Recoge el pelo de la cara con una colita para que no le irrite los ojos. Limpia el lagrimeo cada día y revisa las orejas cada semana. Cepilla sus dientes a diario."
    },
    etapas: {
      cachorro: "Comidas frecuentes, socialización suave y entrenamiento de baño con mucha paciencia. Revisa que se caigan los dientes de leche.",
      adulto: "Ejercicio diario, cuidado dental constante y peluquería cada 4 a 8 semanas.",
      senior: "Más abrigo, paseos más cortos y revisiones más seguidas de dientes y corazón con el veterinario."
    },
    curiosos: [
      "Nació en Yorkshire, Inglaterra, en el siglo XIX, donde se usaba para cazar ratones en las fábricas.",
      "Los cachorros nacen negros con manchas fuego, y su color cambia poco a poco a medida que crecen."
    ]
  },

  /* ---------- 5. SCHNAUZER ---------- */
  {
    id: "schnauzer",
    nombre: "Schnauzer",
    grupo: "pequena",
    tamano: "Pequeño (miniatura, el más común)",
    peso: "Miniatura: 5 a 8 kg aprox.",
    vida: "12 a 15 años",
    energia: 4,
    asi_es: "El Schnauzer es inteligente, alegre y muy atento a todo lo que pasa. Es un gran guardián: avisa con ladridos cuando llega alguien. Le encanta estar con su familia y participar en todo. Es juguetón y aprende rápido, aunque puede ser algo terco. Su barba y sus cejas le dan una cara muy expresiva.",
    alimentacion: {
      necesidades: "Es una raza con tendencia a tener grasa alta en la sangre y problemas de páncreas, por eso le van mejor las comidas bajas en grasa. Evita darle restos de la mesa, frituras, piel de pollo y embutidos. También es propenso a cálculos urinarios: que tenga siempre agua fresca disponible.",
      porcion: "Usa la Tabla de Porción por Peso de Cocina Peluda y mantén un peso estable. Cachorro: 3 a 4 comidas al día. Adulto: 2 comidas al día, con premios bajos en grasa. Senior: 2 comidas, con porciones ajustadas si se mueve menos. Si tu veterinario le indicó una dieta especial, síguela.",
      recetas_recomendadas: [
        "Recetas bajas en grasa con pollo sin piel y calabaza",
        "Recetas con pescado blanco y arroz",
        "Premios caseros de verduras, como zanahoria cocida"
      ]
    },
    salud: [
      {
        problema: "Pancreatitis",
        que_es: "Inflamación del páncreas. En esta raza se relaciona con comidas muy grasosas.",
        senales: "Vómitos, dolor de barriga (se encorva o no quiere que lo toquen), no quiere comer, está decaído.",
        ir_al_veterinario_si: "Vomita varias veces, tiene dolor de barriga o no come: llévalo ese mismo día."
      },
      {
        problema: "Cálculos urinarios",
        que_es: "Piedritas que se forman en la vejiga y molestan al orinar.",
        senales: "Orina muchas veces y poquito, hace fuerza para orinar o hay sangre en la orina.",
        ir_al_veterinario_si: "Ves sangre en la orina o intenta orinar y no sale nada: es una urgencia."
      },
      {
        problema: "Problemas en los ojos",
        que_es: "La raza puede tener cataratas y otros problemas de la vista con los años.",
        senales: "Ojos nublados, choca con cosas o le cuesta ver de noche.",
        ir_al_veterinario_si: "Notas cualquier cambio en el aspecto de sus ojos o en cómo ve."
      },
      {
        problema: "Granitos en el lomo",
        que_es: "Algunos Schnauzer tienen puntitos negros o granitos en la espalda.",
        senales: "Bultitos o costras a lo largo del lomo, a veces con picazón.",
        ir_al_veterinario_si: "Se infectan, supuran, sangran o le pican mucho."
      }
    ],
    educacion: [
      {
        problema: "Ladra a todo lo que pasa",
        por_que: "Es un perro guardián por naturaleza: avisar es su trabajo.",
        pasos: [
          "Deja que avise 1 o 2 veces, y luego dile \"gracias\" y prémialo cuando se calle.",
          "Si ladra a la ventana, ofrécele un lugar cómodo lejos de ella y prémialo allí.",
          "Dale ejercicio y juegos de cabeza todos los días para bajar su nivel de alerta."
        ]
      },
      {
        problema: "Jala la correa",
        por_que: "Es curioso y tiene mucha energía: quiere llegar a todo primero.",
        pasos: [
          "Cuando la correa se tense, detente y espera.",
          "Cuando vuelva a tu lado y la correa se afloje, prémialo y sigue caminando.",
          "Practica en lugares tranquilos antes de ir a calles con muchas distracciones."
        ]
      },
      {
        problema: "Persigue gatos u otros animales pequeños",
        por_que: "Fue criado para cazar ratones en las granjas: el instinto de perseguir es natural.",
        pasos: [
          "Enséñale a mirarte cuando dices su nombre, premiándolo mucho.",
          "Practica a una distancia en la que vea al animal pero siga tranquilo, y prémialo por mirarte.",
          "Acércate poco a poco con los días, siempre premiando la calma."
        ]
      }
    ],
    ejercicio: {
      minutos: "Entre 45 y 60 minutos al día.",
      paseo: "Dos paseos al día, con tiempo para olfatear y explorar.",
      juegos: [
        "Traer la pelota",
        "Juegos de olfato y búsqueda",
        "Circuitos sencillos (pasar por debajo de una silla, saltar un palo bajo)"
      ],
      cuidado: "Es activo y juguetón: si no gasta energía, la gasta ladrando o mordiendo cosas."
    },
    pelo: {
      cepillado: "2 o 3 veces por semana, poniendo atención a la barba y las patas.",
      bano: "Cada 4 a 6 semanas. Arreglo de peluquería cada 6 a 8 semanas.",
      unas: "Cada 3 o 4 semanas.",
      orejas_ojos: "Limpia la barba después de comer para evitar mal olor. Revisa sus orejas cada semana y limpia los ojos con una gasa húmeda si tiene legañas."
    },
    etapas: {
      cachorro: "Socialízalo con personas, perros y ruidos. Empieza el entrenamiento de correa y de calma desde temprano.",
      adulto: "Mantén una alimentación baja en grasa, peso estable, ejercicio diario y peluquería regular.",
      senior: "Revisiones más frecuentes de ojos, orina y peso. Paseos más cortos pero diarios."
    },
    curiosos: [
      "Su nombre viene de la palabra alemana \"Schnauze\", que significa \"hocico\", por su barba característica.",
      "Es originario de Alemania, donde se usaba en las granjas para cazar ratas y cuidar la casa."
    ]
  }

];
