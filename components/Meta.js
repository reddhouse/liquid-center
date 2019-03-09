import React from 'react'
import Head from 'next/head'

export default (props) => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="description" content={props.description} />
      <title>{props.title}</title>
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    </Head>
    <style jsx global>
      {`
        body, #__next {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Verdana', 'Geneva', sans-serif;
          font-size: 16px;
        }
      `}
    </style>
  </React.Fragment>
)

// Note, border-box forces the width and height properties to include the content,
// padding, and border, but per usual, margin is not included.
