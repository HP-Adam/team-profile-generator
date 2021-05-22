module.exports = (templateData) => {
  /* example employee data from User()
  [
  Manager { name: 'test', id: 'test', email: 'test', officeNumber: 'test' },
  Engineer { name: 'test', id: 'test', email: 'test', github: 'test' },
  Intern { name: 'test', id: 'test', email: 'test', school: 'test' }
]
  */
  const {} = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
  
    </body>
  </html>
  

    `;
};
