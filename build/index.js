"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const web3_2 = require("eth-balance-checker/lib/web3");
const { performance } = require('perf_hooks');
const tokenList_1 = require("./tokenList");
const getList = () => __awaiter(void 0, void 0, void 0, function* () {
    //const response = await fetch('https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/ethereum.json');
    const data = tokenList_1.tokenList;
    console.log(data.values);
    var tokens = [];
    data.forEach((element) => {
        tokens.push(element.address);
    });
    return tokens;
});
const fetchBalance = (tokens) => __awaiter(void 0, void 0, void 0, function* () {
    const web3 = new web3_1.default("https://mainnet.infura.io/v3/0e4ce57afbd04131b6842f08265b4d4b");
    const address = '0x8eb871bbb6f754a04bca23881a7d25a30aad3f23';
    yield (0, web3_2.getAddressBalances)(web3, address, tokens).then(balances => {
        console.log(balances);
    });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // var startTime = performance.now()
    const tokens = yield getList();
    yield fetchBalance(tokens);
    var endTime = performance.now();
    // console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
});
start();
