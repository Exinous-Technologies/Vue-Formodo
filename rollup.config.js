import alias from '@rollup/plugin-alias'
import * as path from 'path'
import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function config() {
  return {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/library.js',
      },
    ],
    plugins: [
      vue(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      clear({
        targets: ['./dist'],
      }),
    ],
  }
}
