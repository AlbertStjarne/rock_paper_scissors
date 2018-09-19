const { RockPaperScissors } =  require('./spec.helper')

describe('Rock Paper Scissors', () => {
  let rockPaperScissors = new RockPaperScissors

  it('returns a number if no game rules are met', () => {
    expect(rockPaperScissors.check(1)).to.eql(1)
})

});