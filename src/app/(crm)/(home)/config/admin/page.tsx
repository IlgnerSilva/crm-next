import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form } from '@/components/ui/form';

export default function ConfigAdmin() {
  return (
    <div className="w-full grid grid-cols-12 gap-4 auto-rows-max rounded-t-lg">
      <Tabs defaultValue="account" className="col-span-12 mx-auto">
        <TabsList>
          <TabsTrigger value="conta">Minha Conta</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="email">Calendário</TabsTrigger>
          <TabsTrigger value="Colaboradores">Colaboradores</TabsTrigger>
        </TabsList>
        <TabsContent value="conta"></TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
