const Employee = require("../lib/Employee");
const { test, expect } = require("@jest/globals");

test("creates an Employee object", () => {
  const employee = new Employee("Bob McTest", "1000", "BMTest@test.com");

  expect(employee.name).toBe("Bob McTest");
  expect(employee.id).toBe("1000");
  expect(employee.email).toEqual(expect.any(String));
});
