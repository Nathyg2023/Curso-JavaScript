/*Comodines:

    -Sustitución: Define un comodín dentro del patron, El simbolo es el "." 

    NOTA: Si se desea que el simbolo de punto sea interpretada como punto se debe anteponer la barra inversa \ y de esa forma si será un punto

    -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracterres válidos. [aeiou] Con esto cogeríamos todas las vocales.

    -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
    Tabla ASCII https://ascii-.cl/es/

    -Mezcla entre rangos y listas: Podemos unir los dos anteriores en una sola expresión. [0-5ou]. Serian números del  al , la letra "o" y la letra "u"

    -Cadenas completas: Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet es válida la palabra "lorem" y la palabra "amet")

*/