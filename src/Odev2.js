// 2.Gün Ödevi
function findPrime(...numbers) {
    numbers.forEach((number)=>{
        let control=0;
        for (let i = 2; i <= number; i++) {
            if (number%i==0) {
                control++;
            }
        }
        if (control==1) {
            console.log(number+" sayısı asaldır.")
        } else{
            console.log(number+" sayısı asal bir sayı değil.")
        }
    });
};

//findPrime(2,3,4);

function findFriend(numberOne,numberTwo){
    let totalOne=0;
    let totalTwo=0;
    for (let i =1;  i<numberOne; i++) {
        if(numberOne%i==0) {
            totalOne +=i;
        }
    }
    for (let i=1;  i<numberTwo; i++) {
        if (numberTwo%i==0) {
            totalTwo +=i
        }
    }
    if (numberOne == totalTwo && numberTwo == totalOne) {
        console.log(numberOne+" , "+numberTwo+" arkadaş sayıdır.")
    } else {
        console.log(numberOne+" , "+numberTwo+" arkadaş sayı değildir.")
    }
}

//findFriend(220,284)

let perfectNumberToThousand = () => {
    for(let perfect = 1; perfect<1000; perfect++){
        var total=0;
        for (let i = 1; i <perfect ; i++) {
            if(perfect%i==0){
                total +=i;
            }
        }
        if (total==perfect) {
            console.log(perfect+" mükemmel sayıdır.")
        }
    }
    
}

//perfectNumberToThousand();

let primeNumberToThousand = () =>{
    for (let prime = 2; prime < 1000; prime++) {
        let control=0;
        for (let i = 2; i <= prime; i++) {
            if (prime%i==0) {
                control++;
            }
        }
        if (control==1) {
            console.log(prime+" sayısı asaldır.")
        } 
        
    }
}

//primeNumberToThousand();
