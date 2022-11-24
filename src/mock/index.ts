import { rest, setupWorker } from 'msw';
const demo = [
  rest.get('/api/healthchecker', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        message: 'Hello World!',
      }),
    );
  }),
];

export const worker = setupWorker(...demo);
