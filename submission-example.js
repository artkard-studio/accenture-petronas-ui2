export {data}

const data = {
  forms: [
    ['Division', 'Development'],
    ['Department', 'PED'],
    ['Team/Ind. Name', 'R2GLOP'],
    ['Idea Name', 'Gas Lift Optimisation'],
    ['Focus Area', 'Development'],
    ['Value', 'High/Medium/Low'],
    ['Feasibility', 'High/Medium/Low'],
    ['Idea Maturity', 'High/Medium/Low'],
  ],

  textareas: [
    {
      text: 'Overview',
      hint: '(What is your business requirement and pain points & who is impacted?)',
      model: `Business Requirement

- Gas Lift Optimisation POC aims to accelerate and improve gas lift injection efficiency to achieve production target while minimizing production deferment lower than 30%.

- This is to address Upstream Risk Profile and Contractor Compliance Indicator (CCI) request on improvement for UPD Management Business Pain Points

- Multiple data sources with no real-time subsurface & surface data

Impacted Persona

- Wells Intervention Engineer
`,
    },
    {
      text: 'Expected Key Solution ',
      hint: '(What are the solution key features & functionalities?)',
      model: `Solution Key Features & Functionalities

- Move from manual valve to wireless valve enabling real-time data capture

- Enhanced IAM platform with AI/ML capability enabling real-time well performance monitoring, automated candidate screening and integrated asset modelling
`,
    },
    {
      text: 'Potential Value Creation ',
      hint: '(What is your business value of this idea?)',
      model: `Potential Value Creation

This solution typically helps in;

- Upto 70% Improvement GLOP Success Rate

- Upto 30% Improvement in Process Cycletime

- Eliminate Work Permit & Contract Issues

- Better Use of Engineers for Value Added Activities
`,
    },
    {
      text: 'Key Risk & Dependencies',
      hint: '',
      model: `Key Risk & Dependencies

- Investment in wireless valve

- Limited source of Partners

`,
    },
  ],
};
