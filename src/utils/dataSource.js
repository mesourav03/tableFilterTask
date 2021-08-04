export const columns = [
  {
    title: "Player",
    dataIndex: "player",
    sorter: (a, b) => a.player.length - b.player.length,
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Country",
    dataIndex: "country",
    filters: [
      {
        text: "USA",
        value: "USA",
      },
      {
        text: "England",
        value: "England",
      },
      {
        text: "India",
        value: "India",
      },
    ],
    onFilter: (value, record) => record.country.indexOf(value) === 0,
  },
  {
    title: "Position",
    dataIndex: "position",
  },
  {
    title: "Team",
    dataIndex: "team",
  },
];

export const data = [
  {
    key: "1",
    player: "Joe Gomez",
    age: 19,
    country: "USA",
    position: "CB",
    team: "Liverpool",
  },
  {
    key: "2",
    player: "Mats Hummels",
    age: 20,
    country: "USA",
    position: "GK",
    team: "Liverpool",
  },
  {
    key: "3",
    player: "Christopher Nkunku",
    age: 20,
    country: "England",
    position: "CB",
    team: "Liverpool",
  },
  {
    key: "4",
    player: "Dries Mertens",
    age: 21,
    country: "England",
    position: "CB",
    team: "Liverpool",
  },
  {
    key: "5",
    player: "Jadon Sancho",
    age: 22,
    country: "England",
    position: "CF",
    team: "Liverpool",
  },
  {
    key: "6",
    player: "Thomas Partey",
    age: 23,
    country: "India",
    position: "CF",
    team: "Bayern",
  },
  {
    key: "7",
    player: "Luis Muriel",
    age: 27,
    country: "England",
    position: "CF",
    team: "Bayern",
  },
  {
    key: "8",
    player: "Serge Gnabry",
    age: 28,
    country: "India",
    position: "GK",
    team: "Bayern",
  },
];
