import { calculateTimeDifference } from "./task2";

import * as readline from 'readline';
import {stdin, stdout} from 'process';

const rl = readline.createInterface({
    input:stdin,
    output: stdout
});

rl.question("Please input the date ", function(answer: string){
    var tarDate = new Date(answer);
    calculateTimeDifference(tarDate);
    rl.close();
});
