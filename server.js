// ...
// import some new stuff
import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

// ...

// send all requests to index.html so browserHistory works

app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    const appHtml = renderToString(<RouterContext {...props}/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml))
  })
})

function renderPage(appHtml) {
  return '<!DOCTYPE html><html><head lang="en"><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Epicify</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id="application-container" class="application-container">${appHtml}</div><script src="vendors.js"></script><script src="bundle.js"></script></body></html>'
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
