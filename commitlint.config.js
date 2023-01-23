module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'docs',
        // feat refers to new features
        'feat',
        'fix',
        // perf refers to A code change that improves performance
        'perf',
        // refactor refers to  A code change that neither fixes a bug nor adds a feature
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
