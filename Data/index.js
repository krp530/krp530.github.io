export const data = [
  {
    id: 'id1',
    category: 'Receptionist',
    level: 'Entry',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id2',
    category: 'Office Clerk',
    level: 'Entry',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id3',
    category: 'Sales Assistant',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id4',
    category: 'Administrative Assistant',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id5',
    category: 'Healthcare',
    level: 'Entry',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id6']
  },
  {
    id: 'id6',
    category: 'Healthcare',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id7']
  },
  {
    id: 'id7',
    category: 'Healthcare',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id8']
  },
  {
    id: 'id8',
    category: 'Healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id9', 'id10', 'id11']
  },
  {
    id: 'id9',
    category: 'Healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id']
  },
  {
    id: 'id10',
    category: 'Healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id']
  },
  {
    id: 'id11',
    category: 'Healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id']
  },
]

export const getCategories = (question1, question2, question3) => {

}
