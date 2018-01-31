const server = require("../server");
const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Tests d'intégration du serveur sur le path /", () => {
  it("should repondre Hello World quand un GET est execute", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.status.should.equal(200);
        res.type.should.equal("text/html");
        res.text.should.equal("Hello World!");
        done();
      });
  });
  it("should renvoyer une erreur 404  quand un POST est execute", done => {
    chai
      .request(server)
      .post("/")
      .end((err, res) => {
        should.exist(err);
        res.should.have.status(404);
        res.status.should.equal(404);
        done();
      });
  });
});
