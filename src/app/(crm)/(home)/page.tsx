import { Clock } from '@/components/clock';
import { Agenda } from '@/components/agenda';

export default function HomeCRM() {
  return (
    <div className="w-full grid grid-cols-12 gap-4 grid-rows-10 bg-slate-300 justify-between">
      <div className="col-span-8 bg-zinc-50 ">
        <Agenda />
      </div>
      <div className="col-span-3 bg-zinc-50 row-start-auto">
        <Clock />
      </div>
    </div>
  );
}
