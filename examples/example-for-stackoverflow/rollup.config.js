import typescript from 'rollup-plugin-typescript2'
import istanbul from 'rollup-plugin-istanbul'

export default {
    input: 'index.ts',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'testLib'
    },
    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        istanbul({})
    ]
}