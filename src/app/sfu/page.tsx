import GoBackButton from "@/components/GoBackButton";
import CardGroup from "@/components/cards/CardGroup";
import { ClientHydration } from "@/components/providers/ClientHydration";
import { Skeleton } from "@/components/ui/skeleton";
import { dummyDataSFU } from "@/utils/data";

export default function OrganizationPage() {
  
    return (
      <div className='w-full relative mt-6'>
        <div className="absolute -top-10 left-0 sm:-left-8 sm:top-0 lg:-left-12">
          <GoBackButton />
        </div>
        <h1 className='lg:text-3xl text-2xl font-bold md:text-left text-center'>Группы (СФУ)</h1>
        <ClientHydration
          fallback={
            <div className="grid min-[3000px]:grid-cols-6 min-[2000px]:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 w-full mt-12">
              {[1,2,3,4,5,6].map(item => (
                <Skeleton key={item} className="w-full h-[196px]" />
              ))}
            </div>
          }
        >
          <div className="grid min-[3000px]:grid-cols-6 min-[2000px]:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 w-full mt-12">
            {dummyDataSFU.groups.map((item, index) => (
              <CardGroup 
                key={index}
                title={item.displayName} 
                usersCount={item.users ? item.users.length : 0}
                href={`/sfu/${index}`}
              />
            ))}
          </div>
        </ClientHydration>
      </div>
    )
  }