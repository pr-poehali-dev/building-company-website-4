import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const IMG_1 = 'https://cdn.poehali.dev/projects/77b61f77-6f38-4474-baec-3b320275bcb3/files/e68f194d-3a2b-4789-8918-932664912259.jpg';
const IMG_2 = 'https://cdn.poehali.dev/projects/77b61f77-6f38-4474-baec-3b320275bcb3/files/58b5658b-8c74-4a9d-969b-171c97ef57d8.jpg';
const IMG_3 = 'https://cdn.poehali.dev/projects/77b61f77-6f38-4474-baec-3b320275bcb3/files/08c028de-588b-4b9d-9bc1-20e9603b9429.jpg';
const LOGO = 'https://cdn.poehali.dev/projects/77b61f77-6f38-4474-baec-3b320275bcb3/bucket/5d46f791-7408-48b0-904a-ca92ad73c006.png';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'О компании', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

const services = [
  { icon: 'Home', title: 'Строительство домов', desc: 'Загородные дома и коттеджи под ключ — от фундамента до отделки.' },
  { icon: 'Building2', title: 'Коммерческие объекты', desc: 'Офисы, склады и торговые помещения с соблюдением сроков.' },
  { icon: 'Paintbrush', title: 'Ремонт и отделка', desc: 'Капитальный и дизайнерский ремонт любой сложности.' },
  { icon: 'Ruler', title: 'Проектирование', desc: 'Архитектурные решения и инженерные расчёты под ваш бюджет.' },
];

const projects = [
  { img: IMG_1, title: 'Жилой комплекс «Линия»', tag: 'Многоэтажное строительство', year: '2024' },
  { img: IMG_2, title: 'Частный дом в Подмосковье', tag: 'Загородное строительство', year: '2023' },
  { img: IMG_3, title: 'Реконструкция апартаментов', tag: 'Отделка и интерьер', year: '2024' },
];

