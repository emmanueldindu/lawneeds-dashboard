import { Button } from "@/components/ui/button";

export default function ScrapperPage() {
  return (
    <div className="justify-center items-center grid h-[90vh] w-full">
     <div className="">
     <p className="text-lg font-medium mb-2">Enter the link to the knowledge base</p>
      <div className="flex items-end gap-x-3">
        <input 
          className="w-full pb-2 border-b border-gray-800 focus:outline-none w-[300px] focus:border-gray-600 transition-colors bg-transparent" 
          type="text" 
          placeholder="https://example.com/knowledge-base"
        />
        <Button className="bg-gray-800 hover:bg-gray-700 text-white">
          Send
        </Button>
      </div>
      
      </div>
    </div>
  );
}
