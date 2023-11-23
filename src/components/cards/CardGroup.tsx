import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { User2 } from 'lucide-react';

type Props = {
    title: string,
    usersCount: number,
    href: string,
    description?: string,
}

export default function CardGroup(props: Props) {

    function ContentElement({ title, count }: { title: string, count: number }) {
        return (
            <div className="grid grid-cols-2 items-center justify-between gap-3 mb-4 pb-4 last:mb-0 last:pb-0 flex-1">
                <p className="text-base font-medium leading-none">
                    {title}
                </p>
                <p className="text-xl font-medium text-right">
                    {count}
                </p>
            </div>
        )
    }

    return (
        <Link href={props.href} passHref>
            <Card>
                <CardHeader>
                    <CardTitle className='text-xl'>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-3 justify-between">
                        <User2 />
                        <ContentElement title={"Пользователей:"} count={props.usersCount}/>
                    </div>
                </CardContent>
                <CardFooter>
                    {/* <Link href={props.href} passHref className='w-full'> */}
                        <Button className="w-full py-4 px-3 text-base">
                            Перейти <ChevronRightIcon />
                        </Button>
                    {/* </Link> */}
                </CardFooter>
            </Card>
        </Link>
    )
}

