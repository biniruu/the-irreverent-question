module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended', // Typescript Lint 규칙 모음
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // 'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    // 'plugin:vue/strongly-recommended',
    // 'standard',
    // 'tsconfig.json', // project: 'tsconfig.json'을 활성화 하기 위해 꼭 필요
  ],
  // globals: {
  //   $nuxt: true,
  // },
  // parser: '@typescript-eslint/parser',
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true,
    // },
    ecmaVersion: 6,
    // project: 'tsconfig.json', // parser: @typescript-eslint/parsergst를 활성화 하기 위해 꼭 필요
    sourceType: 'module',
  },
  plugins: [
    // '@typescript-eslint',
    'prettier',
    // 'vue',
  ],
  root: true,
  rules: {
    // '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'comma-dangle': 'off',
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: false,
      },
    ], // class 안에서 정의한 멤버의 대괄호 안에 간격 삽입
    'generator-star-spacing': 'off', // allow async-await
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': 'off', // allow debugger during development
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    // 'vue/no-unused-components': 'warn',
  },
}
