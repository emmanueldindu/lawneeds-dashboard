import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="justify-center items-center grid h-[90vh] w-full">
      <Button  className="w-[200px] bg-gray-800 h-[56px]">
        Refresh Database
      </Button>
    </div>
  );
}
