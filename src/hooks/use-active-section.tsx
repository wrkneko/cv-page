"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Какой раздел читают прямо сейчас.
 *
 * Это единственное состояние, которое считает клиентский код, и показано оно
 * в двух местах: квадратный маркер на полях и подчёркнутый пункт меню. Раньше
 * оба места правил один императивный скрипт, который сам искал DOM-узлы и
 * переключал классы. Теперь состояние живёт в контексте, а разметку рисует
 * React — компоненты подписываются на него и больше ничего друг о друге не
 * знают.
 *
 * Считаем от линии чуть ниже шапки: раздел активен с того момента, как его
 * начало пересекло эту линию.
 */

const ActiveSectionContext = createContext<string | null>(null);

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

const OFFSET = 160;

export function ActiveSectionProvider({
  ids,
  children,
}: {
  ids: readonly string[];
  children: ReactNode;
}) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const line = window.scrollY + OFFSET;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= line) current = id;
      }

      // у самого низа страницы последний раздел может не дотянуться до линии
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
