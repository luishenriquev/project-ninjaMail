import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
// ReactDOM.render(
//   <React.StrictMode>
//     <MyApp pageProps={undefined} Component={undefined} router={new default}  />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
export default MyApp
