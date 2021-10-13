# puckchain
A javascript toolchain of compiler frontend for you to parse codes and make some amazing things.

![img](https://img.shields.io/badge/JavaScript-ES5+-blue.svg) &nbsp; ![img](https://img.shields.io/badge/Release-0.1.0-blue.svg) &nbsp; ![GitHub](https://img.shields.io/badge/License-MIT-green.svg)

### Contents
- [1、User Guide](#1)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(1) What is puckchain](#11)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(2) What will it bring to us](#12)
- [2、Install](#2)
- [3、Usage](#3)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(1) chain-lexer](#31)

## <span id="1">1、User Guide</span>
### (1) What is puckchain
It's a javascript toolchain of compiler frontend for you to parse codes and make some amazing things, such as code editor, domain specific language, etc. 

<img width="700" alt="puckchain" src="https://user-images.githubusercontent.com/35942268/137073788-2487da9f-6b81-4f72-ac5a-94cf27e806b7.png">

### (2) What will it bring to us
It provides some out of box components of compiler frontend, you can solve many scenarios that require parsing code.

## <span id="2">2、Install</span>
```bash
git clone https://github.com/WGrape/puckchain/
npm install
```

## <span id="3">3、Usage</span>

### <span id="31">(1) chain-lexer</span>
```bash
let puckChain = require('puckChain');
lexer = puckChain.chainLexer.cLexer;
let code = "int a = 20;";
lexer.start("code");
let parsedTokens = lexer.DFA.result.tokens;
```

