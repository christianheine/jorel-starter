#!./node_modules/.bin/ts-node

import { JorEl } from "jorel";
import { config } from "dotenv";

config(); // Load environment variables

const main = async () => {
  const jorEl = new JorEl({
    openAI: true,
    logger: "console",
    logLevel: "warn",
  });

  const response = await jorEl.text("What is an LLM? In two sentences only.");

  console.log(response);
};

void main();
