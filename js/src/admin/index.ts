import app from 'flarum/admin/app';

app.initializers.add('davwheat/test-extension', () => {
  console.log('[davwheat/test-extension] Hello, admin!');
});
