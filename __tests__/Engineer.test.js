const Engineer = require("../lib/Engineer");

test("create Engineer object", () => {
  const engineer = new Engineer("Name", "100", "test@email.com", "gitHubTest");

  expect(engineer.name).toBe("Name");
  expect(engineer.id).toBe("100");
  expect(engineer.email).toBe("test@email.com");
  expect(engineer.github).toBe("gitHubTest");
});
