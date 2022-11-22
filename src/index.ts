import fetch from 'node-fetch';
import Web3 from 'web3';
import { getAddressBalances } from 'eth-balance-checker/lib/web3';
const { performance } = require('perf_hooks');
import {tokenList} from './tokenList';
const getList = async () => {
    //const response = await fetch('https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/ethereum.json');
    const data = tokenList;
    console.log(data.values);
    var tokens: Array<string> = [];
    (data as Array<any>).forEach((element) => {
        tokens.push(element.address);
    })
    return tokens;
}

const fetchBalance = async (tokens: Array<string>) => {
    const web3 = new Web3("https://mainnet.infura.io/v3/0e4ce57afbd04131b6842f08265b4d4b");
    const address = '0x8eb871bbb6f754a04bca23881a7d25a30aad3f23';
    await getAddressBalances(web3, address, tokens).then(balances => {
        console.log(balances);
    });



}

const start = async () => {
    var startTime = performance.now()

    const tokens = await getList();
    await fetchBalance(tokens);

    var endTime = performance.now()
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


}

start();