# Proyecto Cifrado César

#### Problemática

Se plantea el problema del manejo de la información util enviada por los ciudadanos que ayuden a la lucha contra la trata de personas en el Perú, aproximadamente el 50% de las víctimas son menores de edad. Cuando un niño o adolescente desaparece, hay una gran posibilidad de que haya sido captado por mafias vinculadas a trata de personas. Según las estadísticas de la Dirección contra la Trata de Personas y el Tráfico Ilícito de Migrantes de la PNP, el 30% de denuncias de desaparecidos está relacionado con estos grupos delictivos. [Fuente El Comercio]. La fuerza policial es insuficiente debido a que estas bandas delictivas interceptan la información que la policía obtiene y suelen cambiar de ubicación con frecuencia.

#### Definición del producto

Se ha creado esta aplicación que plantea una solución a la problemática, la cual cifra la información enviada y así evita la interceptación y/o alteración de los mensajes, siendo una posible herramienta más contra la lucha de este delito que cobra muchas victimas.

#### Objetivos del producto

Esta aplicación tiene el objetivo de cifrar la información que incluye posible ubicación, nombres y cualquier otro dato que sea pertinente y útil para la Policía Nacional del Perú y Fiscalía.

#### Usuarios del producto

Cualquier ciudadano que desee contribuir de manera anónima con algún dato sobre la ubicación y/o nombre de los integrantes de una banda delictiva que comete el delito de trata de personas.

#### Funcionalidad

La aplicación está alojada en un servidor online, y se puede acceder desde una computadora, laptop, tablet o un smartphone que posea un navegador web instalado.

Aplicación : [Llamada de Auxilio](https://jenicf.github.io/lim-2018-11-bc-core-am-cipher/src/)

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Cifrado César

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

#### Autor

Jenifer Coila Farfan


