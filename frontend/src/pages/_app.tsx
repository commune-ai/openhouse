import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<RecoilRoot>
				<SessionProvider session={pageProps.session}>
					<QueryClientProvider client={queryClient}>
						<Component {...pageProps} />
					</QueryClientProvider>
				</SessionProvider>
			</RecoilRoot>
		</ThemeProvider>
	)
}