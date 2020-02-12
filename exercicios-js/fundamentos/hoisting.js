console.log("a = ", a)
var a = 2
console.log("a=", a)

/* 
hosting é u coportamento padrão de levar a declaração para o topo

o código ficou assim após. Só ver que o resutlado de a no primeiro foi undefined. Ou seja a variável foi declarada, mas não inicializada.

var a
console.log("a = ",a)
a = 2
console.log("a=", a)
*/