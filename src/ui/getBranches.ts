import isEmpty from 'lodash.isempty';
import { BackportOptions } from '../options/options';
import { BranchChoice } from '../types/Config';
import { promptForBranches } from '../services/prompts';

export function getBranches(options: BackportOptions) {
  if (!isEmpty(options.branches)) {
    return options.branches;
  }

  return promptForBranches(
    options.branchChoices as BranchChoice[],
    options.multipleBranches
  );
}
