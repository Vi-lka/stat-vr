import CardOrganization from '@/components/cards/CardOrganization';
import { ClientHydration } from '@/components/providers/ClientHydration';
import { Skeleton } from '@/components/ui/skeleton';
import { dummyDataSFU } from '@/utils/data'

export default function Home() {

  const usersCount = dummyDataSFU.groups.map(group => group.users?.length).filter((item): item is number => !!item).reduce((acc, number) => acc + number);

  return (
    <div className='w-full'>
      <h1 className='lg:text-3xl text-2xl font-bold md:text-left text-center mt-6'>Организации</h1>
      <ClientHydration
        fallback={
          <div className="grid min-[3000px]:grid-cols-4 min-[2000px]:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 w-full mt-12">
            {[1,2,3,4,5,6].map(item => (
              <Skeleton key={item} className="w-full h-[268px]" />
            )) }
          </div>
        }
      >
        <div className="grid min-[3000px]:grid-cols-4 min-[2000px]:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 w-full mt-12">
          {[1,2,3].map(item => (
            <CardOrganization 
              key={item}
              title={dummyDataSFU.displayName} 
              description={"Сибирский федеральный университет"} 
              groupCount={dummyDataSFU.groups.length}
              usersCount={usersCount}
              href='/sfu'
              imageSrc='/images/sfu-logo.svg'
            />
          ))}
        </div>
      </ClientHydration>
    </div>
  )
}
