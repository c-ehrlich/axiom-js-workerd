import { AxiomWithoutBatching } from "@axiomhq/js";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const axiom = new AxiomWithoutBatching({
    orgId: process.env.AXIOM_ORG_ID,
    token: process.env.AXIOM_TOKEN,
  });

  await axiom.ingest(process.env.AXIOM_DATASET!, {
    message: "Hello from CF workers!",
  });

  return NextResponse.json("hopefully logged to axiom...");
}
