module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'always'],
    'scope-empty': [2, 'always'],
    'subject-empty': [2, 'always'],
    'header-max-length': [2, 'always', 100],
    'body-empty': [2, 'always'],
    'footer-empty': [2, 'always'],
    'action-enum': [2, 'always', ['Fixed', 'Feature', 'Add', 'Modify', 'Update', 'Delete']],
    'issue-rule': [2, 'always', ['TMP', 'TTT']], // 根据自己需要输入即可
  },
  plugins: [
    {
      rules: {
        'action-enum': ({ raw }, when = 'always', value = []) => {
          return [
            value.includes(raw.split(' ')[0]),
            `提交信息不合规范! {Action}错误!
      必须以 "{Action}{空格}#{标号}{空格}" 开头。
      {Action}可选：${value.join('|')}
      比如: Fixed #TMP-111 修复接口传参错误的问题
      ${when === 'never' ? '另外: action-enum规则第二个参数必须是always, 建议修改' : ''}...`,
          ];
        },
        'issue-rule': ({ raw }, when, value = []) => {
          const issueStr = `^([A-Z][a-z]*\\s#(${value.join('|')})\\-[1-9][0-9]*)`;
          const issueReg = new RegExp(issueStr, 'g');
          return [
            issueReg.test(raw),
            `提交信息不合规范! {标号}错误!
      必须以 "{Action}{空格}#{标号}{空格}" 开头。
      {标号}可选: ${value.join('|')}
      比如: Fixed #TMP-111 修复接口传参错误的问题
      ${when === 'never' ? '另外: action-enum规则第二个参数必须是always, 建议修改' : ''}...`,
          ];
        },
      },
    },
  ],
};
