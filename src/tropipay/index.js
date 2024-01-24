import { Tropipay } from "@yosle/tropipayjs";

const config = {
  clientId: process.env.NEXT_PUBLIC_TROPIPAY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_TROPIPAY_CLIENT_SECRET,
  serverMode: "Development", // it will be used as default if omited
};
export const tpp = new Tropipay(config);
