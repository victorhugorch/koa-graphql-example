// Domains
import { schema } from '../../../domains/reality'

import { generateExecutableSchema } from '.'

describe('Executable schema generation', () => {
  it('should generate an executable schema with the configured domains', () => {
    const result = generateExecutableSchema([schema])
    expect(result).toMatchSnapshot()
  })
})
