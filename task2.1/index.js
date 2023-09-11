const START = 5;
const END = 480;

const primeNumbersOutput = () => {
    nextPrime:
        for (let i = START; i <= END; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue nextPrime
            }
            console.log(i);
        }
};

primeNumbersOutput();