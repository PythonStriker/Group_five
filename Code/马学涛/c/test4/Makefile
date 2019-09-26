main.out:sub.o add.o div.o mul.o main.c
	gcc sub.o add.o div.o mul.o main.c -o main.out
sub.o:sub.c
	gcc -c sub.c -o sub.o
add.o:add.c
	gcc -c add.c -o add.o
div.o:div.c
	gcc -c div.c -o div.o
mul.o:mul.c
	gcc -c mul.c -o mul.o
