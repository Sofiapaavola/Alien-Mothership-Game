import Snake from "../classes/snake";

describe("Parent Snake class tests", () => {
  let testSnake;
  beforeEach(() => {
    testSnake = new Snake(80, 7);
  });

  test("Check the attributes are present", () => {
    expect(testSnake.hp).toEqual(80);
    expect(testSnake.damage).toEqual(7);
    expect(testSnake.alive).toEqual(true);
  });
  
  test("test the beenHit function", () => {
    expect(testSnake.hp).toEqual(80);
    testSnake.beenHit();
    expect(testSnake.hp).toEqual(73);
  });

  test("test snake is alive after been beenHit", () => {
    expect(testSnake.hp).toEqual(80);
    testSnake.beenHit();
    expect(testSnake.hp).toEqual(73);
    expect(testSnake.alive).toEqual(true);
  });

  test("test snake is dead after beenHit function", () => {
    testSnake = new Snake (7, 7)
    testSnake.beenHit();
    expect(testSnake.hp).toEqual(0);
    expect(testSnake.alive).toEqual(false);
  });

  test("test snake can not drop below 0 after beenHit function", () => {
    testSnake = new Snake (5, 7)
    testSnake.beenHit();
    expect(testSnake.hp).toEqual(0);
    expect(testSnake.alive).toEqual(false);
  });
});