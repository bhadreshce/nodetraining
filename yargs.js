const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe:'add two number',
    builder: {
        firstNumber: {
            describe: 'enter first number',
            demandOption: true,
            type:Number
             
        },
        secondNumber: {
            describe: "enter second number",
            demandOption: false, 
            type:Number
        }
    },

    handler(argv) { 
        
    }
})