import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Progress } from "@radix-ui/react-progress";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="p-4">
        <Button variant="elevated">
          I am a button 
        </Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50}/>
      </div>
      <div>
        <Textarea placeholder="This is a textarea" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  )
}
