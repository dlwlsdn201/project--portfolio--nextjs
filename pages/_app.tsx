import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';

const cache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CacheProvider value={cashe}>
			<CssBaseline />
			<Component {...pageProps} />
		</CacheProvider>
	);
}
