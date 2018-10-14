export const data = [
  {
    id: 'id1',
    category: 'receptionist',
    level: 'Entry',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id2',
    category: 'office clerk',
    level: 'Entry',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id3',
    category: 'sales assistant',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id4',
    category: 'administrative assistant',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id']
  },
  {
    id: 'id5',
    category: 'healthcare',
    level: 'Entry',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id6']
  },
  {
    id: 'id6',
    category: 'healthcare',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id7']
  },
  {
    id: 'id7',
    category: 'healthcare',
    level: 'Intermediate',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id8']
  },
  {
    id: 'id8',
    category: 'healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id9', 'id10', 'id11']
  },
  {
    id: 'id9',
    category: 'healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id']
  },
  {
    id: 'id10',
    category: 'healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id']
  },
  {
    id: 'id11',
    category: 'healthcare',
    level: 'Senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id']
  },
]

export const getCategories = (question1, question2, question3) => {

}
