Package.describe({
  name: 'ildar:react-select',
  version: '0.6.11',
  summary: 'React-Select packaged for Meteor',
  git: 'https://github.com/ildarsamit/meteor-react-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('react');
  api.use('cosmos:browserify');
  api.addFiles('package.browserify.js');
  api.addFiles('package.browserify.options.json');
  api.addFiles('default.css', 'client');
  api.export('Select');
});

Npm.depends({
  'react-select': '0.6.11',
  'externalify': '0.1.0',
});
