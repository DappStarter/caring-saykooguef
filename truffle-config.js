require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index rifle magnet coin hunt kite tail skull'; 
let testAccounts = [
"0x2c2137400b6cd3a7b37ff07392eefa17081d17b358453c8cd8a295e0f585dee0",
"0x9ed55738563bc1e3cfbcce387957f06ec1741da67f826dc171ba044143fb4638",
"0x0f967deeeeb534a0abc55098b4bae8b876fa180b64f23324e84f00abd822b9d1",
"0x73bf01cec7006e31eb8833741e39ffe1c6254f4ba62c32fa8099dfe6e892d734",
"0x6ef87b1a4bdfa4a85fab5e219f3eb20f43beb50a18e6cb96d4f1b4b181cdaa1a",
"0xb73d39e14d640fe817a48b32d234a6f82e424ef5cc999ff6b1d66afa318f6262",
"0xb69aa59b7d4bf356a49365eb5f11e113bc7deda739506c60ba62408921adfd81",
"0x9adbcac279462c27d4fb31484ca05e344184f240cc8ba7a178e75c461a6bd780",
"0xf67427f514be66b29009efc14b692b3886a6d830ced9ac93c481e6d8af611a83",
"0x6bced1e2a00b29ff2eb907b5053f28c2064e0489896cf431482ee607972a8931"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
