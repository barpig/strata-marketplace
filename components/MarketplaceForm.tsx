import { MarketplaceProviders } from "@strata-foundation/marketplace-ui";
import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset } from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import ReactShadow from "react-shadow/emotion";

function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { setVisible } = useWalletModal();
  const id = usePublicKey(idRaw);

  // Shadow div and css reset are not required, but will make sure our styles do not conflict with yours
  return <ReactShadow.div>
    <MarketplaceProviders resetCSS onError={(err) => console.error(err)}>
      <Swap id={id} />
    </MarketplaceProviders>
  </ReactShadow.div>
}