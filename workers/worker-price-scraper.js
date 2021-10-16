let pancakeSwapAbi =  [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
let tokenAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"uint256","name":"_supply","type":"uint256"},{"internalType":"uint256","name":"_txFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"},{"internalType":"address","name":"_FeeAddress","type":"address"},{"internalType":"address","name":"tokenOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FeeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_BURN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_CHARITY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_TAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isCharity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setAsCharityAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCharity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_txFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let pancakeSwapContract = "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();


/**
 * 
 * 
 * This script will listen for all the latest transactions in the binance smart chain ( or wathever ETHEREUM compatible chain )
 * The script is provided by @Linch1 -> https://github.com/Linch1/PancakeSwapTokenCharting without warranty of any kind.
 * 
 * Before running the script 
 * - be sure to populate the mongo db with the provided exported database
 * - be sure to update the db with the latest pairs ( read the repo description to understand how )
 * 
 * The provider used in this example is a free one with a rate limit of 10K requests each 5 min ( 10k/5min )
 * so probably you will encounter some errors during the testing if you not stop it before reaching the limit
 * 
 * Usually it makes ~2K requests each 15 seconds
 * so it can reach the rate limit in 1:15 minutes
 * 
 */

// initialize mongodb
const TokenBasic = require('../models/token_basic');
var configDB = require('../config/database');
const mongoose = require('mongoose');
console.log( configDB.url )
mongoose.connect(configDB.url, {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => { console.log('MongoDB is connected') })
.catch(err => {
  console.log('MongoDB connection unsuccessful');
  console.log(err)
});

// intialzie the abidecoder
const abiDecoder = require('abi-decoder');
abiDecoder.addABI(tokenAbi);
abiDecoder.addABI(pancakeSwapAbi);


// methods used from pancakeswap for swap tokens
let METHODS = [
    "swapETHForExactTokens",
    "swapExactETHForTokens",
    "swapExactETHForTokensSupportingFeeOnTransferTokens",
    "swapExactTokensForETH",
    "swapExactTokensForETHSupportingFeeOnTransferTokens",
    "swapExactTokensForTokens",
    "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    "swapTokensForExactETH",
    "swapTokensForExactTokens"
]
// function to retrive the token price
async function calculateSwappedTokensFromTx( tx ){
    // break if the transaction didn't interacted with pancake
    if( !( tx.to.toLowerCase() == pancakeSwapContract ) ) return;
    // get the transaction reciept
    let tx_data = tx.data; // get the swap parameters
    if( !tx_data ) tx_data = tx.input; // the .data property sometime is in the .input field
    if( !tx_data ) { console.log('CANNOT RETRIVE THE TRANSACTION DATAS'); return; }

    let decoded_data = abiDecoder.decodeMethod(tx_data); // decode the parameters of the transaction
    if( !decoded_data ) return;
    if( !METHODS.includes(decoded_data.name) ) return;

    let params = decoded_data.params; // decoded parameters
    let sent_tokens; // get the sent tokens to swap 
    let tokens_from_swap; // get the recived tokens from the swap
    let path = [];
    for(i in params){  // loop to print parameters without unnecessary info
        if( params[i].name == 'path' ){
        path = params[i].value;
        } else if( params[i].name == 'amountIn' || params[i].name == 'amountInMax' ){
        sent_tokens = params[i].value;
        } else if( params[i].name == 'amountOutMin' || params[i].name == 'amountOut' ){
        tokens_from_swap = params[i].value;
        }
    }

    if( !path[0] ) return; // if not path param return
    if( !sent_tokens || !tokens_from_swap ) return; // if not amountIn or amountOut return

    // retrive informations about the tokens involved in the transaction
    let first_token_contract_in_path = path[0].toLowerCase();
    let latest_token_contract_in_path = path[ path.length - 1 ].toLowerCase();

    // get the tokens from the db
    let first_token = await TokenBasic.findOne({ contract: RegExp(`^${first_token_contract_in_path}$`, "i") });
    let latest_token = await TokenBasic.findOne({ contract: RegExp(`^${latest_token_contract_in_path}$`, "i") });
    console.log(`FIRST TOKEN NOT FOUND: ${!first_token} | LAST TOKEN NOT FOUND: ${!latest_token}`)
    if( !first_token || !latest_token )return;

    // specify the amount of tokens in the transactions of the first_token and latest_token
    first_token.tokens = sent_tokens / ( 10**first_token.decimals );
    latest_token.tokens = tokens_from_swap / ( 10**latest_token.decimals );

    // compare wich of the tokens is used more frequently to create pairs. This means that the one with more pairs is the more common used
    let pairs_comparison = first_token.pairs_count > latest_token.pairs_count;
    let main_token = pairs_comparison ? first_token : latest_token;
    let dependant_token = pairs_comparison ? latest_token : first_token;
    console.log( `MAIN TOKEN: ${main_token.name} ${main_token.tokens} | DEPENDANT TOKEN: ${dependant_token.name} ${dependant_token.tokens}` );

    // calculating the price of the dependant_token using the main_token
    dependant_token.price = main_token.tokens/dependant_token.tokens;
    console.log( `${dependant_token.name} PRICE: ${dependant_token.price} ${main_token.symbol}. \n${dependant_token.contract}\n\n`);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Ethereum Account Scanner by @ross-p
 * 
 * https://gist.github.com/ross-p/bd5d4258ac23319f363dc75c2b722dd9
 *
 * To run this, you need your own geth node, accepting RPC
 * connections on a port you can access.
 *
 * Install pre-requisites:
 *     sudo npm install -g web3
 *
 * Usage:
 *     nodejs ./ethereum-account-scanner.js
 */

 let Web3 = require('web3');
 ////////////////////////////////////////////////////////////////////////////////
 // BEGIN CONFIGURATION SECTION
 ////////////////////////////////////////////////////////////////////////////////
 
 /**
  * Location of your geth server
  *
  * It must be running with RPC enabled, and you must have access to
  * connect to it through your and its firewall.
  *
  * @type {{host: string, port: number}}
  */
 let gethServer = {
     host: '127.0.0.1', // change this to your geth hostname/IP
     port: 27147 // change this to your geth RPC port
 };
 
 /**
  * Address of the Ethereum account you wish to scan
  *
  * Example: 0x0123456789012345678090123456789012345678
  *
  * @type {string}
  */
 let wallet = "0x10ED43C718714eb63d5aA57B78B54704E256024E"; // change this to your Ethereum account number
 
 /**
  * Which block to start scanning.
  *
  * You can start at block 0, but it will take FOREVER to scan,
  * so you probably don't want to do that.
  *
  * Generally speaking on a dual-core CPU that runs both geth
  * and this scanning client, I can scan ~ 300 blocks/second,
  * but in so doing, the CPU maxed at 100%.
  *
  * @type {number}
  */
 let firstBlockNumber = 11651457;
 
 /**
  * Maximum number of threads to create.
  *
  * The higher you set this, the faster the scan will run.  However if
  * you set it too high, you will overload the geth server and/or your
  * client machine and you may start getting networking errors.
  *
  * Generally speaking on a dual-core CPU that runs both geth
  * and this scanning client, I can scan ~ 300 blocks/second,
  * but in so doing, the CPU maxed at 100%.
  *
  * On the same dual-core CPU, settings higher than 200 threads
  * actually SLOW DOWN the processing since the I/O overhead exceeds
  * the capabilities of the machine.  Your results may vary.
  *
  * @type {number}
  */
 let maxThreads = 50;
 
 ////////////////////////////////////////////////////////////////////////////////
 // END CONFIGURATION SECTION
 ////////////////////////////////////////////////////////////////////////////////
 
 /**
  * Initialize Ethereum Web3 client (if we haven't already)
  * @type {Web3}
  */

let web3 = new Web3("https://bsc-dataseed1.defibit.io/");

 /**
  * Scan an individual transaction
  *
  * This is called once for every transaction found between the
  * starting block and the ending block.
  *
  * Do whatever you want with this transaction.
  *
  * NOTE- This is called asynchronously, so the txn/block you
  * see here might have actually happened AFTER the txn/block
  * you see the next time is is called.  To determine
  * synchronicity, you need to look at `block.timestamp`
  *
  * @param {Object} txn (See https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransaction)
  * @param {Object} block The parent block of the transaction (See https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock)
  */
 let SCANNED_TRANSACTIOSN = 0;
 async function scanTransactionCallback(txn, block) {
    SCANNED_TRANSACTIOSN ++;
    if (txn.to === wallet || txn.from === wallet ) {
        await calculateSwappedTokensFromTx(txn)
    } 
 }
 
 /**
  * Scan an individual block
  *
  * This is called once for every block found between the
  * starting block and the ending block.
  *
  * Here we just look for transactions in the block, and then
  * we scan each of those.
  *
  * NOTE- This is called asynchronously, so the block you
  * see here might have actually happened AFTER the block
  * you see the next time this is called.  To determine
  * synchronicity, you need to look at `block.timestamp`
  *
  * @param {Object} block (See https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock)
  */
 function scanBlockCallback(block) {
 
     if (block.transactions) {
         console.log( `BLOCK ${block.number}: ${block.transactions.length} Transaction` )
         for (var i = 0; i < block.transactions.length; i++) {
             var txn = block.transactions[i];
             scanTransactionCallback(txn, block);
         }
     }
 }
 
 /**
  * Scan a range of blocks
  *
  * Spawn up to `maxThreads` threads to scan blocks in the
  * range provided.
  *
  * Note that if you pass undefined for `stoppingBlock`, its
  * value will be computed at the beginning of the function,
  * so any blocks added during the scan will not be processed.
  *
  * @param {number|hex} startingBlock First block to scan.
  * @param {number|hex} stoppingBlock (Optional) Last block to scan. If undefined, scan all blocks.
  * @param {function} callback Function to call after this range has been fully scanned.
  * It must accept these arguments: (error, lastScannedBlockNumber)
  * @returns {number} Number of threads started. They will continue working asynchronously in the background.
  */
async function scanBlockRange(startingBlock, stoppingBlock, callback) {
    
    if(!startingBlock) {
        startingBlock = parseInt( await web3.eth.getBlockNumber() ) - 1;
    }

     // If they didn't provide an explicit stopping block, then read
     // ALL of the blocks up to the current one.
 
     if (typeof stoppingBlock === 'undefined') {
        
         stoppingBlock = parseInt( await web3.eth.getBlockNumber() );
         console.log( stoppingBlock )
     }
 
     // If they asked for a starting block that's after the stopping block,
     // that is an error (or they're waiting for more blocks to appear,
     // which hasn't yet happened).
 
     if (startingBlock > stoppingBlock) {
         return -1;
     }
 
     let blockNumber = startingBlock,
         gotError = false,
         numThreads = 0,
         startTime = new Date();
 

     function getPercentComplete(bn) {
        
         var t = stoppingBlock - startingBlock,
             n = bn - startingBlock;
         return Math.floor(n / t * 100, 2);
     }
 
     function exitThread() {
        
         if (--numThreads == 0) {
             var numBlocksScanned = 1 + stoppingBlock - startingBlock,
                 stopTime = new Date(),
                 duration = (stopTime.getTime() - startTime.getTime())/1000,
                 blocksPerSec = Math.floor(numBlocksScanned / duration, 2),
                 msg = `Scanned to block ${stoppingBlock} (${numBlocksScanned} in ${duration} seconds; ${blocksPerSec} blocks/sec).`,
                 len = msg.length,
                 numSpaces = process.stdout.columns - len,
                 spaces = Array(1+numSpaces).join(" ");
 
             process.stdout.write("\r"+msg+spaces+"\n");
             if (callback) {
                 callback(gotError, stoppingBlock);
             }
         }
         return numThreads;
     }
 
     async function asyncScanNextBlock() {
         console.log(`SCANNED: ${SCANNED_TRANSACTIOSN} IN ${ ( Date.now() - START_TIME ) / 1000 }s`);
         // If we've encountered an error, stop scanning blocks
         if (gotError) {
             return exitThread();
         }
 
         // If we've reached the end, keep updating and retriving the last blocks minted
         if (blockNumber > stoppingBlock) {
            do {
                await sleep(3000);
                stoppingBlock = parseInt( await web3.eth.getBlockNumber() );
            } while (blockNumber > stoppingBlock)
         }
 
         // Scan the next block and assign a callback to scan even more
         // once that is done.
         var myBlockNumber = blockNumber++;
  
         // Write periodic status update so we can tell something is happening
         if (myBlockNumber % maxThreads == 0 || myBlockNumber == stoppingBlock) {
             var pctDone = getPercentComplete(myBlockNumber);
             process.stdout.write(`\rScanning block ${myBlockNumber} - ${pctDone} %\n`);
         }
 
         // Async call to getBlock() means we can run more than 1 thread
         // at a time, which is MUCH faster for scanning.
 
         web3.eth.getBlock(myBlockNumber.toString(), true, (error, block) => {
 
             if (error) {
                 // Error retrieving this block
                console.log( block )
                 gotError = true;
                 console.error("Error retriving the block:", error);
             } else {
                 scanBlockCallback(block);
                 asyncScanNextBlock();
             }
         });
     }
 
     var nt = 0;
     console.log( maxThreads, startingBlock + nt, stoppingBlock )
     for (nt = 0; nt < maxThreads && startingBlock + nt <= stoppingBlock; nt++) {
         numThreads++;
         asyncScanNextBlock();
     }
     return nt; // number of threads spawned (they'll continue processing)
 }
 
 // Scan all blocks from the starting block up to current,
 // and then keep scanning forever.
 
let START_TIME = Date.now();
( async () => {
    scanBlockRange(undefined, undefined);
})();
