def jugar():
    print("========================================")
    print("   LA CASA DE LOS ZOMBIES       ")
    print("========================================\n")
    print("Estás en la entrada de una casa abandonada. La atmósfera es densa y el aire huele a moho y descomposición.")
    print("Frente a ti hay tres objetos:")
    print("1. una arma sin balas.")
    print("2. un ajo.")
    print("3. una estaca de madera.")

    opcion_inicio = input("\n¿Qué objeto eliges? (1, 2 o 3): ").strip()

    # Primera ramificación principal (if, elif, else)
    if opcion_inicio == "1":
        print("\n--- un arma sin balas ---")
        print("sigues por la entrada y al caminar empiezas a oir ruidos extraños .")
        print("te encuentras dos cajas extrañas de color azul y rojo:")
        print("A. abrir la caja azul.")
        print("B. abrir la caja roja.")

        caja = input("\n¿Cuál abres? (A o B): ").strip().upper()

        # Condicional anidada
        if caja == "A":
            print("\nResultado: abres la caja azul y te aparece una serpiente venenosa y te mata.")
            print("Fin de la expedición.")
        elif caja == "B":
            print("\nResultado: abres la caja roja y te encuentras un cartucho lleno de balas.")
            print("Lograste obtener suministros para tu defensa y acabas con los zombies.")
        else:
            print("\nResultado: tardas demasiado en decidir y los zombies te descubren. Te capturan y te convierten en uno de ellos.")

    elif opcion_inicio == "2":
        print("\n--- el ajo ---")
        print("sigues por la entrada y al caminar empiezas a oir ruidos extraños .")
        print("los zombies huelen el ajo y te encuentran, que decides hacer?")
        print("A. correr hasta encontrar la salida.")
        print("B. Usar el ajo para alejarlos.")
        print("C. Ignorarlos y tratar de pasar desapercibido.")

        accion  = input("\n¿Qué decides hacer? (A, B o C): ").strip().upper()

        # Condicional anidada
        if accion == "A":
            print("\nResultado: te vas corriendo y los pierdes.")
            print("encuentras la salida y te liberas de los zombies.")
        elif accion == "B":
            print("\nResultado: tratas de alejarlos con el ajo.")
            print("alejas a algunos pero como son muchos te terminan matando.")
        elif accion == "C":
            print("\nResultado: los ignoras pero ellos no lo hacen y te matan")
        else:
            print("\nResultado: la indecisión te lleva a perder la oportunidad de escapar.")

    elif opcion_inicio == "3":
        print("\n--- la estaca de madera ---")
        print("sigues por la entrada y al caminar empiezas a oir ruidos extraños .")
        print("se empiezan a acercar los zombies y tienes pocas opciones.")
        print("A. usar la estaca de madera para defenderte.")
        print("B. tratar de escapar como sea posible.")

        opcion = input("\n¿Qué opción eliges? (A o B): ").strip().upper()

        # Condicional anidada
        if opcion == "A":
            print("\nResultado: usas la estaca de maadera y matas a varios.")
            print("pero son demasiados y logran atraparte.")
        elif opcion == "B":
            print("\nResultado: escapas despues de media hora intentandolo.")
            print(" quedas exhausto pero logras salir de la casa y salvar tu vida.")
        else:
            print("\nResultado: hiciste mucho ruido y los zombies te mataron.")

    else:
        print("\nno eliges nada y no tienes nada con que defenderte de los zombies.")

    print("\n--- FIN DE LA PARTIDA ---")

if __name__ == "__main__":
    jugar()