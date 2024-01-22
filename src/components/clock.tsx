'use client';

import moment from 'moment';
import { useState, useEffect } from 'react';
import { useMyContext } from '@/providers/context/layoutContext';

export function Clock() {
  const { fixed } = useMyContext();
  const [clock, setClock] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    setInterval(() => {
      setClock(moment().format('HH:mm:ss'));
    }, 1000);
  });
  return (
    <div>
      <h1>{clock}</h1>
      <h2>{fixed.valueOf()}</h2>
    </div>
  );
}
