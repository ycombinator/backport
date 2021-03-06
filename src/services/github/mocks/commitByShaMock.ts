export const commitByShaMock = {
  sha: 'myCommitSha',
  commit: {
    author: {
      name: 'Søren Louv-Jansen',
      email: 'sorenlouv@gmail.com',
      date: '2017-11-28T18:44:33Z'
    },
    committer: {
      name: 'GitHub',
      email: 'noreply@github.com',
      date: '2017-11-28T18:44:33Z'
    },
    message: '[Chrome] Bootstrap Angular into document.body',
    tree: {
      sha: 'ce129055d52748ed4d931cbc1591d984d71ec04f',
      url:
        'https://api.github.com/repos/elastic/kibana/git/trees/ce129055d52748ed4d931cbc1591d984d71ec04f'
    },
    url: 'https://api.github.com/repos/elastic/kibana/git/commits/myCommitSha',
    comment_count: 0,
    verification: {
      verified: true,
      reason: 'valid',
      signature:
        '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJaHa6RCRBK7hj4Ov3rIwAAdHIIAKCbJdxH0Rvxt7oY5hIHFbpI\nFLFKyvzssgIDULgWzqIcc839ChnQuJOtCvobSeGCS3OMcxG+D0DKfn0MAOVGMyfD\n3vWYfkwE7asq2wKPPAsJ8tXNFQ4QLdCh9M24VyZxZwL49si2tZlLwN7vbWAdLgrc\n8MP4YWw7s7Y3Bw0Sm13kDMw07jUWJJd/PgU+cYs3EU+nkjGuz5V85U6w6qavdhqM\n1tQ5iv3q6AyzUDBm4LRX0t89STrCZpt3lG6jhUsqQscGKGBCxhks3zra4DClJIeK\nWoZbSiLcuKgU81KJyF2Wq/i7XMvhv1UQdTu3gqZOHpZEwNjaMaqGoUVs8bu0w+Q=\n=EWOy\n-----END PGP SIGNATURE-----\n',
      payload:
        'tree ce129055d52748ed4d931cbc1591d984d71ec04f\nparent b81fd782c7a63bc231b4678aa4e685c2025fa302\nauthor Søren Louv-Jansen <sorenlouv@gmail.com> 1511894673 +0100\ncommitter GitHub <noreply@github.com> 1511894673 +0100\n\n[Chrome] Bootstrap Angular into document.body\n\n'
    }
  },
  url: 'https://api.github.com/repos/elastic/kibana/commits/myCommitSha',
  html_url: 'https://github.com/elastic/kibana/commit/myCommitSha',
  comments_url:
    'https://api.github.com/repos/elastic/kibana/commits/myCommitSha/comments',
  author: {
    login: 'sqren',
    id: 209966,
    avatar_url: 'https://avatars3.githubusercontent.com/u/209966?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/sqren',
    html_url: 'https://github.com/sqren',
    followers_url: 'https://api.github.com/users/sqren/followers',
    following_url: 'https://api.github.com/users/sqren/following{/other_user}',
    gists_url: 'https://api.github.com/users/sqren/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/sqren/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/sqren/subscriptions',
    organizations_url: 'https://api.github.com/users/sqren/orgs',
    repos_url: 'https://api.github.com/users/sqren/repos',
    events_url: 'https://api.github.com/users/sqren/events{/privacy}',
    received_events_url: 'https://api.github.com/users/sqren/received_events',
    type: 'User',
    site_admin: false
  },
  committer: {
    login: 'web-flow',
    id: 19864447,
    avatar_url: 'https://avatars3.githubusercontent.com/u/19864447?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/web-flow',
    html_url: 'https://github.com/web-flow',
    followers_url: 'https://api.github.com/users/web-flow/followers',
    following_url:
      'https://api.github.com/users/web-flow/following{/other_user}',
    gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/web-flow/subscriptions',
    organizations_url: 'https://api.github.com/users/web-flow/orgs',
    repos_url: 'https://api.github.com/users/web-flow/repos',
    events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/web-flow/received_events',
    type: 'User',
    site_admin: false
  },
  parents: [
    {
      sha: 'b81fd782c7a63bc231b4678aa4e685c2025fa302',
      url:
        'https://api.github.com/repos/elastic/kibana/commits/b81fd782c7a63bc231b4678aa4e685c2025fa302',
      html_url:
        'https://github.com/elastic/kibana/commit/b81fd782c7a63bc231b4678aa4e685c2025fa302'
    }
  ],
  stats: {
    total: 2,
    additions: 1,
    deletions: 1
  },
  files: [
    {
      sha: 'd5101afab62e09bce22b8c62e01a8a5fd030f337',
      filename: 'src/ui/public/chrome/chrome.js',
      status: 'modified',
      additions: 1,
      deletions: 1,
      changes: 2,
      blob_url:
        'https://github.com/elastic/kibana/blob/myCommitSha/src/ui/public/chrome/chrome.js',
      raw_url:
        'https://github.com/elastic/kibana/raw/myCommitSha/src/ui/public/chrome/chrome.js',
      contents_url:
        'https://api.github.com/repos/elastic/kibana/contents/src/ui/public/chrome/chrome.js?ref=myCommitSha',
      patch:
        "@@ -48,5 +48,5 @@ translationsApi(chrome, internals);\n \n chrome.bootstrap = function () {\n   chrome.setupAngular();\n-  angular.bootstrap(document, ['kibana']);\n+  angular.bootstrap(document.body, ['kibana']);\n };"
    }
  ]
};
