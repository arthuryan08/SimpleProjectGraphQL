import '../app/globals.css'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      {/* Adicione qualquer conteúdo global aqui */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
