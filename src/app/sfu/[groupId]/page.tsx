import GoBackButton from "@/components/GoBackButton";
import CardUser from "@/components/cards/CardUser";
import { ClientHydration } from "@/components/providers/ClientHydration";
import { Skeleton } from "@/components/ui/skeleton";
import { Script, dummyDataSFU } from "@/utils/data";
import getRandomInt from "@/utils/getRandomInt";
import { getScriptStatus, getTaskActions } from "@/utils/getStatus";

export default function GroupPage({ params }: { params: { groupId: string } }) {

    const group = dummyDataSFU.groups[Number(params.groupId)]

    return (
        <div className='w-full relative mt-6'>
          <div className="absolute md:-left-12 sm:top-0 left-0 -top-10">
            <GoBackButton />
          </div>
          <h1 className='lg:text-3xl sm:text-2xl text-xl font-bold md:text-left text-center'>
            Группы (СФУ): <span className="ml-2 font-normal">{group.displayName}</span>
          </h1>
          <ClientHydration
            fallback={
              <div className="grid min-[3000px]:grid-cols-6 min-[2000px]:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 w-full mt-12">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(item => (
                  <Skeleton key={item} className="w-full h-[282px]" />
                ))}
              </div>
            }
          >
            <div className="grid min-[3000px]:grid-cols-6 min-[2000px]:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 w-full mt-12">
              {group.users?.map((user, index) => {
                const correctScriptCount = user.scripts.map((script) => {
                  const { correctTasks } = getScriptStatus(script)
                  if (correctTasks.length === script.tasks.length) return script
                }).filter((item): item is Script => !!item).length

                const errorsCount = user.scripts.map((script) => {
                  const uncorrectActionsCount = script.tasks.map((task) => {
                    const { uncorrectActions } = getTaskActions(task)
                    return uncorrectActions.length
                  }).reduce((acc, number) => acc + number);

                  return uncorrectActionsCount
                }).reduce((acc, number) => acc + number);
                return (
                  <CardUser 
                    key={index}
                    title={user.displayName} 
                    correctScriptCount={correctScriptCount}
                    errorsCount={errorsCount}
                    href={`/sfu/${params.groupId}/${index}`}
                    imageSrc={`../images/avatars/${getRandomInt(4)}.png`}
                  />
                )
              })}
            </div>
          </ClientHydration>
        </div>
    )
}