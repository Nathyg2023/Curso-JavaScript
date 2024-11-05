/*Delimitadores:
    ^ Antes de este símbolo no puede haber nada.
    $ Despues de este símbolo no puede haber nada 
    EJEMPLO: ^hola$

CAntidad:
    -Llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles:
        {n} Se tiene que repetir n veces.
        {n,m} Se tiene que repetir entre n y m veces, ambos incluidos.
        {n,} Se tiene que repetir como mínimo n veces
        EJEMPLO: ^[a-zA-Z]{1,3}@{1}$

    -Asterisco: lo que está antes del asterisco puede estar, puede no estar y se puede repetir.
        EJEMPLO: .*@.*\..*

    -Interrogación: Lo que está antes de la interrogación puede no estar, pero si está sólo puede aparecer una vez.
        EJEMPLO: ^[ae]?$
    
    -Operador más: lo que está antes del + tiene que estar una vez como mínimo
        EJEMPLO: A-[0-9]+
*/