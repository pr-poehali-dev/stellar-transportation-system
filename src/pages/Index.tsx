export default function Index() {
  return (
    <main className="min-h-screen" style={{ background: "#1a1a1a", color: "#e8e0d4" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b" style={{ background: "#1a1a1a", borderColor: "#3a3a3a" }}>
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter" style={{ color: "#e8e0d4" }}>
            СССР·ИГРУШКА
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest transition-colors" style={{ color: "#9a8a7a" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a8a7a")}>
              Коллекция
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest transition-colors" style={{ color: "#9a8a7a" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a8a7a")}>
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest transition-colors" style={{ color: "#9a8a7a" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a8a7a")}>
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>Ручная работа · С 1957 года</p>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6" style={{ color: "#e8e0d4" }}>
              СССР
              <br />
              <span style={{ color: "#c9a84c" }}>ИГРУШ</span>
              <br />
              КА
            </h1>
            <p className="text-xl max-w-xl" style={{ color: "#9a8a7a" }}>
              Возрождаем традиции советского игрушечного мастерства. Каждое изделие создаётся вручную по аутентичным технологиям эпохи.
            </p>
            <div className="mt-10">
              <a href="#work" className="inline-block px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all"
                style={{ background: "#c9a84c", color: "#1a1a1a" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#b8963e")}
                onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
                Смотреть коллекцию
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/c757ffbe-adb9-49bc-90be-e68d593cb79c/files/d0e20c8e-2613-4a95-9cfd-44d88b484f24.jpg"
                alt="Советский плюшевый мишка"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "#c9a84c" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-t border-b py-6 px-4 md:px-8" style={{ borderColor: "#2e2e2e", background: "#141414" }}>
        <div className="container mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-4xl font-bold" style={{ color: "#c9a84c" }}>65+</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "#9a8a7a" }}>лет традиций</div>
          </div>
          <div>
            <div className="text-4xl font-bold" style={{ color: "#c9a84c" }}>300+</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "#9a8a7a" }}>видов игрушек</div>
          </div>
          <div>
            <div className="text-4xl font-bold" style={{ color: "#c9a84c" }}>100%</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "#9a8a7a" }}>ручная работа</div>
          </div>
        </div>
      </div>

      {/* Collection Section */}
      <section id="work" className="py-20 px-4 md:px-8" style={{ background: "#141414" }}>
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-6xl font-bold tracking-tighter" style={{ color: "#e8e0d4" }}>КОЛЛЕКЦИЯ</h2>
            <p className="text-sm uppercase tracking-widest" style={{ color: "#9a8a7a" }}>Избранные работы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden relative" style={{ background: "#2a2a2a" }}>
                <img
                  src="https://cdn.poehali.dev/projects/c757ffbe-adb9-49bc-90be-e68d593cb79c/files/d0e20c8e-2613-4a95-9cfd-44d88b484f24.jpg"
                  alt="Мишка Топтыжка"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(201, 168, 76, 0.15)" }}>
                  <span className="text-sm uppercase tracking-widest px-4 py-2" style={{ background: "#c9a84c", color: "#1a1a1a" }}>Подробнее</span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#c9a84c" }}>Мягкие игрушки</p>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#e8e0d4" }}>Мишка Топтыжка</h3>
              <p style={{ color: "#6a5f55" }}>Плюшевый медведь по образцу 1960-х. Опилочный наполнитель, стеклянные глаза</p>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden relative" style={{ background: "#2a2a2a" }}>
                <img
                  src="https://cdn.poehali.dev/projects/c757ffbe-adb9-49bc-90be-e68d593cb79c/files/ba899c9d-5ae2-4c6a-87a7-4e7e714c255c.jpg"
                  alt="Деревянные игрушки"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(201, 168, 76, 0.15)" }}>
                  <span className="text-sm uppercase tracking-widest px-4 py-2" style={{ background: "#c9a84c", color: "#1a1a1a" }}>Подробнее</span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#c9a84c" }}>Деревянные игрушки</p>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#e8e0d4" }}>Матрёшечный набор</h3>
              <p style={{ color: "#6a5f55" }}>Точёные деревянные фигуры из липы с росписью по советским мотивам</p>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden relative" style={{ background: "#2a2a2a" }}>
                <img
                  src="https://cdn.poehali.dev/projects/c757ffbe-adb9-49bc-90be-e68d593cb79c/files/3089fc55-e2ca-4ea7-9511-e9f19c129f83.jpg"
                  alt="Мастерская"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(201, 168, 76, 0.15)" }}>
                  <span className="text-sm uppercase tracking-widest px-4 py-2" style={{ background: "#c9a84c", color: "#1a1a1a" }}>Подробнее</span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#c9a84c" }}>Оловянные солдатики</p>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#e8e0d4" }}>Гвардейский полк</h3>
              <p style={{ color: "#6a5f55" }}>Литые оловянные фигурки, раскрашенные вручную по историческим образцам</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8" style={{ background: "#1a1a1a" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{ color: "#e8e0d4" }}>О НАС</h2>
              <div className="aspect-[4/5] relative mb-8 md:mb-0 overflow-hidden" style={{ background: "#2a2a2a" }}>
                <img
                  src="https://cdn.poehali.dev/projects/c757ffbe-adb9-49bc-90be-e68d593cb79c/files/3089fc55-e2ca-4ea7-9511-e9f19c129f83.jpg"
                  alt="Мастерская"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-xs uppercase tracking-widest px-3 py-1" style={{ background: "#c9a84c", color: "#1a1a1a" }}>
                  Мастерская · Москва
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6" style={{ color: "#e8e0d4" }}>
                Мы возрождаем утраченное искусство советского игрушечного производства. Каждая игрушка — это история, воплощённая в материале.
              </p>
              <p className="mb-6" style={{ color: "#9a8a7a" }}>
                С 1957 года наша мастерская хранит технологии, которые были разработаны на легендарных советских фабриках. Мы используем только натуральные материалы: липовое дерево, лён, натуральный плюш, безопасные краски.
              </p>
              <p className="mb-6" style={{ color: "#9a8a7a" }}>
                Наши игрушки — не просто предметы для игры. Это коллекционные изделия, которые передаются из поколения в поколение, сохраняя связь времён.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Материалы</h3>
                  <ul className="space-y-2" style={{ color: "#9a8a7a" }}>
                    <li>Липовое дерево</li>
                    <li>Натуральный плюш</li>
                    <li>Льняная ткань</li>
                    <li>Безопасные краски</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Каталог</h3>
                  <ul className="space-y-2" style={{ color: "#9a8a7a" }}>
                    <li>Мягкие игрушки</li>
                    <li>Деревянные наборы</li>
                    <li>Оловянные солдатики</li>
                    <li>Настольные игры</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="py-16 px-4 md:px-8 border-t border-b" style={{ background: "#141414", borderColor: "#2e2e2e" }}>
        <div className="container mx-auto text-center">
          <p className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto" style={{ color: "#e8e0d4" }}>
            «Игрушка — это первый учитель. Мы делаем учителей, которые служат десятилетиями»
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest" style={{ color: "#c9a84c" }}>— Основатель мастерской</p>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8" style={{ background: "#1a1a1a" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{ color: "#e8e0d4" }}>КОНТАКТЫ</h2>
              <p className="text-xl mb-8" style={{ color: "#9a8a7a" }}>
                Хотите заказать игрушку или узнать о коллекции? Напишите нам — ответим в течение дня.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest" style={{ color: "#c9a84c" }}>Почта</span>
                  <a href="mailto:hello@ussr-toy.ru" className="hover:underline" style={{ color: "#e8e0d4" }}>
                    hello@ussr-toy.ru
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest" style={{ color: "#c9a84c" }}>Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline" style={{ color: "#e8e0d4" }}>
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest" style={{ color: "#c9a84c" }}>Мастерская</span>
                  <span style={{ color: "#e8e0d4" }}>Москва, Россия</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 py-2 px-0 focus:outline-none placeholder-opacity-50"
                    style={{ borderColor: "#3a3a3a", color: "#e8e0d4" }}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 py-2 px-0 focus:outline-none"
                    style={{ borderColor: "#3a3a3a", color: "#e8e0d4" }}
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 py-2 px-0 focus:outline-none resize-none"
                    style={{ borderColor: "#3a3a3a", color: "#e8e0d4" }}
                    placeholder="Расскажите, что вас интересует"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm uppercase tracking-widest font-bold transition-all"
                  style={{ background: "#c9a84c", color: "#1a1a1a" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#b8963e")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
                  Отправить запрос
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t" style={{ borderColor: "#2e2e2e", background: "#141414" }}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold tracking-tighter" style={{ color: "#e8e0d4" }}>СССР·ИГРУШКА</p>
          <p className="text-sm" style={{ color: "#6a5f55" }}>© 2024 Мастерская советской игрушки. Все права защищены.</p>
          <p className="text-sm uppercase tracking-widest" style={{ color: "#9a8a7a" }}>Ручная работа с 1957 года</p>
        </div>
      </footer>
    </main>
  );
}
