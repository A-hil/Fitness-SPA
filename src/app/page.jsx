"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function GymOfferPage() {
      const [time, setTime] = useState(16 * 60);
      const [isTime, setIsTime] = useState(true);

useEffect(() => {
  // Если таймер изначально на паузе или время уже вышло, ничего не создаем
  if (!isTime || time <= 0) return;

  const intervalId = setInterval(() => {
    setTime((prevTime) => {
      // Если дошли до единицы, значит на следующем шаге будет 0
      if (prevTime <= 1) {
        setIsTime(false); // Корректно останавливаем таймер
        clearInterval(intervalId); // Сразу чистим интервал
        return 0;
      }
      return prevTime - 1;
    });
  }, 1000);

  // Очистка при паузе или уходе со страницы
  return () => clearInterval(intervalId);
}, [isTime]); 

  // Форматируем секунды в привычный вид MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    // Добавляем ведущий ноль, если число меньше 10 (например, "05" вместо "5")
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="min-h-screen bg-[#141717] text-white flex flex-col items-center">
      
      {/* 1. Верхний таймер */}
      <div className="w-full bg-[#112E21] text-[#A6E22E] text-center py-2.5 text-sm font-semibold sticky top-0 z-50 border-b border-[#1b4432]">
        Успейте открыть пробную неделю <br></br>
        <span className="font-mono text-[#F59E0B] text-2xl">{formatTime(time)}</span>  
      </div>
        
      {/* Главный контейнер */}
      <main className="w-full max-w-5xl px-4 py-8 flex flex-col items-center">
        
        {/* Заголовок */}
        <h1 className="text-xl md:text-3xl font-extrabold uppercase text-center w-full mb-8 tracking-wide">
          Выбери подходящий для себя <span className="text-[#F59E0B]">тариф</span>
        </h1>

        {/* ДВЕ КОЛОНКИ: Слева тренер, Справа тарифы */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-[#1C1F1F]/60 p-4 md:p-8 rounded-3xl border border-zinc-800">
          
          {/* ЛЕВАЯ КОЛОНКА: Фото тренера (занимает 4 колонки из 12 на десктопе) */}
          <div className="md:col-span-5 flex justify-center items-center h-full min-h-[350px] md:min-h-[450px] relative">
            <div className="relative w-64 h-80 md:w-full md:h-[450px]">
              <Image 
                src="/assets/9616070afdfe75245b42f1143745c4c2e5a14d0c.png" 
                alt="Топ-тренер" 
                fill
                priority 
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Блок тарифов (занимает 7 колонок из 12) */}
          <div className="md:col-span-7 space-y-4 w-full flex flex-col justify-between h-full">
            
            {/* 1. Главная карточка "Навсегда" */}
            <div className="bg-[#313637] border-2 border-[#F59E0B] rounded-2xl p-5 relative flex justify-between items-center shadow-lg">
              <span className="absolute -top-3 left-4 bg-[#EF4444] text-[10px] font-bold uppercase px-2 py-0.5 rounded-md">
                -70%
              </span>
              <span className="absolute -top-3 right-4 bg-[#3B82F6] text-[10px] font-bold uppercase px-2 py-0.5 rounded-md tracking-wider">
                хит!
              </span>
              
              <div>
                <h3 className="text-lg font-bold text-zinc-300">Навсегда</h3>
                <p className="text-xs text-zinc-400 max-w-[200px] mt-1 leading-tight">
                  Для тех, кто хочет всегда быть в форме и поддерживать здоровье
                </p>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-[#F59E0B]">5990 ₽</div>
                <div className="text-sm text-zinc-500 line-through">19 990 ₽</div>
              </div>
            </div>

            {/* 2. Сетка из 3-х мелких карточек */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* 3 месяца */}
              <div className="bg-[#313637] border-2 border-[#484D4E] border-solid rounded-4xl p-4 text-center relative flex flex-col justify-between min-h-[140px]">
                <span className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-[#EF4444] text-[9px] font-bold px-1.5 py-0.5 rounded-md">-50%</span>
                <div className="text-sm font-medium text-zinc-400 mt-1">3 месяца</div>
                <div className="my-2">
                  <div className="text-xl font-bold text-white">1990 ₽</div>
                  <div className="text-xs text-zinc-500 line-through">3990 ₽</div>
                </div>
                <div className="text-[10px] text-zinc-400 leading-tight">Привести тело в порядок</div>
              </div>

              {/* 1 месяц */}
              <div className="bg-[#313637] border-2 border-[#484D4E] border-solid rounded-4xl p-4 text-center relative flex flex-col justify-between min-h-[140px]">
                <span className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-[#EF4444] text-[9px] font-bold px-1.5 py-0.5 rounded-md">-40%</span>
                <div className="text-sm font-medium text-zinc-400 mt-1">1 месяц</div>
                <div className="my-2">
                  <div className="text-xl font-bold text-white">990 ₽</div>
                  <div className="text-xs text-zinc-500 line-through">1690 ₽</div>
                </div>
                <div className="text-[10px] text-zinc-400 leading-tight">Чтобы получить первые результаты</div>
              </div>

              {/* 1 неделя */}
              <div className="bg-[#313637] border-2 border-[#484D4E] border-solid rounded-4xl p-4 text-center relative flex flex-col justify-between min-h-[140px]">
                <span className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-[#EF4444] text-[9px] font-bold px-1.5 py-0.5 rounded-md">-30%</span>
                <div className="text-sm font-medium text-zinc-400 mt-1">1 неделя</div>
                <div className="my-2">
                  <div className="text-xl font-bold text-white">690 ₽</div>
                  <div className="text-xs text-zinc-500 line-through">990 ₽</div>
                </div>
                <div className="text-[10px] text-zinc-400 leading-tight">Чтобы просто начать</div>
              </div>

            </div>

            {/* Текст под сеткой */}
<div className="bg-[#313637] border border-zinc-800 rounded-2xl p-4 flex flex-row items-center gap-3 w-full max-w-xs">
  {/* Иконка восклицательного знака */}
  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
    <span className="text-[#F59E0B] font-black text-sm">!</span>
  </div>

  {/* Текст подсказки */}
  <p className="text-[8px] text-zinc-300 text-left leading-snug">
    Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
  </p>
</div>
            

            {/* Чекбокс оферты */}
            <div className="flex items-start gap-2 pt-1">
              <input type="checkbox" id="oferta" defaultChecked className="mt-0.5 accent-[#F59E0B]" />
              <label htmlFor="oferta" className="text-[10px] text-zinc-400 leading-tight cursor-pointer">
                Я согласен с <span className="underline text-zinc-300">офертой рекуррентных платежей</span> и <span className="underline text-zinc-300">Политикой конфиденциальности</span>
              </label>
            </div>

            {/* Кнопка действия */}
            <button className="w-full bg-[#F59E0B] hover:bg-orange-500 text-black font-black py-3.5 rounded-xl text-base uppercase tracking-wider transition-all transform active:scale-[0.98] shadow-lg shadow-orange-500/10">
              Купить
            </button>

            {/* Дисклеймер под кнопкой */}
            <p className="text-[9px] text-zinc-500 leading-tight text-center">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств...
            </p>

          </div>
        </div>

        {/* НИЖНИЙ БЛОК: Гарантия возврата (вынесен за пределы сетки вниз) */}
        <div className="w-full max-w-5xl mt-6 bg-[#1C1F1F]/40 border border-zinc-800 rounded-2xl p-5">
          <div className="inline-block border border-[#A6E22E] text-[#A6E22E] text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">
            гарантия возврата 30 дней
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
          </p>
        </div>

      </main>
    </div>
  );
}
