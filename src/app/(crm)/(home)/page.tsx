import { Clock } from '@/components/clock';
import { Agenda } from '@/components/agenda';
import { Card } from '@/components/ui/card';

export default function HomeCRM() {
  return (
    <div className="w-full grid grid-cols-12 gap-4 auto-rows-max rounded-t-lg">
      <Card className="col-span-8 row-span-1 bg-zinc-50">
        <Clock />
      </Card>
      <Agenda />
    </div>
  );
}
