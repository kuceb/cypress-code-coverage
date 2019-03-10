# Trying to make Cypress, TypeScript and IstanbulJS work together

**There is a [question on stackoverflow](https://stackoverflow.com/q/54937425/4135063) dedicated to this repository**

I am trying to generate code coverage reports with [IstanbulJS](https://github.com/istanbuljs/istanbuljs) for my code written in [TypeScript](https://github.com/Microsoft/TypeScript) and tested with [Cypress](https://www.cypress.io/). But things get reported out of place:

![IstanbulJS's HTML report with hit counter in the wrong lines](https://i.stack.imgur.com/8RNp2.png)

I created a [git repository](https://github.com/papb/cy-ts-istanbul-question) [MCVE](https://stackoverflow.com/help/mcve) specifically for this question, so you can reproduce exactly my situation:

    git clone https://github.com/papb/cy-ts-istanbul-question
    cd cy-ts-istanbul-question
    npm install
    npm test
    # And then open the file `coverage/index.ts.html` to see the image above.

**How to fix that?**

----------

## Details

I have some code written in TypeScript which I transpile and bundle to a single JavaScript (ES6) file with [rollup](https://rollupjs.org/), [rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2) and [rollup-plugin-istanbul](https://www.npmjs.com/package/rollup-plugin-istanbul). This works perfectly, my source code in TypeScript becomes a file ready to be included with a `<script>` tag into the browser and used.

Secondly, I use [cypress](https://www.cypress.io/) to run tests on an HTML page which includes the transpiled JS code mentioned above. This also works perfectly, cypress is able to test my functions originally written in TypeScript.

Now, I want to set up coverage reports for those tests. On Cypress FAQ we can find the question *[Is there code coverage?](https://docs.cypress.io/faq/questions/general-questions-faq.html#Is-there-code-coverage)* to which the answer is currently *no* (regarding built-in functionality) but is [in discussion](https://github.com/cypress-io/cypress/issues/346) as a welcome thing to be done in the future, and [in fact it can be done](https://github.com/cypress-io/cypress/issues/346#issuecomment-415462938).

The thing is: the guy who did it above was not using TypeScript. I am. So I have a little extra step to do, and this is where I'm currently stuck. Intuitively, I think this is just a matter of configuring IstanbulJS to follow the source maps correctly, but I couldn't find any documentation on how to do it. [Every guide about TypeScript + IstanbulJS that I can find](https://istanbul.js.org/docs/tutorials/typescript/) assumes that I am using Mocha, but I'm not - I am using Cypress with a transpiled source coming from TypeScript.

*Note: I am aware that in general the usual "code coverage" approach to cypress testing doesn't make much sense, but in my exact situation I think it does, I've thought about it already, please don't make this frame challenge to the question.*