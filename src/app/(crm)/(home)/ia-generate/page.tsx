import { Chat } from '@/components/ia-generate/chat';

export default function IAGenerate() {
  return (
    <div className="w-full grid grid-cols-12 gap-4 auto-rows-max rounded-t-lg">
      <div className="col-span-10">
        <Chat />
      </div>
    </div>
  );
}
