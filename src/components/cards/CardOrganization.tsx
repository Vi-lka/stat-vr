import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Component, User2 } from 'lucide-react';
import Image from "next/image";

type Props = {
    title: string,
    groupCount: number,
    usersCount: number,
    href: string,
    description?: string,
    imageSrc?: string,
}

export default function CardOrganization(props: Props) {

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
                    <CardTitle className='text-xl w-full flex gap-3 items-center justify-between'>
                        {props.title}
                        {props.imageSrc 
                            ? (
                                <figure>
                                    <Image
                                        src={props.imageSrc}
                                        width={90}
                                        height={35}
                                        alt={props.imageSrc}
                                        className="mx-auto object-cover rounded-sm"
                                    />
                                </figure>
                            ) 
                            : null
                        }
                    </CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-3 justify-between mb-6">
                        <Component /> 
                        <ContentElement title={"Групп:"} count={props.groupCount}/>
                    </div>
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

