const inquirer = require('inquirer');
const axios = require('axios');
const nock = require('nock');
const httpAdapter = require('axios/lib/adapters/http');
const { init } = require('../src/cli');
const github = require('../src/github');
const commitsMock = require('./mocks/commits.json');
const { mockBackportDirPath } = require('./testHelpers');
const utils = require('../src/utils');

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('cli', () => {
  const owner = 'elastic';
  const repoName = 'backport-cli-test';
  const fullRepoName = `${owner}/${repoName}`;

  beforeEach(() => {
    mockBackportDirPath();
    jest.spyOn(utils, 'exec').mockReturnValue(Promise.resolve());

    jest
      .spyOn(inquirer, 'prompt')
      .mockReturnValueOnce(Promise.resolve({ fullRepoName }))
      .mockReturnValueOnce(
        Promise.resolve({
          commit: {
            message: 'myCommitMessage',
            sha: 'mySha',
            reference: { value: 'myPullRequest', type: 'pullRequest' }
          },
          version: 'myVersion'
        })
      );

    nock('https://api.github.com')
      .get(`/repos/${owner}/${repoName}/commits`)
      .query({ author: 'sqren', per_page: '5', access_token: 'myAccessToken' })
      .reply(200, commitsMock);

    nock('https://api.github.com')
      .post(`/repos/${owner}/${repoName}/pulls`, {
        title: '[Backport] myCommitMessage',
        body: 'Backports pull request #myPullRequest to myVersion',
        head: 'sqren:backport/myVersion/pr-myPullRequest',
        base: 'myVersion'
      })
      .query({ access_token: 'myAccessToken' })
      .reply(200, {
        html_url: 'myHtmlUrl'
      });

    jest.spyOn(github, 'getCommits');
    jest.spyOn(github, 'createPullRequest');

    return init({
      username: 'sqren',
      accessToken: 'myAccessToken',
      repositories: [
        {
          name: fullRepoName,
          versions: ['6.x', '6.0', '5.6', '5.5', '5.4']
        }
      ]
    });
  });

  test('prompt should display list of repository names', () => {
    expect(inquirer.prompt).toHaveBeenCalledWith([
      {
        choices: ['elastic/backport-cli-test'],
        message: 'Select repository',
        name: 'fullRepoName',
        type: 'list'
      }
    ]);
  });

  test('getCommit should be called with correct args', () => {
    expect(github.getCommits).toHaveBeenCalledWith(
      'elastic',
      'backport-cli-test',
      'sqren'
    );
  });

  test('createPullRequest should be called with correct args', () => {
    expect(github.createPullRequest).toHaveBeenCalledWith(
      'elastic',
      'backport-cli-test',
      {
        base: 'myVersion',
        body: 'Backports pull request #myPullRequest to myVersion',
        head: 'sqren:backport/myVersion/pr-myPullRequest',
        title: '[Backport] myCommitMessage'
      }
    );
  });

  test('prompt calls should match snapshot', () => {
    expect(inquirer.prompt.mock.calls).toMatchSnapshot();
  });

  test('utils, ', () => {
    expect(utils.exec.mock.calls).toMatchSnapshot();
  });
});