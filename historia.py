# JUEGO: LA CASA DE LOS ZOMBIES - LAS TRES PUERTAS

print("========================================")
print("       LA CASA DE LOS ZOMBIES           ")
print("========================================")
print("Llegas a la entrada principal de la siniestra casa abandonada.")
print("El aire huele a moho, sangre seca y descomposición.")
print("Frente a ti hay tres grandes puertas que dan acceso a distintas alas.")

# NIVEL 1: 
print("\n--- NIVEL 1: LA ENTRADA ---")
print("¿Qué puerta decides forzar para entrar?")
print("Opciones: PUERTA DE MADERA / PUERTA DE ALUMINIO / PUERTA DE EMERGENCIA")
inicio = input("Tu elección: ").strip().upper()


# Opcion 1: PUERTA DE MADERA

if inicio == "PUERTA DE MADERA":
    # Nivel 2 
    print("\n--- NIVEL 2: EL CUARTO DE GUARDIA ---")
    print("Cruzas y encuentras una pistola sin balas sobre una mesa y varias cajas.")
    print("Opciones: CAJA AZUL / CAJA ROJA / CAJA VERDE")
    m2 = input("Tu elección: ").strip().upper()

    if m2 == "CAJA ROJA":
        # Nivel 3 
        print("\n--- NIVEL 3: EL CARGADOR ---")
        print("¡La caja roja tiene balas! Cargas el arma, pero un zombi entra rugiendo.")
        print("Opciones: DISPARAR / ESQUIVAR")
        m3 = input("Tu elección: ").strip().upper()

        if m3 == "DISPARAR":
             # Nivel 4
            print("\n--- NIVEL 4: EL PASILLO CENTRAL ---")
            print("Abates al zombi. Avanzas al pasillo y ves dos escaleras.")
            print("Opciones: SUBIR / BAJAR")
            m4 = input("Tu elección: ").strip().upper()
                    
            if m4 == "SUBIR":
                # Nivel 5 
                print("\n--- NIVEL 5: LA BIBLIOTECA SUPERIOR ---")
                print("Llegas a la biblioteca. Hay tres escondites tras sonar una alarma.")
                print("Opciones: ESCRITORIO / ESTANTE / CHIMENEA")
                m5 = input("Tu elección: ").strip().upper()

                if m5 == "ESTANTE":
                    # Nivel 6 
                    print("\n--- NIVEL 6: EL PASAJE OCULTO ---")
                    print("El estante cede y revela un pasadizo hacia el balcón.")
                    print("Opciones: AVANZAR / ESPERAR")
                    m6 = input("Tu elección: ").strip().upper()

                    if m6 == "AVANZAR":
                        # Nivel 7 
                        print("\n--- NIVEL 7: EL BALCÓN EXTERIOR ---")
                        print("Sales al balcón. hay dos opciones para seguir escapando, que eliges.")
                        print("Opciones: CONDUCTP / TIROLESA")
                        m7 = input("Tu elección: ").strip().upper()

                        if m7 == "TIROLESA":
                            # Nivel 8 
                            print("\n--- NIVEL 8: EL CABLE AL ÁRBOL ---")
                            print("Te deslizas hasta un arbol. Entre las ramas ves tres descensos.")
                            print("Opciones: SALYAT A LA GRAMA / CUERDA VIEJA / RAMA GRUESA")
                            m8 = input("Tu elección: ").strip().upper()

                            if m8 == "RAMA GRUESA":
                                # Nivel 9 
                                print("\n--- NIVEL 9: EL CAMIÓN MILITAR ---")
                                print("Bajas al techo de un camión blindado. Entras aÑ CAMION.")
                                print("Opciones: CRUZAR LOS CABLES / BUSCAR LAS LLAVES")
                                m9 = input("Tu elección: ").strip().upper()

                                if m9 == "CRUZAR LOS CABLES":
                                    # Nivel 10 
                                    print("\n--- NIVEL 10: ESCAPE DE LA CASA ---")
                                    print("El motor ruge con potencia. La reja de la salida está cerrada.")
                                    print("Opciones: ACELERAR / FRENAR / TOCAR CORNETA")
                                    m10 = input("Tu elección: ").strip().upper()

                                    if m10 == "ACELERAR":
                                        print("\n¡VICTORIA! Destrozas el portón con el camión blindado y dejas atrás la casa de los zombis.")
                                    elif m10 == "FRENAR":
                                        print("\nTe detienes por miedo y los infectados revientan las ventanas. Fin del juego.")
                                    elif m10 == "TOCAR CORNETA":
                                        print("\nTocas la bocina alertando a cientos de mutantes que vuelcan el camión. Fin del juego.")
                                    else:
                                        print("\nOpción no válida. Quedaste paralizado al volante.")
                                elif m9 == "BUSCAR LAS LLAVES":
                                    print("\nNo hay llaves; pierdes tiempo valioso y los zombis te rodean.")
                                else:
                                    print("\nOpción no válida.")
                            elif m8 == "CUERDA VIEJA":
                                print("\nLa cuerda podrida se rompe y caes sobre escombros.")
                            elif m8 == "SALTAR A LA GRAMA":
                                print("\nLa caída es demasiado alta; te fracturas las piernas.")
                            else:
                                print("\nOpción no válida.")
                        elif m7 == "CONDUCTO":
                            print("\nEl conducto oxidado se desprende de la pared.")
                        else:
                            print("\nOpción no válida.")
                    elif m6 == "ESPERAR":
                        print("\nEl humo de la casa te asfixia mientras esperas.")
                    else:
                        print("\nOpción no válida.")
                elif m5 == "ESCRITORIO":
                    print("\nEl escritorio no te cubre y te descubren al instante.")
                elif m5 == "CHIMENEA":
                    print("\nEl humo te hace toser fuerte y te atrapan.")
                else:
                    print("\nOpción no válida.")
            elif m4 == "BAJAR":
                print("\nBajas directo al nido subterráneo de mutantes.")
            else:
                print("\nOpción no válida.")
        elif m3 == "ESQUIVAR":
            print("\nResbalas con un charco de sangre y el zombi te muerde.")
        else:
            print("\nOpción no válida.")
    elif m2 == "CAJA AZUL":
        print("\nAbres la caja azul y una serpiente venenosa te ataca mortalmente.")
    elif m2 == "CAJA VERDE":
        print("\nLa caja verde detona una trampa de gas que te deja sin aire.")
    else:
        print("\nOpción no válida. Tardaste demasiado en decidir.")


