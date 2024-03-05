const app = require("../app");
const session = require("supertest");
const agent = session(app);

describe("GET: /character", () => {
  it("Responde con status 200", async () => {
    const response = await agent.get("/character").send();
    //console.log(response);
    // console.log(response.status);
    expect(response.status).toBe(200);
  })
  it("Devuelve un JSON", async () => {
    await agent
      .get("/character")
      .expect("Content-Type", /json/);
      //.expect(...)
  })
  it("Devuelve el personaje", async () => {
    const response = await agent.get("/character");
    // console.log(response.body);
    expect(response.body).toEqual({ name: 'Rick', lastname: 'Sanchez' })
  })

})