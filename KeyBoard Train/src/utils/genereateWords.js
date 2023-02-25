import faker from 'faker'

const generateWords = (count = 13) => {
  return new Array(count)
    .fill()
    .map((_) => faker.random.word())
    .join(' ')
}

export default generateWords
