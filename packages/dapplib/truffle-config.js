require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note remain provide inflict pet tattoo spirit'; 
let testAccounts = [
"0xf711392b00e10b6cb8616c6ce21298456b6bb12e5986b6191f668c078241d0e2",
"0x6d7c630153b5728a14e99b89c0ed4c860053d9c5f96609d3cc7377cec59cdddd",
"0x4294a41aa2b765a33340979b0d5df65ea723c950dc9ad88e16b19713fbf496e4",
"0x5f340037fabaf4833290b80252161138bb67ce3b7cd441cc02925ea063f81f86",
"0x2c7b32832db0e064c0f30da95cb5329c2353cc7edac5169262e1da380baaa1e4",
"0xfe5949256484b3cc52c56877338a0177bc5afc3880782fefd3649476160d0d57",
"0xe2203c732f7b04b9dd0c6e424357168d19883d180a59c6a038f91aecddbe5dbd",
"0xdc74340c1aa782f0951796b3d1eb5f28537b5063aaa45cef65cd291e5cdb2e1b",
"0x9c1018652e0f2e0d56176333ed8773611ecb60e89e2e1bd664148a443feac1c1",
"0xbf37d68e1821aad4a1bf468efbe0a649d882caabc934e01b455067973822a609"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

