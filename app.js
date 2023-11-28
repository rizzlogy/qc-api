const logger = require('koa-logger')
const responseTime = require('koa-response-time')
const bodyParser = require('koa-bodyparser')
const ratelimit = require('koa-ratelimit')
const port = process.env.PORT || 3000
const Router = require('koa-router')
const fetch = require('node-fetch')
const ratelimitВb = new Map()
const Koa = require('koa')
const app = new Koa()

app.use(logger())
app.use(responseTime())
app.use(bodyParser())

app.use(ratelimit({
  driver: 'memory',
  db: ratelimitВb,
  duration: 1000 * 55,
  errorMessage: {
    ok: false,
    error: {
      code: 429,
      message: 'Rate limit exceeded. See "Retry-After"'
    }
  },
  id: (ctx) => ctx.ip,
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total'
  },
  max: 20,
  disableHeader: false,
  whitelist: (ctx) => {
    return ctx.query.botToken === global.botToken
  },
  blacklist: (ctx) => {
  }
}))

app.use(require('./helpers').helpersApi)

const route = new Router()
const routes = require('./routes')

route.get('/', (ctx, next) => {
     ctx.body = "Server Quoted Chat Online, Please Read Docs Here https://github.com/rizzlogy/qc-api";
})

route.use('/*', routes.routeApi.routes())
app.use(route.routes())

app.listen(port, () => {
  console.log('Listening on localhost, port', port)
  keepAlive()
})

function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
  if (/(\/\/|\.)undefined\./.test(url)) return
  setInterval(()=> {
    fetch(url).catch(console.error)
  }, 5 * 1000 * 60)

  }
