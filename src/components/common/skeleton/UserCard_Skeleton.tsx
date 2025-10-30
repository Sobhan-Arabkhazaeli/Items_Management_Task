import { Card, Skeleton } from "@heroui/react";

const UserCard_Skeleton = () => {
  return (
       <Card className="w-96 space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-20 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-8 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-8 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-8 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  );
};

export default UserCard_Skeleton;
