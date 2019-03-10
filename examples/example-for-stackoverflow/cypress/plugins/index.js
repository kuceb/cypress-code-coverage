// I have absolutely no idea what is going on here
// Adapted from https://github.com/paulfalgout/cypress-coverage-example
let coverageMap;
module.exports = (on, config) => {
    const istanbul = require('istanbul-lib-coverage');
    coverageMap = istanbul.createCoverageMap({});
    on('task', {
        coverage(cov) {
            coverageMap.merge(cov);
            return JSON.stringify(coverageMap);
        }
    });
    return config;
};