Package.describe({
  name: 'ildar:react-select',
  version: '1.0.0-beta9',
  summary: 'React-Select packaged for Meteor',
  git: 'https://github.com/ildarsamit/meteor-react-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.14.3');
  api.use('cosmos:browserify@0.9.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.addFiles('default.css', 'client');
  api.export('Select');
});

Npm.depends({
  'react-select': '1.0.0-beta9',
  'externalify': '0.1.0',
});
