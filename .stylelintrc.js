module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  syntax: 'scss',
  // ignoreFiles: ['./src/style.css'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-before': ['always'],
    'block-opening-brace-newline-after': ['always'],
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
      },
    ],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-trailing-semicolon':
      null /* This rule is recommanded because of conflict by semicolon rule between prettier and stylelint */,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'function-comma-space-after': 'always',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
        // ignoreNamespaces: ["/regex/", /regex/, "string"],
        // ignoreTypes: ["/regex/", /regex/, "string"],
      },
    ],
    'max-empty-lines': [
      1,
      {
        ignore: ['comments'],
      },
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'no-extra-semicolons': true,
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list'],
      },
    ], // 라이브러리를 사용하거나 다른 사람의 프로젝트를 이어 받을 때는 이 옵션을 사용하지 않도록 하자. 엄청 귀찮아짐.
    'number-leading-zero': 'always',
    'number-max-precision': 4,
    'number-no-trailing-zeros': true,
    'order/properties-alphabetical-order': true,
    'property-case': 'lower',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['after-single-line-comment', 'first-nested'],
      },
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always', // 'never'로 하면 "Unclosed string (CssSyntaxError)" 에러 발생. 아마도 eslint의 rule과 충돌하는 듯.
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always-multi-line',
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
  },
}
