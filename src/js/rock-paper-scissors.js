// function RockPaperScissors()  {
//   this.check = (number) => {
//       return number
//   }
// }

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
    return userInput;
  } else {
    console.log('Invalid input');
  }
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissor';
  };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  }
  if (userChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  }
}

// const playGame = () => {
//   const userChoice = getUserChoice('rock');
//   const computerChoice = getComputerChoice();
//   console.log(`You threw: ${userChoice}`);
//   console.log(`The computer threw: ${computerChoice}`);
//   console.log(determineWinner(userChoice, computerChoice));
// }

// playGame();
