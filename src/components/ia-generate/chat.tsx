'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ErrorMessage } from '@hookform/error-message';

import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const promptSchema = z.object({
  prompt: z.string().min(4, { message: 'Por favor, insira um prompt' }),
});

type PromptSchema = z.infer<typeof promptSchema>;

export function Chat() {
  const { register, handleSubmit, formState } = useForm<PromptSchema>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(data: PromptSchema) {
    const { prompt } = data;
    const response = await axios.post('/api/ia-generate/chat', {
      prompt,
    });
    console.log(response.data);
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div className="col-span-10 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="prompt">Prompt</Label>
          <Input id="prompt" {...register('prompt')} />
          <p className="text-red-500">{}</p>
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
