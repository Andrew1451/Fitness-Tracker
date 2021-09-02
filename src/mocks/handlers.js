import { rest } from 'msw'

export const handlers = [
  rest.delete(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/Arnold2/workouts/a1b2.json`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
          a1b2c3: [{date: '9/2/21'}, {situps: 100}, {pushups: 25}]
      })
    )
  }),
  rest.get(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/Arnold2/workouts.json`, (req, res, ctx) => {
      return res(
          ctx.status(200)
      )
  })
]