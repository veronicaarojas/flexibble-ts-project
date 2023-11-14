import { g, config, connector } from '@grafbase/sdk'

const neon = connector.Postgres('Neon', {
  url: g.env('NEON_URL')
})

g.datasource(neon)



const User = g.model('User', {
  name: g.string().length({min: 2, max: 35}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({min: 3}),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

export default config({
  schema: g
})

