import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Typewriter from 'typewriter-effect'
import 'react-accessible-accordion/dist/fancy-example.css'

const Faq = () => {
  return (
    <div id="faq">
      <div className="w-10/12 mx-auto max-w-[1000px] mb-36 relative top-[200px] md:top-[400px] lg:top-[800px]">
        <Accordion
          allowMultipleExpanded="true"
          allowZeroExpanded="true"
          className="text-[#006b8b] text-center leading-8"
        >
          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                What is an NFT ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                NFT stands for &apos;non-fungible token&apos;. A NFT is
                basically data that is accounted for in a digital ledger, and
                that data represents something specific and unique. A NFT can,
                for example, represent a unique piece of art or a game token.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                How Can I Get a Mana-Maniac?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              It will be available for purchase on our website through an initial sale. 
              At the time of purchase, a randomly selected NFT will be minted on the blockchain 
              and delivered to your wallet and OpenSea account. Once the public sale is closed, 
              you can get a Mana-Maniac on the secondary market like OpenSea or LooksRare.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                How to purchase an NFT?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The easiest way is to install a MetaMask extension in your
                Chrome browser and link your Ethereum wallet to it. Ensure you
                have enough ETH in your wallet to cover the cost of a NFT plus
                the associated transaction (gas) fees. Approve the transaction
                on MetaMask and you are all set. The Mana-Maniacs will be
                available to mint on our official website.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                What is the total supply ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>10000 Unique Mana-Maniacs will be created.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                How much does it cost to mint an NFT...wen mint?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Mint price will be 0.05 ETH + Gas. 0.025 ETH will go to the Doge Pound Shelter charity
                ....Mint date has not been decided as of yet
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                Where can i view my NFT ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Once minted, you&apos;ll just need to login into your OpenSea
                account to view your NFTs.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="mb-5 bg-[#b7ebf1] rounded-lg">
            <AccordionItemHeading>
              <AccordionItemButton className="bg-[#006b8b] rounded-lg text-white text-left p-4">
                What do I get when I purchase a Mana-Maniac?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Immediately - a wizard PFP & charitable donation to the Doge Pound Shelter /// 
                Near Future Progression Perks - raffle ticket (up to 20 1ETH winners by the end of the mint) 
                & 2 free companion NFTs (Archer & Warrior)
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
