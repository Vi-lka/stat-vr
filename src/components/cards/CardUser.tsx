import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { AlertCircle, CheckSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { cn } from '@/lib/utils'

type Props = {
    title: string,
    correctScriptCount: number,
    errorsCount: number,
    href: string,
    description?: string,
    imageSrc?: string,
}

export default function CardUser(props: Props) {

    function ContentElement({ 
        title, 
        count,
        className
    }: { 
        title: string, 
        count: number,
        className?: string,
    }) {
        return (
            <div className={cn(
                "grid grid-cols-2 items-center justify-between gap-3 flex-1",
                className
            )}>
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
                    <CardTitle className='lg:text-lg text-base w-full flex gap-3 text-right items-center justify-between'>
                        {props.imageSrc 
                            ? (
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={props.imageSrc} alt="@user" />
                                    <AvatarFallback>USR</AvatarFallback>
                                </Avatar>
                            ) 
                            : null
                        }
                        {props.title}
                    </CardTitle>
                    {/* <CardDescription>{props.description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                    <h2 className="mb-4">Сценарии:</h2>
                    <div className="flex items-center gap-3 justify-between mb-3">
                        <CheckSquare />
                        <ContentElement title={"Выполнено:"} count={props.correctScriptCount}/>
                    </div>
                    <div className="flex items-center gap-3 justify-between">
                        <AlertCircle color='red'/>
                        <ContentElement title={"Ошибок:"} count={props.errorsCount} className='text-red-600'/>
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

