"use client"
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import Plus from "../public/assets/Plus.svg"
const contentitems=[{
    question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
},{
    question:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
},{
    question:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
}]
export default function Faq()
{
    return <div className="flex flex-col w-full py-[48px] lg:flex-row lg:py-[60px] lg:gap-x-6">
     <div className='lg:w-1/3 lg:py-8 lg:pr-14'>
       <h3 className="text-[#EB2891] font-medium text-[14px] lg:text-base">Frequently Asked Questions</h3>
        <h1 className="font-medium text-[#172026] text-[24px] py-4 lg:leading-[58px] lg:text-[42px]">Let's clarify some of your questions</h1>
        <p className="text-[#36485C] text-[16px] pb-6 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
     </div>
    <div className='lg:w-2/3'>
        <Accordion.Root type='single' defaultValue='item-1' collapsible className='flex flex-col gap-y-4'>
          {
            contentitems.map((item,index)=>(
                <div key={index}>
                  <Accordion.Item value={`item-${index+1}`} className='bg-[#E3F1FF] p-4 rounded-r-lg'>
                  <Accordion.Header>
                    <Accordion.Trigger className='w-full flex items-center justify-between'>
                        <p className='text-[#172026]  text-left font-medium lg:text-[18px]'>{item.question} </p>
                        <span><Image src={Plus} alt='' className='h-10 w-10 lg:w-6 lg:h-6'/> </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className='text-[#36485C] pt-2'>{item.answer} </p>
                  </Accordion.Content>
                  </Accordion.Item>
                </div>
            ))
          }
        </Accordion.Root>
    </div>
    </div>
}
