# Calculadora de Propinas con React + TypeScript + Vite

Este proyecto consiste en un programa que despliega un listado de elementos (que en este contexto son alimentos). Cada uno de estos elementos contiene campos como nombre, precio e id. Al seleccionar uno de estos elementos se agrega al apartado de consumo, donde se empieza a generar una orden. Una vez que se agregan elementos a la orden se empieza a generar el subtotal y una vez que se selecciona una opción de propina se genera el total y se puede "generar" la orden (en realidad se reinicia la orden, aún no se agrega la lógica para almacenar estas ordenes en una base de datos). 

Algunas de las cosas que se aprendieron con este proyecto son:

### <a /> Modularidad y Reusabilidad con Componentes
Al utilizar componentes, se hace un desglose de la interfaz mediante la cual se pueden reutilizar componentes (por ejemplo, los alimentos) y se establece una comunicación entre los mismos para mostrar o no el apartado de consumo y sus totales.

### <a /> Custom Hooks
En el custom hook que se creo en este proyecto, se tiene toda la lógica para agregar o eliminar items del apartado de consumo

### <a /> Optimización del Rendimiento (Performance)
Mediante el uso de operadores ternarios, se establece si se renderiza un componente o no, lo que puede mejorar el rendimiento de las aplicaciones web.

### <a /> Tipado Estricto con TypeScript
Se definieron tipos para los props de los componentes y funciones

![Interfaz Inicial](https://github.com/ReploidGI0/calc_propinas/blob/main/images/interfaz_propina1.PNG "Interfaz Inicial")
![Interfaz Con Producto Agregado](https://github.com/ReploidGI0/calc_propinas/blob/main/images/interfaz_propina2.PNG "Interfaz Con Producto Agregado")



