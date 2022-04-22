import app from 'flarum/common/app';

app.initializers.add('davwheat/test-extension', () => {
  console.log('[davwheat/test-extension] Hello, forum and admin!');
});