const reviews = [
  { name: 'Анна Соколова', role: 'Владелец дома', text: 'Построили дом мечты точно в срок. Чистая работа, внимание к деталям и честная смета.' },
  { name: 'Игорь Лебедев', role: 'Директор сети кофеен', text: 'Оборудовали три помещения под ключ. Профессионалы, с которыми спокойно.' },
  { name: 'Мария Орлова', role: 'Дизайнер интерьера', text: 'Реализовали все мои задумки до миллиметра. Рекомендую как надёжного подрядчика.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-spk-dark font-body">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img src={LOGO} alt="СПК" className="h-10 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-spk-steel hover:text-spk-dark transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <Button className="hidden lg:inline-flex rounded-none bg-spk-yellow hover:bg-yellow-400 text-spk-dark font-600 px-6">
            Обсудить проект
          </Button>
          <button className="lg:hidden text-spk-dark" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-spk-steel">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-20 min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-spk-steel mb-6 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-spk-yellow"></span>
              Строительная компания
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-600 leading-[1.05] tracking-tight text-balance text-spk-dark">
              Строим пространства, в которых хочется жить
            </h1>
            <p className="mt-8 text-lg text-spk-steel max-w-md leading-relaxed">
              Полный цикл строительства и отделки — от первого эскиза до сдачи объекта под ключ.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="rounded-none bg-spk-yellow hover:bg-yellow-400 text-spk-dark font-600 px-8 h-12">
                Смотреть проекты
              </Button>
              <Button variant="outline" className="rounded-none border-spk-steel/30 text-spk-dark hover:bg-slate-50 px-8 h-12">
                Связаться с нами
              </Button>
            </div>
            <div className="mt-16 flex gap-12">
              {[['15', 'лет на рынке'], ['250+', 'объектов'], ['98%', 'в срок']].map(([n, t]) => (
                <div key={t}>
                  <div className="font-display text-4xl font-600 text-spk-dark">{n}</div>
                  <div className="text-sm text-spk-steel mt-1">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-slow">
            <img src={IMG_1} alt="Современная архитектура" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-spk-yellow p-6 shadow-xl hidden md:block">
              <div className="font-display text-3xl font-600 text-spk-dark">2024</div>
              <div className="text-sm text-spk-dark/70">лучший проект года</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-spk-steel mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-spk-yellow"></span>
              Услуги
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight text-spk-dark">Что мы делаем</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-10 group hover:bg-spk-dark transition-colors duration-300">
                <Icon name={s.icon} size={32} className="text-spk-yellow transition-colors" />
                <h3 className="font-display text-xl font-500 mt-6 text-spk-dark group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-sm text-spk-steel mt-3 leading-relaxed group-hover:text-slate-400 transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-spk-steel mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 bg-spk-yellow"></span>
                Портфолио
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight text-spk-dark">Завершённые проекты</h2>
            </div>
            <Button variant="outline" className="rounded-none border-spk-steel/30 text-spk-dark hover:bg-slate-50 px-6">
              Все проекты
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-start justify-between mt-5">
                  <div>
                    <h3 className="font-display text-xl font-500 text-spk-dark">{p.title}</h3>
                    <p className="text-sm text-spk-steel mt-1">{p.tag}</p>
                  </div>
                  <span className="text-sm text-spk-yellow font-600">{p.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-spk-dark text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={IMG_2} alt="О компании" className="w-full aspect-[4/3] object-cover" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-spk-yellow mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-spk-yellow"></span>
              О компании
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight leading-tight">
              Команда, которая доводит до результата
            </h2>
            <p className="mt-8 text-slate-400 leading-relaxed">
              С 2009 года мы строим жилые и коммерческие объекты по всей стране. Наш принцип — честность, прозрачные сметы и неизменное качество на каждом этапе.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[['Собственная техника', 'Wrench'], ['Гарантия 5 лет', 'ShieldCheck'], ['Фиксированная цена', 'BadgeRussianRuble'], ['Сдача в срок', 'CalendarCheck']].map(([t, ic]) => (
                <div key={t} className="flex items-center gap-3">
                  <Icon name={ic} size={20} className="text-spk-yellow" />
                  <span className="text-sm text-slate-300">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-spk-steel mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-spk-yellow"></span>
              Отзывы
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight text-spk-dark">Нам доверяют</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white p-10 border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-spk-yellow fill-spk-yellow" />
                  ))}
                </div>
                <p className="text-spk-steel leading-relaxed">«{r.text}»</p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="font-display text-lg font-500 text-spk-dark">{r.name}</div>
                  <div className="text-sm text-spk-steel">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-28 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-spk-steel mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-spk-yellow"></span>
              Контакты
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight text-spk-dark">Обсудим ваш проект</h2>
            <p className="mt-6 text-spk-steel max-w-md leading-relaxed">
              Оставьте заявку — рассчитаем стоимость и сроки в течение одного рабочего дня.
            </p>
            <div className="mt-10 space-y-5">
              {[['Phone', '+7 (495) 000-00-00'], ['Mail', 'hello@spk.ru'], ['MapPin', 'Москва, ул. Строителей, 12']].map(([ic, t]) => (
                <div key={t} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-spk-yellow flex items-center justify-center flex-shrink-0">
                    <Icon name={ic} size={18} className="text-spk-dark" />
                  </div>
                  <span className="text-spk-steel">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full border border-slate-200 px-5 h-12 outline-none focus:border-spk-yellow transition-colors text-spk-dark placeholder:text-spk-steel/60" placeholder="Ваше имя" />
            <input className="w-full border border-slate-200 px-5 h-12 outline-none focus:border-spk-yellow transition-colors text-spk-dark placeholder:text-spk-steel/60" placeholder="Телефон" />
            <textarea rows={4} className="w-full border border-slate-200 px-5 py-3 outline-none focus:border-spk-yellow transition-colors resize-none text-spk-dark placeholder:text-spk-steel/60" placeholder="О проекте" />
            <Button className="w-full rounded-none bg-spk-yellow hover:bg-yellow-400 text-spk-dark font-600 h-12">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-spk-dark text-slate-400 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO} alt="СПК" className="h-8 w-auto brightness-0 invert opacity-80" />
          <span className="text-sm">© 2026 СПК. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
