import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [RuleConfigSeverity.Error, 'always', ['fix', 'refactor', 'feature', 'revert', 'release', 'enh']],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'sentence-case'],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-max-length': [RuleConfigSeverity.Error, 'always', 72],
  },
};

module.exports = Configuration;
