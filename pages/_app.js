import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from '@thirdweb-dev/react';
import { ArbitrumSepolia } from '@thirdweb-dev/chains';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={ArbitrumSepolia}
			clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
			supportedWallets={[
				metamaskWallet({ recommended: true }),
				coinbaseWallet(),
				walletConnect(),
			]}
		>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;
