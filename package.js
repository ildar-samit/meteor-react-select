Package.describe({
  name: 'ildar:react-select',
  version: '0.6.11_4',
  summary: 'React-Select packaged for Meteor',
  git: 'https://github.com/ildarsamit/meteor-react-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.5.1', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.addFiles('default.css', 'client');
  api.export('Select');
});

Npm.depends({
  'react-select': '0.7.0',
  'externalify': '0.1.0',
});
