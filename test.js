let puckChain = require('./index.js');
lexer = puckChain.chainLexer.cLexer;
let code = "int a = 20;";
lexer.start(code);
let parsedTokens = lexer.DFA.result.tokens;
console.log(parsedTokens);