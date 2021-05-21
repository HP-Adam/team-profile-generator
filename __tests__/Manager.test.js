const Manager = require("../lib/Manager");

test("create Manager object", () => {
  const manager = new Manager("Name", "100", "test@email.com", "10");

  expect(manager.name).toBe("Name");
  expect(manager.id).toBe("100");
  expect(manager.email).toBe("test@email.com");
  expect(manager.officeNumber).toBe("10");
});
