import scss from "./ContactsSidebar.module.scss";

export const ContactsSidebar = () => {
  return (
    <div className={scss["contacts-sidebar"]}>
      <div className={scss["contacts-sidebar__card"]}>
        <p className="p1">Отвечаю в течение дня</p>
        
        <p className="p2">
          Обычно 1–6 часов в рабочие дни (Пн–Пт)
        </p>
      </div>

      <div className={scss["contacts-sidebar__card"]}>
        <p className="p1">Формат работы</p>

        <p className="p2">
          Фриланс / удалёнка / разовые задачи / долгосрочные проекты
        </p>
      </div>

      <div className={scss["contacts-sidebar__card"]}>
        <p className="p1">Как работаю</p>

        <p className="p2">
          Обсуждение задачи → оценка → разработка → демо → финализация
        </p>
      </div>

      <div className={scss["contacts-sidebar__card"]}>
        <p className="p1">Локация</p>
        <p className="p2">
          Удалённо, работаю в GMT+3 (Европа / СНГ)
        </p>
      </div>

      <div className={scss["contacts-sidebar__card"]}>
        <p className="p1">Готов обсудить проект</p>

        <p className="p2">
          Напишите мне — отвечу с оценкой, сроками и предложением по реализации
        </p>
      </div>
    </div>
  );
};