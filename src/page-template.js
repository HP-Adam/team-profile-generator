const managerDisp = (data) => {
  return `
  ${data
    .map(({ name, id, email, officeNumber }) => {
      return `
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">ID: ${id}</p>
          <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
          <p class="card-text">Office number: ${officeNumber}</p>
        </div>
      </div>
    </div>
    `;
    })
    .join("")}

  `;
};

const engineerDisp = (data) => {
  return `
  ${data
    .map(({ name, id, email, github }) => {
      return `
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
          <p class="card-text">ID: ${id}</p>
          <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
          <p class="card-text">GitHub: <a href="https://github.com/${github}">${github}</a></p>
        </div>
      </div>
    </div>
    `;
    })
    .join("")}

  `;
};

const internDisp = (data) => {
  return `
  ${data
    .map(({ name, id, email, school }) => {
      return `
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">ID: ${id}</p>
          <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
          <p class="card-text">School: ${school}</p>
        </div>
      </div>
    </div>
    `;
    })
    .join("")}

  `;
};
module.exports = (templateData) => {
  let managerData = templateData.manager;
  let engineerData = templateData.engineer;
  let internData = templateData.intern;

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

      <div class="row">
      ${managerDisp(managerData)}
      ${engineerDisp(engineerData)}
      ${internDisp(internData)}
      </div>
    </header>
  </body>
</html> 

    `;
};
