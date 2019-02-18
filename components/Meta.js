import React from 'react'
import Head from 'next/head'

export default (props) => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>{props.title}</title>
    </Head>
    <style jsx global>
      {`
        body, #__next {
          position: fixed;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </React.Fragment>  
)
