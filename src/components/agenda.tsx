'use client';

import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { IFeriados } from '@/interface/feriados';
import moment from 'moment';
import { DayClickEventHandler } from 'react-day-picker';

export function Agenda() {
  const [feriados, setFeriados] = useState<IFeriados[]>([]);
  const dataFeriado: Date[] = [];
  useEffect(() => {
    fetch('/api/agenda').then((res) =>
      res.json().then((res: IFeriados[]) => {
        setFeriados(res);
      }),
    );
  }, []);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    console.log(day);
  };

  if (!feriados) {
    return <div>Carregando...</div>;
  }

  feriados.map((feriado) => {
    dataFeriado.push(moment(feriado.data, 'DD/MM/YYYY').toDate());
  });

  return (
    <div>
      <Calendar
        locale={ptBR}
        onDayClick={handleDayClick}
        modifiers={{ disabled: dataFeriado }}
        modifiersStyles={{
          disabled: { border: '1px solid black', color: 'green', opacity: 1 },
        }}
      />
      {/* {feriados.map((feriado) => (
        <div>{feriado.data}</div>
      ))} */}
    </div>
  );
}
