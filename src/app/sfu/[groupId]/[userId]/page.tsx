import GoBackButton from '@/components/GoBackButton'
import CardScript from '@/components/cards/CardScript'
import { ClientHydration } from '@/components/providers/ClientHydration'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { dummyDataSFU } from '@/utils/data'
import getRandomInt from '@/utils/getRandomInt'
import React from 'react'

export default function UserPage({ params }: { params: { groupId: string, userId: string } }) {

    const group = dummyDataSFU.groups[Number(params.groupId)]

    if (!group.users) return null

    const user = group.users[Number(params.userId)]

    return (
        <div className='w-full relative mt-6'>
          <div className="absolute md:-left-12 md:top-0 left-0 -top-10">
            <GoBackButton />
          </div>

          <div className="w-full flex items-center gap-8 flex-wrap justify-between">
            <h1 className='lg:text-3xl sm:text-2xl text-xl font-bold md:text-left text-center'>
              Группы (СФУ): <span className="ml-2 font-normal">{group.displayName}</span>
            </h1>

            <div className="flex gap-3 items-center flex-wrap">
                <div className="flex gap-1 items-center text-xs">
                    <span className="flex h-3 w-3 rounded-full dark:bg-green-700/90 bg-green-500" />
                    - Выполнено
                </div>
                <div className="flex gap-1 items-center text-xs">
                    <span className="flex h-3 w-3 rounded-full dark:bg-red-700/90 bg-red-600" />
                    - Неверно
                </div>
                <div className="flex gap-1 items-center text-xs">
                    <span className="flex h-3 w-3 rounded-full bg-muted border border-foreground/30" />
                    - Не выполнено
                </div>
            </div>
          </div>

          <h2 className='mt-10 font-medium text-xl flex gap-3 items-center'>
            <Avatar className="h-10 w-10">
              <AvatarImage src={`../../images/avatars/${getRandomInt(4)}.png`} alt="@user" />
              <AvatarFallback>USR</AvatarFallback>
            </Avatar>
            {user.displayName}
          </h2>

          <ClientHydration
            fallback={
              <div className="w-full mt-10">
                {[1,2,3,4,5,6,7,8].map(item => (
                  <Skeleton key={item} className="w-full h-[80px] mb-6" />
                ))}
              </div>
            }
          >
            <Accordion type="single" collapsible className="w-full mt-10">
                {user.scripts.map((script, index) => (
                    <CardScript key={index} id={index.toString()} script={script}/>
                ))}
            </Accordion>
          </ClientHydration>
        </div>
    )
}