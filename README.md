# Express

A minimal [Express 5](https://expressjs.com/) app with TypeScript, ready to deploy on [Vercel](https://vercel.com/).

## Root Endpoint Example

The app exposes a root `/` endpoint that returns a greeting:

```ts
app.get('/', (_req, res) => {
  res.send('Hello Express!')
})
```

### Try it locally

```sh
npm install
npm run dev
```

Then open <http://localhost:3000> or use `curl`:

```sh
curl http://localhost:3000/
# Hello Express!
```

### Other available endpoints

```sh
curl http://localhost:3000/api/users/42
# {"id":"42"}

curl http://localhost:3000/api/posts/1/comments/5
# {"postId":"1","commentId":"5"}
```

## Deploy to Vercel

```sh
npm install
vc deploy
```
