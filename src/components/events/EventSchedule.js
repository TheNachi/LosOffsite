const tableHead = ['', 'Participation', 'Rules', 'Duration', 'Start Time', 'End Time'];
const bootcampGames = [
  ['Drill', 'ALL', 'No Rules', '30 Minutes', '9:30:00 AM', '10:00:00 AM'],
  ['Obstacle Course', '1 Rep Per Tribe',
    `One attempt per obstacle, participants get eliminated if they don't scale through
    1 tribe at a time
    The tribe that finishes the course the fastest wins`, '45 Minutes', '10:15:00 AM', '11:00:00 AM'],
  ['', '', 'Stretch Break', '', '11:00:00 AM', '11:15:00 AM']
];
const minefieldGames = [
  ['Obstacle Course', '2 Reps Per Tribe',
    `One rep must navigate the minefield blindfolded while the other rep on the other side of the field helps them through
   Team that completes the challenge in the shortest time wins
   (5 tribes at a time)`, '45 Minutes', '11:15:00 AM', '12:00:00 PM'],
  ['', '', 'Stretch Break', '', '12:00:00 PM', '12:15:00 PM']
];
const ingredientE = ['Ingredient E Announcement', '', '', 'Kate', '', ''];
const ingredientEAnnouncement = [
  ['Announcement', '', '', '', '12:15:00 PM', '12:30:00 PM'],
  ['Huddle Time', '', '', '', '12:30:00 PM', '1:00:00 PM']
];
const lunch = ['LUNCH', '', '', '', '1:00:00 PM', '2:00:00 PM'];
const survivorGames = [
  ['Water Challenge', 'All', 'Water Challenge - 10 Teams with the highest level of water advance to "Capture the flag"', '', '2:00:00 PM', '2:30:00 PM'],
  ['Capture The Flag', 'Top 10 tribes from Water Challenge', 'Each team has 10mins to capture the other teams flag, if no flag is captured, the winner is the team with least amount of prisoners', '', '2:40:00 PM', '3:30:00 PM'],
  ['Ring Toss', 'Top 5 tribes', '', '', '3:30:00 PM', '4:00:00 PM']
];
const ingredientESchedule = [
  ['', 'Talent Show', 'Ingredient E Talent Show', '', '5:00:00 PM', '6:00:00 PM'],
  ['', 'Medals', 'Presentation of medals to top 3 tribes', '', '6:15:00 PM', '6:45:00 PM'],
  ['', 'Performer', 'Musical Performance', '', '7:00:00 PM', '7:15:00 PM'],
  ['', 'Leadership', 'Wrap up by Seni or Taiwo', '', '7:15:00 PM', '7:30:00 PM'],
  ['', 'Dance Dance Dance', '', '', '7:30:00 PM', '9:00:00 PM']
];

export default {
  tableHead,
  bootcampGames,
  minefieldGames,
  ingredientE,
  ingredientEAnnouncement,
  lunch,
  survivorGames,
  ingredientESchedule
};
