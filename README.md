# cypress-code-coverage
A repo to help you with code coverage + cypress

## About 
the strategy is:

- instrument your app code so that coverage is generated on `window.__coverage__`
- after cypress spec runs, use `cy.writeFile` to save the report to `.nyc_output`
- and generate the report with `cy.exec('nyc report --reporter=html')`

**you should then be able the view the html coverage report in the `coverage/` directory** 



## Examples

### [example-for-stackoverflow](https://github.com/Bkucera/cypress-code-coverage/tree/master/examples/example-for-stackoverflow)
Example to show the fix for [this specific stackoverflow question](https://stackoverflow.com/a/55091372/4135063)


### [create-react-app-ejected](https://github.com/Bkucera/cypress-code-coverage/tree/master/examples/create-react-app-ejected)
cypress with code coverage set up on a newly-ejected [`create-react-app`](https://github.com/facebook/create-react-app)

**uses**:

+  `@babel/preset-typescript`
+  `@cypress/webpack-preprocessor`
+  `@cypress/webpack-preprocessor`
+  `babel-plugin-istanbul`

### [vanilla-typescript-webpack](https://github.com/Bkucera/cypress-code-coverage/tree/master/examples/vanilla-typescript-webpack)
code coverage on a vanilla typescript & webpack project

**uses**:

+  `@babel/preset-typescript`
+  `@cypress/webpack-preprocessor`
+  `babel-loader`
+  `babel-plugin-istanbul`



## Future

- example with `ts-loader`
- example with bundlers besides webpack
- more tests for edge cases in cypress tests
