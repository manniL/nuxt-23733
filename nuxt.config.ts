export default defineNuxtConfig({
  imports: {
    presets: [
      {
        from: 'date-fns',
        imports: ['addMinutes'],
      }
    ]
  }
});
