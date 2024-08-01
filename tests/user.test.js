const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index.js");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.mongoUrl);
});

describe("POST /user/register", () => {
  it("should return successfull and register an user", async () => {
    const res = await request(app).post("/user/register").send({
        name: "hari",
        email:"hari@gmail.com",
        password: "hari"
    });
    // expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("hari");
  });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
