<template>
  <div class="add-testnet">
<!--    <button @click="register" :disabled="isConnected">-->
    <button @click="register">
      Connect
<!--      <span v-if="isConnected">Connected</span>-->
<!--      <span v-else>Connect</span>-->
    </button>
  </div>
</template>

<script>
import { getClient, getKeplr } from '@stakeordie/griptape.js';
import Swal from 'sweetalert2';

export default {
  name: "AddTestnet",
  data: () => ({
    isConnected: false,
    testnetConfig: {
      chainId: 'pulsar-2',
      chainName: 'Secret :: Pulsar-2',
      rpc: 'http://52.190.249.47:26657',
      rest: 'https://api.pulsar.griptapejs.com/',
      bip44: {
        coinType: 529,
      },
      coinType: 529,
      stakeCurrency: {
        coinDenom: 'SCRT',
        coinMinimalDenom: 'uscrt',
        coinDecimals: 6,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'secret',
        bech32PrefixAccPub: 'secretpub',
        bech32PrefixValAddr: 'secretvaloper',
        bech32PrefixValPub: 'secretvaloperpub',
        bech32PrefixConsAddr: 'secretvalcons',
        bech32PrefixConsPub: 'secretvalconspub',
      },
      currencies: [
        {
          coinDenom: 'SCRT',
          coinMinimalDenom: 'uscrt',
          coinDecimals: 6,
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'SCRT',
          coinMinimalDenom: 'uscrt',
          coinDecimals: 6,
        },
      ],
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.4,
      },
      features: ['secretwasm'],
    }
  }),
  methods: {
    async register() {
      const keplr = await getKeplr()
        .catch(err => console.error(err))
      await keplr.experimentalSuggestChain(this.testnetConfig)
      await getClient().getChainId()
        .then(chainId => {
          console.log(`Connected to Chain ID: ${chainId}`)
          Swal.fire(
            'Wallet Added',
            'Secret Network Testnet (Pulsar-2) Added Successfully!',
            'success'
          )
          this.isConnected = true
        })
        .catch(err => console.error(err))
    }
  },
  mounted() {
    getClient().getChainId()
      .then(chainId => {
        console.log(`Connected to Chain ID: ${chainId}`)
        this.isConnected = true
      })
      .catch(err => console.error(err))
  }
}
</script>

<style scoped>
.add-testnet {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #F3EDD7;
  background: black;
  border: 2px solid #F3EDD7;
  box-shadow: 5px 5px 0 #F3EDD7,
  -5px -5px 0 #F3EDD7,
  -5px 5px 0 #F3EDD7,
  5px -5px 0 #F3EDD7;
  transition: 500ms ease-in-out;
}
button:hover {
  box-shadow: 20px 5px 0 #F3EDD7, -20px -5px 0 #F3EDD7;
}
button:focus {
  outline: none;
}
</style>