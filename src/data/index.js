export const data = [
  {
    id: 'id1',
    category: 'receptionist',
    level: 'entry',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id'],
    listings: ''
  },
  {
    id: 'id2',
    category: 'office clerk',
    level: 'entry',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id'],
    listings: ''
  },
  {
    id: 'id3',
    category: 'sales assistant',
    level: 'intermediate',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id'],
    listings: ''
  },
  {
    id: 'id4',
    category: 'administrative assistant',
    level: 'intermediate',
    question1: false,
    question2: false,
    question3: false,
    nextSteps: ['id'],
    listings: ''
  },
  {
    id: 'id5',
    category: 'healthcare',
    level: 'entry',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id6'],
    listings: 'https://www.indeed.com/q-dental-assistant-jobs.html'
  },
  {
    id: 'id6',
    category: 'healthcare',
    level: 'intermediate',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id7'],
    listings: 'https://www.indeed.com/q-dental-hygienist-jobs.html'
  },
  {
    id: 'id7',
    category: 'healthcare',
    level: 'intermediate',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id8'],
    listings: 'https://www.indeed.com/q-dental-technician-jobs.html'
  },
  {
    id: 'id8',
    category: 'healthcare',
    level: 'senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id9', 'id10', 'id11'],
    listings: 'https://www.indeed.com/q-dentist-jobs.html'
  },
  {
    id: 'id9',
    category: 'healthcare',
    level: 'senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id'],
    listings: 'https://www.indeed.com/q-orthodontist-jobs.html'
  },
  {
    id: 'id10',
    category: 'healthcare',
    level: 'senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id'],
    listings: 'https://www.indeed.com/q-periodontist-jobs.html'
  },
  {
    id: 'id11',
    category: 'healthcare',
    level: 'senior',
    question1: false,
    question2: false,
    question3: true,
    nextSteps: ['id'],
    listings: 'https://www.indeed.com/q-oral-surgeon-jobs.html'
  },
]

export const getCategories = (question1, question2, question3) => {

}
