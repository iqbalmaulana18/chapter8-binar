module.exports = {
  info: {
    title: "Chapter 8 Binar",
    description: "This is a documentation for learning purpose",
    contact: {
      name: "iqbal",
      email: "iqbal@maulana.com",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:5010/api/v1",
    },
  ],
  tags: [
    {
        name: "Player",
        description: "player endpoints"
    }
  ],
    filesPattern: './**/*.js',
    baseDir: __dirname,
    swaggerUIPath: '/swagger',
};