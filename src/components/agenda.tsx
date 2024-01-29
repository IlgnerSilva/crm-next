'use client';

// Components
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Libs
import { ptBR } from 'date-fns/locale';
import moment from 'moment';
import { DayClickEventHandler } from 'react-day-picker';
import axios from 'axios';
import { motion } from 'framer-motion';

// Hooks
import { useEffect, useState } from 'react';

// Interfaces
import { IFeriados } from '@/interface/feriados';

export function Agenda() {
  const [feriados, setFeriados] = useState<IFeriados[]>([]);
  const [bloaquado, setBloqueado] = useState(false);
  const dataFeriado: Date[] = [];
  const [atividade, setAtividade] = useState<IFeriados | undefined>();

  useEffect(() => {
    axios.get('/api/agenda').then((res) => setFeriados(res.data));
  }, []);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setAtividade(undefined);
    // eslint-disable-next-line array-callback-return
    feriados.filter((feriado) => {
      if (
        feriado.data === moment(day).format('DD/MM/YYYY') &&
        modifiers.bloaquado
      ) {
        return setAtividade(feriado);
      }
    });
  };

  if (!feriados) {
    return <div>Carregando...</div>;
  }

  // eslint-disable-next-line array-callback-return
  feriados.map((feriado) => {
    dataFeriado.push(moment(feriado.data, 'DD/MM/YYYY').toDate());
  });

  return (
    <div className="col-span-4 row-span-2">
      <Card className="w-full">
        <Calendar
          className="flex justify-center w-full"
          locale={ptBR}
          onDayClick={handleDayClick}
          modifiers={{ bloaquado: dataFeriado }}
          modifiersStyles={{
            bloaquado: {
              border: '1px solid black',
              color: 'green',
              opacity: 1,
            },
          }}
        />
      </Card>

      {DescricaoAgenda(atividade)}
    </div>
  );
}

function DescricaoAgenda(dados: IFeriados | undefined) {
  if (dados) {
    const { data, nome, uf, municipio, tipo, descricao } = dados;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
      >
        <Card className="w-full mt-2 transition-all">
          <CardHeader>
            <CardTitle>{nome}</CardTitle>
            <CardDescription className="flex flex-col gap-2">
              <span className="font-bold uppercase">
                Feriado {tipo === 'MUNICIPAL' ? 'Ribeirão Preto' : tipo}
              </span>
              <span>{data}</span>
              <span>{descricao}</span>
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    );
  }
  return (
    <Card className="w-full bg-transparent border-0 flex justify-center mt-2">
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full">Adicionar na Agenda</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
