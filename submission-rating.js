export {ratings,levels,desc,content}

const ratings = ['Value', 'Feasibility', 'Idea Maturity'];
const levels = ['High', 'Medium', 'Low'];

const desc = [
  'What benefit would the idea bring? ',
  'How easy it is to implement the idea?',
  'How developed and well organised the idea?',
];

const content = [
  [
    [
      `Directly addresses strategic priorities of Reinventing Upstream (RU) and MFT50`,
      'High expected financial benefit',
      `High chances of the solution being used across Upstream business`,
    ],
    [
      'Partially/indirectly addresses strategic priorities of Reinventing Upstream (RU) and MFT50 ',
      'Moderate expected financial benefits',
      'Solution can/will only be used business segment which applicable to specific Division/Assets. ',
    ],
    [
      'Does not address strategic priorities of Reinventing Upstream (RU) and MFT50 Low expected financial benefit',
      'Solution is Business Vertical or site specific which applicable to specific process',
    ],
  ],
  [
    [
      'Low investment required',
      '3- 4 months of implementation & <3 months adoption by user',
      'Low solution complexity',
    ],
    [
      'Medium investment required',
      '4- 6 months of implementation & 3-6 months adoption by user',
      'Medium solution complexity',
    ],
    [
      'Low investment required',
      '>6 months of implementation & >6 months adoption by user',
      'High solution complexity',
    ],
  ],
  [
    ['Idea endorsed by Leadership or Community of Practice'],
    ['Idea endorsed by Head of Department or Supervisor'],
    ['Idea newly incubated by an individual or a team'],
  ],
]
