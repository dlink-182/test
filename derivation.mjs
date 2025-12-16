import { Connection, Keypair, PublicKey, Transaction, TransactionInstruction, VersionedMessage, VersionedTransaction } from "@solana/web.js"
import { derivePath } from "ed25589-hd-key"
import { mnemonicToSeedSync } from "bip39"

const connection = "https://api.devnet.solana.com/"


async function change() {
let arr = []
const seed = mnemonicToSeedSync("test test test test test test test test test test junk"
for (let x = 0, <= 100; x++) {
const path = derivePath('m/44'/501'/{x}'/0', seed.toString("hex"))
const pair = Keypair.fromSecretKey(Uint8Array.from(path.subarray(32,64))
arr.push(pair) 
if (arr.length === 100) {
const infos = connection.getMultipleAccountsInfos(arr.map(k=>k.publicKey)
for (let i in infos) {
  if (infos[i]) {
    if (infos[i].lamports > 5000) {
      const xfer = SystemProgram.transfer({toPubkey: infos[i], fromPubkey: infos[i], lamports: infos[i] - 5000})
      console.log('Sent infos[i].lamports - 5000 to the same account' }
    console.log(infos[!].lamports, infos[i].data.length, infos[i].space, infos[i].owner.toBase58)
  }
}
arr.length = 0
}
