### <a id="inicio" />
# Calculadora de Propinas con React + TypeScript + Vite
*📓 [Español](#inicio)*
*📓 [English](#start)*

Este proyecto consiste en un programa que despliega un listado de elementos (que en este contexto son alimentos). Cada uno de estos elementos contiene campos como nombre, precio e id. Al seleccionar uno de estos elementos se agrega al apartado de consumo, donde se empieza a generar una orden. Una vez que se agregan elementos a la orden se empieza a generar el subtotal y una vez que se selecciona una opción de propina se genera el total y se puede "generar" la orden (en realidad se reinicia la orden, aún no se agrega la lógica para almacenar estas ordenes en una base de datos). 

Algunas de las cosas que se aprendieron con este proyecto son:

### <a /> Modularidad y Reusabilidad con Componentes
Al utilizar componentes, se hace un desglose de la interfaz mediante la cual se pueden reutilizar componentes (por ejemplo, los alimentos) y se establece una comunicación entre los mismos para mostrar o no el apartado de consumo y sus totales.

### <a /> Custom Hooks
En el custom hook se encuentra la lógica para agregar o eliminar items del apartado de consumo

### <a /> Optimización del Rendimiento (Performance)
Mediante el uso de operadores ternarios, se establece si se renderiza un componente o no, lo que puede mejorar el rendimiento de las aplicaciones web.

### <a /> Tipado Estricto con TypeScript
Se definieron tipos para los props de los componentes y funciones

### <a /> Framework CSS
Se utilizó Tailwind CSS para manejar los estilos de la página

*📷[Screenshots](#screenshots)*

# Tip Calculator with React + TypeScript + Vite

This project consists of a program that displays a list of items (which in this context are food items). Each of these items contains fields such as name, price, and ID. Selecting one of these items adds it to the consumption section, where an order is generated. Once items are added to the order, the subtotal is generated, and once a tip option is selected, the total is generated and the order can be "generated" (actually, the order is reset; the logic to store these orders in a database has not yet been added).

Some of the things learned with this project are:

### <a /> Modularity and Components Reusability
Using components breaks down the interface through which components (e.g., food) can be reused, and communication is established between them to display or not display the consumption section and its totals.

### <a /> Custom Hooks
The custom hook contains the logic to add or remove items from the consumption section.

### <a /> Performance Optimization
By using ternary operators, you can determine whether a component is rendered or not, which can improve the performance of web applications.

### <a  /> Strict Typing with TypeScript
Types were defined for component and function props

### <a  /> Framework CSS
Tailwind CSS was used to handle the page styles

---
### <a id="screenshots" /> 
# Screenshots
![Interfaz Inicial](https://github.com/ReploidGI0/calc_propinas/blob/main/images/interfaz_propina1.PNG "Interfaz Inicial")
![Interfaz Con Producto Agregado](https://github.com/ReploidGI0/calc_propinas/blob/main/images/interfaz_propina2.PNG "Interfaz Con Producto Agregado")
![Interfaz Con Totales](https://github.com/ReploidGI0/calc_propinas/blob/main/images/propina_3.PNG "Interfaz Con Totales")



