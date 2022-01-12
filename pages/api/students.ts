// #region Global Imports
import type { NextApiRequest, NextApiResponse } from 'next'
import faker from '@faker-js/faker'
// #endregion Global Imports

// #region Local Imports
import { Data } from '../../src/Interface'
// #endregion Local Imports

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data: Data[] = []

  for (let i = 1; i <= 10; i++) {
    data.push({
      id: i,
      name: faker.name.findName(),
      sex: faker.name.gender(),
      birthPlace: faker.address.city(),
      dob: faker.date.past(),
      email: faker.internet.email(),
      groups: {
        name: faker.commerce.department(),
        leaderName: faker.name.findName(),
        subject: faker.name.jobTitle(),
        datetime: faker.date.recent(),
        enrolled: [faker.datatype.number(99), faker.datatype.number(99)],
      },
    })
  }

  res.status(200).json(data)
}