# Opcion 2: PUERTA DE aluminio

elif inicio == "PUERTA DE ALUMINIO":
    # Nivel 2 
    print("\n--- NIVEL 2: EL COMEDOR PRINCIPAL ---")
    print("Cruzas la puerta y consigue varios ajos. Hay un fuerte olor rancio.")
    print("Varios zombis alertados por el aroma bloquean la salida al patio.")
    print("Opciones: CORRER / TIRAR LOS AJOS")
    a2 = input("Tu elección: ").strip().upper()

    if a2 == "CORRER":
        # Nivel 3 
        print("\n--- NIVEL 3: LA COCINA INDUSTRIAL ---")
        print("Llegas a la cocina. Para bloquear la puerta a tus espaldas tienes muebles:")
        print("Opciones: COCINA / MESA DE METAL / NEVERA")
        a3 = input("Tu elección: ").strip().upper()

        if a3 == "NEVERA":
            # Nivel 4 
            print("\n--- NIVEL 4: EL DUCTO DE SERVICIO ---")
            print("Bloqueas la entrada. Al fondo hay un ducto y una ventana hacia los pisos altos. que escoges")
            print("Opciones: SUBIR EL DUCTO / SALIR POR LA VENTANA")
            a4 = input("Tu elección: ").strip().upper()

            if a4 == "SUBIR EL DUCTO":
                # Nivel 5 
                print("\n--- NIVEL 5: EL ALMACÉN QUÍMICO ---")
                print("Llegas al almacén. Escuchas a los zombies romper la trampa.")
                print("Opciones: DERRAMAR ACEITE / USAR EL EXTINTOR")
                a5 = input("Tu elección: ").strip().upper()

                if a5 == "DERRAMAR ACEITE":
                    # Nivel 6 
                    print("\n--- NIVEL 6: EL PASILLO DE CELDAS ---")
                    print("Los zombis patinan y caen. Sigues y ves tres puertas numeradas.")
                    print("Opciones: PUERTA 1 / PUERTA 2 / PUERTA 3")
                    a6 = input("Tu elección: ").strip().upper()

                    if a6 == "PUERTA 2":
                        # Nivel 7 
                        print("\n--- NIVEL 7: EL LABORATORIO MÉDICO ---")
                        print("Entras a un laboratorio sellado y ves un antídoto en una vitrina.")
                        print("Opciones: AGARRAR ANTIDOTO / IGNORAR")
                        a7 = input("Tu elección: ").strip().upper()

                        if a7 == "AGARRAR ANTIDOTO":
                            # Nivel 8 
                            print("\n--- NIVEL 8: LA ESCALERA DE CARACOL ---")
                            print("Guardas el antídoto. Subes a la azotea esquivando vidrios.")
                            print("Opciones: CORRER POR LA AZOTEA / AGACHARSE")
                            a8 = input("Tu elección: ").strip().upper()

                            if a8 == "CORRER POR LA AZOTEA":
                                # Nivel 9 
                                print("\n--- NIVEL 9: LA SEÑAL DE RESCATE ---")
                                print("Un helicóptero sobrevuela la casa entre la lluvia. Tienes tres señales:")
                                print("Opciones: HUMO ROJO / LINTERNA / BENGALA")
                                a9 = input("Tu elección: ").strip().upper()

                                if a9 == "BENGALA":
                                    # Nivel 10 
                                    print("\n--- NIVEL 10: LA ESCALERA DEL HELICÓPTERO ---")
                                    print("El helicóptero baja una escala mientras los zombis rompen la reja de la azotea.")
                                    print("Opciones: ENGANCHARSE / TREPAR / SALTAR")
                                    a10 = input("Tu elección: ").strip().upper()

                                    if a10 == "ENGANCHARSE":
                                        print("\n¡VICTORIA! Aseguras el antídoto y eres evacuado con éxito.")
                                    elif a10 == "TREPAR":
                                        print("\nTus manos resbalan por la lluvia y caes desde las alturas.")
                                    elif a10 == "SALTAR":
                                        print("\nCalculas mal la distancia del salto al patín del helicóptero y caes al vacío.")
                                    else:
                                        print("\nOpción no válida. Perdiste el tiempo de evacuación.")
                                elif a9 == "HUMO ROJO":
                                    print("\nEl viento dispersa el humo de inmediato sin ser visto.")
                                elif a9 == "LINTERNA":
                                    print("\nLa luz tenue no penetra la densa lluvia.")
                                else:
                                    print("\nOpción no válida.")
                            elif a8 == "AGACHARSE":
                                print("\nUn zombie que acechaba en las alturas cae sobre ti.")
                            else:
                                print("\nOpción no válida.")
                        elif a7 == "IGNORAR":
                            print("\nSin el objetivo de supervivencia, los zombis te acorralan sin salida.")
                        else:
                            print("\nOpción no válida.")
                    elif a6 == "PUERTA 1":
                        print("\nEstá electrificada y recibes una fuerte descarga.")
                    elif a6 == "PUERTA 3":
                        print("\nAdentro aguardaba un nido completo de infectados.")
                    else:
                        print("\nOpción no válida.")
                elif a5 == "USAR EL EXTINTOR":
                    print("\nEl extintor estaba vacío y no logras repelerlos.")
                else:
                    print("\nOpción no válida.")
            elif a4 == "SALIR POR LA VENTANA":
                print("\nCaes directo a un pozo de púas en el patio interno.")
            else:
                print("\nOpción no válida.")
        elif a3 == "MESA DE METAL":
            print("\nLa mesa es muy pesada, no logras moverla a tiempo y te atrapan.")
        elif a3 == "COCINA":
            print("\nte cuesta moverla y esta haciendo un ruido espantoso que atrae más criaturas.")
        else:
            print("\nOpción no válida.")
    elif a2 == "TIRAR LOS AJOS":
        print("\nEl ajo no repele a los zombis; te devoran de inmediato.")
    else:
        print("\nOpción no válida. Quedaste paralizado en la puerta.")


