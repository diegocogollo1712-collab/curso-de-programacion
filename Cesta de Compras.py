# Cesta de Compras

def ver_menu():
    print("\n===============================")
    print("      🛒 MI CESTA DE COMPRAS   ")
    print("===============================")
    print("1. Agregar producto")
    print("2. Ver cesta")
    print("3. Eliminar producto")
    print("4. Calcular total a pagar")
    print("5. Salir")
    print("===============================")

def agregar_producto(productos, precios):
    print("\n--- AGREGAR PRODUCTO ---")
    nombre = input("Ingresa el nombre del producto: ")
    
    # Validamos que el precio sea mayor que 0
    precio_valido = False
    while not precio_valido:
        entrada_precio = input(f"Ingresa el precio de '{nombre}': ")
        
        # Verificamos si es un número entero o decimal
        partes = entrada_precio.split(".")
        if len(partes) == 1 and partes[0].isdigit():
            valor = float(entrada_precio)
            if valor >= 0:
                precios.append(valor)
                productos.append(nombre)
                precio_valido = True
                print(f"-> '{nombre}' agregado exitosamente.")
            else:
                print("El precio no puede ser negativo.")
        elif len(partes) == 2 and partes[0].isdigit() and partes[1].isdigit():
            valor = float(entrada_precio)
            if valor >= 0:
                precios.append(valor)
                productos.append(nombre)
                precio_valido = True
                print(f"-> '{nombre}' agregado exitosamente.")
            else:
                print("El precio no puede ser negativo.")
        else:
            print("Por favor, ingresa un número válido para el precio.")

def ver_cesta(productos, precios):
    print("\n--- PRODUCTOS EN LA CESTA ---")
    if len(productos) == 0:
        print("La cesta está vacía.")
    else:
        # Muestra las listas emnumeradas con el nombre y el precio
        for i in range(len(productos)):
            numero_item = i + 1
            print(f"{numero_item}. {productos[i]} - ${precios[i]:.2f}")
    print("-----------------------------")

def eliminar_producto(productos, precios):
    print("\n--- ELIMINAR PRODUCTO ---")
    if len(productos) == 0:
        print("No hay productos para eliminar.")
        return

    # Muestra la lista de los productos para ver cual eliminar
    ver_cesta(productos, precios)
    
    opcion = input("Escribe el número del producto que deseas quitar: ")
    
    if opcion.isdigit():
        indice = int(opcion) - 1
        if 0 <= indice < len(productos):
            nombre_borrado = productos.pop(indice)
            precios.pop(indice)
            print(f"-> Se eliminó '{nombre_borrado}' de la cesta.")
        else:
            print("Ese número no está en la lista.")
    else:
        print("Debes ingresar un número válido.")

def calcular_total(productos, precios):
    print("\n--- TOTAL DE LA CESTA ---")
    if len(productos) == 0:
        print("La cesta está vacía. Total: $0.00")
    else:
        # Suma de todos los precios
        total = 0.0
        for p in precios:
            total = total + p
        print(f"Cantidad de artículos: {len(productos)}")
        print(f"Total a pagar: ${total:.2f}")
    print("-------------------------")

# Listas paralelas
productos = []
precios = []

print("¡Bienvenido al sistema de compras!")

ejecutando = True
while ejecutando:
    ver_menu()
    seleccion = input("Selecciona una opción (1-5): ")

    if seleccion == "1":
        agregar_producto(productos, precios)
    elif seleccion == "2":
        ver_cesta(productos, precios)
    elif seleccion == "3":
        eliminar_producto(productos, precios)
    elif seleccion == "4":
        calcular_total(productos, precios)
    elif seleccion == "5":
        print("\n¡Gracias por tu compra! Hasta luego.")
        ejecutando = False
    else:
        print("\nOpción inválida. Elige un número del 1 al 5.")

    if ejecutando:
        input("\nPresiona Enter para volver al menú...")