import { Heading } from "@/components/Heading";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import React from "react";

import { CustomizerControlsProvider } from "./context";
import { createClient } from "@/prismicio";
import Controls from "./Controls";
import Loading from "./Loading";

type SearchParams = {
  wheel?: string;
  deck?: string;
  truck?: string;
  bolt?: string;
};

export default async function Page(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;

  const client = createClient();
  const customizerSettings = await client.getSingle("board_customizer");
  const { wheels, decks, metals } = customizerSettings.data;


  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <CustomizerControlsProvider
      >
        <div className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow">
          <div className="absolute inset-0">

          </div>

          <Link href="/" className="absolute left-6 top-6">
            <Logo className="h-12 text-white" />
          </Link>
        </div>
        <div className="grow bg-texture bg-zinc-900 text-white ~p-4/6 lg:w-96 lg:shrink-0 lg:grow-0">
          <Heading as="h1" size="sm" className="mb-6 mt-0">
            Build your board
          </Heading>
          <Controls
       
          />
       
        </div>
      </CustomizerControlsProvider>
      <Loading />
    </div>
  );
}
