/*Caracteres especiales:

\s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de línea y retorno de carro. 
EJEMPLO: ^[a-zA-Z]+\s[a-zA-Z]+$

\S: Coincide con todo menos caracteres de espacio 
EJEMPLO:^\S{5}$

\d: COincide con un carácter de número. 
EJEMPLO: [0-9] ^\d{5}$

\D: Coincide con cualquier carácter no numperico. 
EJEMPLO: [^0-9] ^\D{5}$

\w: COincide con cualquier carácter alfanumérico, incluyendo el guión. 
EJEMPLO: [A-Za-z0-9_] ^\w+@$

\W: COincide con todo menos caracteres de palabra
EJEMPLO: ^\w+$

*/