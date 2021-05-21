const Intern = require("../lib/Intern");

test("create Intern object", () => {
  const intern = new Intern("Name", "100", "test@email.com", "Test Uni");

  expect(intern.name).toBe("Name");
  expect(intern.id).toBe("100");
  expect(intern.email).toBe("test@email.com");
  expect(intern.school).toBe("Test Uni");
});
