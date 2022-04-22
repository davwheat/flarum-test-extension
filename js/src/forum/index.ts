import app from 'flarum/forum/app';

app.initializers.add('davwheat/test-extension', () => {
  console.log('[davwheat/test-extension] Hello, forum!');
});
