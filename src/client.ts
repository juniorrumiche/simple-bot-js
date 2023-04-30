import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  console.log("esanee el codigo qr");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("whatsapp js is ready");
});

export { client };
