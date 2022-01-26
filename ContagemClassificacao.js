let numeroAlunos = 10

for(let i = 0; i < numeroAlunos; i++){
    if(i == 0){
        console.log("O número é zero")
    }else if(i % 2 == 0){
        console.log(`O número ${i} é par`)
    }else{
        console.log(`O número ${i} é impar`)
    }
}