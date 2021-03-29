const { expect } = require("chai");
const { medianScore, topScoringStudent } = require("../src/main");

describe("medianScore", () => {
  it("should return the student with the median score for a list of students", () => {
    const students = [
      { name: "Luana Barbosa", score: 9.2 },
      { name: "Evan Webb", score: 8.4 },
      { name: "Riley Morgan", score: 9.8 },
      { name: "Caleb Tyler", score: 6.9 },
      { name: "Val Avila", score: 7.4 },
    ];
    const actual = medianScore(students);
    const expected = 8.4;
    expect(actual).to.be.a("number");
    expect(actual).to.equal(expected);
  });
  
  it("should reflect a lack of coverage if students is null", () => {
    const students = [];
    const actual = medianScore(students);
    const expected = null;
    // expect(actual).to.be.a("number");
    expect(actual).to.be.null;
  });
});

describe("topScoringStudent", () => {
  it("should return the student with the highest score for a list of students", () => {
    const students = [
      { name: "Luana Barbosa", score: 9.2 },
      { name: "Evan Webb", score: 8.4 },
      { name: "Riley Morgan", score: 9.8 },
      { name: "Caleb Tyler", score: 6.9 },
      { name: "Val Avila", score: 7.4 },
    ];
    const actual = topScoringStudent(students);
    const expected = { name: "Riley Morgan", score: 9.8 };
    // different objects in memory 
    // expect(actual).to.be.an("object");
    expect(actual).to.eql(expected);
  });
  it("should reflect a lack of coverage if students is null", () => {
    const students = [];
    const actual = topScoringStudent(students);
    const expected = null;
    // expect(actual).to.be.a("number");
    expect(actual).to.be.null;
  });
});