# opcion 3: PUERTA DE EMERGENCIA

elif inicio == "PUERTA DE EMERGENCIA":
    # Nivel 2 
    print("\n--- NIVEL 2: EL PASAJE AL SÓTANO ---")
    print("Consigyes una estaca de madera en el suelo.")
    print("Un zombi se lanza hacia ti derrepente.")
    print("Opciones: CLAVAR ESTACA / ESQUIVAR")
    e2 = input("Tu elección: ").strip().upper()

    if e2 == "CLAVAR ESTACA":
        # Nivel 3 
        print("\n--- NIVEL 3: LA SALA FAMILIAR ---")
        print("Clavas la estaca con fuerza y abates a la criatura.")
        print("Llegas a una sala oscura con dos accesos.")
        print("Opciones: TUNEL DE PIEDRA / TUNEL DE MADERA")
        e3 = input("Tu elección: ").strip().upper()

        if e3 == "TUNEL DE PIEDRA":
            # Nivel 4 
            print("\n--- NIVEL 4: LA CÁMARA FUNERARIA ---")
            print("El túnel de piedra conduce a una sala con tres ataúdes antiguos.")
            print("Opciones: ATAUD DE ORO / ATAUD DE PIEDRA / ATAUD DE HIERRO")
            e4 = input("Tu elección: ").strip().upper()

            if e4 == "ATAUD DE PIEDRA":
                # Nivel 5
                print("\n--- NIVEL 5: EL PASADISO SUBTERRÁNEO ---")
                print("Mueves la losa del ataud y descubres una palanca secreta.")
                print("Opciones: TIRAR PALANCA / IGNORAR PALANCA")
                e5 = input("Tu elección: ").strip().upper()

                if e5 == "TIRAR PALANCA":
                    # Nivel 6 
                    print("\n--- NIVEL 6: EL ACUEDUCTO FÉTIDO ---")
                    print("Se abre una compuerta que drena el agua hacia el exterior.")
                    print("Opciones: NADAR / CAMINAR POR EL BORDE")
                    e6 = input("Tu elección: ").strip().upper()

                    if e6 == "CAMINAR POR EL BORDE":
                        # Nivel 7 
                        print("\n--- NIVEL 7: LA SALIDA DEL DESAGÜE ---")
                        print("Llegas a la reja de desagüe que da al río. Consigues tres herramientas útiles:")
                        print("Opciones: ALICATE / PALANCA DE HIERRO / CABLE")
                        e7 = input("Tu elección: ").strip().upper()

                        if e7 == "PALANCA DE HIERRO":
                            # Nivel 8 
                            print("\n--- NIVEL 8: LA ORILLA DEL RÍO ---")
                            print("Fuerzas los barrotes y sales a la orilla rocosa del río.")
                            print("Opciones: SEGUIR POR EL RIO / ENTRAR AL BOSQUE")
                            e8 = input("Tu elección: ").strip().upper()

                            if e8 == "SEGUIR POR EL RIO":
                                # Nivel 9 
                                print("\n--- NIVEL 9: EL EMBARCADERO VIEJO ---")
                                print("Encuentras tres botes amarrados a un muelle abandonado.")
                                print("Opciones: CANOA / LANCHA DE MOTOR / BALSA")
                                e9 = input("Tu elección: ").strip().upper()

                                if e9 == "LANCHA DE MOTOR":
                                    # Nivel 10 
                                    print("\n--- NIVEL 10: EL RESCATE EN EL AGUA ---")
                                    print("Enciendes la lancha y aceleras río abajo hacia un retén militar.")
                                    print("Opciones: ENCENDER LAS LUCES / GRITAR / DISPARAR BENGALAS")
                                    e10 = input("Tu elección: ").strip().upper()

                                    if e10 == "DISPARAR BENGALAS":
                                        print("\n¡VICTORIA! La bengala ilumina el cielo y los soldados te reciben a salvo en la base.")
                                    elif e10 == "ENCENDER LAS LUCES":
                                        print("\nLas luces encandilan a los guardias que disparan por confusión.")
                                    elif e10 == "GRITAR":
                                        print("\nEl ruido del motor ahoga tus gritos y te confunden con un zombie en lancha.")
                                    else:
                                        print("\nOpción no válida. Chocaste contra el muelle.")
                                elif e9 == "CANOA":
                                    print("\nTenía una fuga en el casco y te hundes en aguas toxicas.")
                                elif e9 == "BALSA":
                                    print("\nLa corriente desbarata la balsa y caes a las rocas.")
                                else:
                                    print("\nOpción no válida.")
                            elif e8 == "ENTRAR AL BOSQUE":
                                print("\nTe pierdes en la oscuridad y una manada de perros mutantes te caza.")
                            else:
                                print("\nOpción no válida.")
                        elif e7 == "ALICATE":
                            print("\nEl metal de la reja es demasiado grueso y rompes la herramienta.")
                        elif e7 == "CABLE":
                            print("\nEl cable no ejerce fuerza de palanca alguna.")
                        else:
                            print("\nOpción no válida.")
                    elif e6 == "NADAR":
                        print("\nCriaturas zombis del agua te arrastran hacia el fondo.")
                    else:
                        print("\nOpción no válida.")
                elif e5 == "IGNORAR PALANCA":
                    print("\nTe quedas sin salida y la sala colapsa.")
                else:
                    print("\nOpción no válida.")
            elif e4 == "ATAUD DE ORO":
                print("\nDispara agujas envenenadas al intentar abrirlo.")
            elif e4 == "ATAUD DE HIERRO":
                print("\nEstá sellado con soldadura y te rompes los dedos forzándolo.")
            else:
                print("\nOpción no válida.")
        elif e3 == "TUNEL DE MADERA":
            print("\nLas vigas colapsan y quedas sepultado vivo.")
        else:
            print("\nOpción no válida.")
    elif e2 == "ESQUIVAR":
        print("\nEl pasillo es muy angosto para esquivar; la criatura te derriba.")
    else:
        print("\nOpción no válida.")

# OPCIÓN INVÁLIDA NIVEL 1
else:
    print("\nOpción no válida. Dudaste en la entrada y la horda te atrapó por la espalda.")


print("             FIN DE LA PARTIDA          ")
