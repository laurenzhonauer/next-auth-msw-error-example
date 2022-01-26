import { rest } from "msw"

export const handlers = [
  rest.get("/sandbox", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ok: true }))
  }),
]
