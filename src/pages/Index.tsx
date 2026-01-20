import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Logo from '@/components/Logo';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size={40} />
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground/80 hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors">
              О банке
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground/80 hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('account')} 
            className="bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] hover:from-[#A52A40] hover:to-[#FFC700] text-white font-semibold shadow-lg"
          >
            Личный кабинет
          </Button>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8B2E3E]/10 via-transparent to-[#FFD700]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8B2E3E] via-[#A52A40] to-[#FFD700] bg-clip-text text-transparent">
              Банковские услуги премиум-класса
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              EliteBank — ваш надежный партнер в мире финансов. Индивидуальный подход, современные технологии и безопасность на высшем уровне.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] hover:from-[#A52A40] hover:to-[#FFC700] text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all" 
                onClick={() => scrollToSection('account')}
              >
                Открыть счет
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg border-2 border-[#8B2E3E] text-[#8B2E3E] hover:bg-[#8B2E3E]/5 font-semibold" 
                onClick={() => scrollToSection('services')}
              >
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover-scale bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B2E3E] to-[#FFD700] flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Безопасность</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Многоуровневая защита данных и средств клиентов
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover-scale bg-gradient-to-br from-white to-amber-50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#8B2E3E] flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Выгодные условия</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Конкурентные ставки по вкладам и кредитам
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover-scale bg-gradient-to-br from-white to-rose-50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A52A40] to-[#FFD700] flex items-center justify-center mb-4">
                  <Icon name="Headphones" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Поддержка 24/7</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Круглосуточная помощь персональных менеджеров
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] bg-clip-text text-transparent">О EliteBank</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы создали банк нового поколения, где технологии служат людям. С 2015 года мы помогаем клиентам достигать финансовых целей, предлагая инновационные решения и персональный сервис.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-scale">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#8B2E3E] to-[#A52A40] bg-clip-text text-transparent mb-2">500K+</div>
                <div className="text-muted-foreground font-medium">Активных клиентов</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-scale">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2">₽50B+</div>
                <div className="text-muted-foreground font-medium">Активов под управлением</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-scale">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#A52A40] to-[#FFD700] bg-clip-text text-transparent mb-2">99.9%</div>
                <div className="text-muted-foreground font-medium">Время работы систем</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] bg-clip-text text-transparent">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all hover-scale border-none shadow-md bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B2E3E] to-[#FFD700] flex items-center justify-center mb-4">
                  <Icon name="CreditCard" className="text-white" size={28} />
                </div>
                <CardTitle>Банковские карты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Дебетовые и кредитные карты с кэшбэком до 10%</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Бесплатное обслуживание
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Премиум дизайн
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Бонусы партнеров
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover-scale border-none shadow-md bg-gradient-to-br from-white to-amber-50">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#8B2E3E] flex items-center justify-center mb-4">
                  <Icon name="PiggyBank" className="text-white" size={28} />
                </div>
                <CardTitle>Вклады</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Выгодные депозиты со ставкой до 12% годовых</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Гибкие условия
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Капитализация
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Страхование вкладов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover-scale border-none shadow-md bg-gradient-to-br from-white to-rose-50">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A52A40] to-[#FFD700] flex items-center justify-center mb-4">
                  <Icon name="Banknote" className="text-white" size={28} />
                </div>
                <CardTitle>Кредиты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Потребительские кредиты от 5.9% годовых</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Быстрое одобрение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Онлайн-заявка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Без скрытых комиссий
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover-scale border-none shadow-md bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B2E3E] via-[#A52A40] to-[#FFD700] flex items-center justify-center mb-4">
                  <Icon name="ArrowLeftRight" className="text-white" size={28} />
                </div>
                <CardTitle>Переводы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Мгновенные переводы по России и миру</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    0% комиссия внутри банка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Валютные операции
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Безопасность платежей
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] bg-clip-text text-transparent">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-none rounded-xl px-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как открыть счет в EliteBank?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Открыть счет можно онлайн через личный кабинет на нашем сайте или в мобильном приложении. Процесс занимает всего 10 минут. Вам понадобится паспорт и номер телефона.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none rounded-xl px-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline">
                  Какие документы нужны для получения кредита?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для оформления кредита необходим паспорт РФ и подтверждение дохода (справка 2-НДФЛ или выписка по счету). Решение по заявке принимается в течение 30 минут.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none rounded-xl px-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как работает кэшбэк по картам?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Кэшбэк начисляется автоматически на счет карты в конце каждого месяца. Базовый кэшбэк — 1% на все покупки, повышенный до 10% — в категориях-партнерах (рестораны, АЗС, супермаркеты).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none rounded-xl px-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline">
                  Застрахованы ли мои вклады?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, все вклады в EliteBank застрахованы государственной системой страхования вкладов на сумму до 1.4 млн рублей на каждого вкладчика.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none rounded-xl px-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как связаться с поддержкой?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Наша служба поддержки работает 24/7. Вы можете позвонить на горячую линию 8-800-555-35-35, написать в чат на сайте или в мобильном приложении, либо обратиться в любое отделение банка.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] bg-clip-text text-transparent">Контакты</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="bg-input" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-input" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Ваш вопрос" className="bg-input" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] hover:from-[#A52A40] hover:to-[#FFC700] text-white font-semibold shadow-lg">
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white hover-scale">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B2E3E] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">8-800-555-35-35 (бесплатно по России)</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white hover-scale">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#8B2E3E] flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">support@elitebank.ru</p>
                  <p className="text-muted-foreground">info@elitebank.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white hover-scale">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A52A40] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                  <p className="text-muted-foreground">Время работы: Пн-Пт 9:00-20:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white hover-scale">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B2E3E] via-[#A52A40] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">График работы</h3>
                  <p className="text-muted-foreground">Онлайн-банкинг: 24/7</p>
                  <p className="text-muted-foreground">Поддержка: круглосуточно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="account" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] bg-clip-text text-transparent">Личный кабинет</h2>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle>Войти в аккаунт</CardTitle>
                    <CardDescription>Введите данные для входа в личный кабинет</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Email или телефон</Label>
                      <Input id="login-email" placeholder="your@email.com" className="bg-input" />
                    </div>
                    <div>
                      <Label htmlFor="login-password">Пароль</Label>
                      <Input id="login-password" type="password" placeholder="••••••••" className="bg-input" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] hover:from-[#A52A40] hover:to-[#FFC700] text-white font-semibold shadow-lg">
                      Войти
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      <a href="#" className="bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] bg-clip-text text-transparent hover:underline font-medium">Забыли пароль?</a>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle>Создать аккаунт</CardTitle>
                    <CardDescription>Заполните данные для регистрации</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="reg-name">Полное имя</Label>
                      <Input id="reg-name" placeholder="Иван Иванов" className="bg-input" />
                    </div>
                    <div>
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" type="email" placeholder="your@email.com" className="bg-input" />
                    </div>
                    <div>
                      <Label htmlFor="reg-phone">Телефон</Label>
                      <Input id="reg-phone" placeholder="+7 (999) 123-45-67" className="bg-input" />
                    </div>
                    <div>
                      <Label htmlFor="reg-password">Пароль</Label>
                      <Input id="reg-password" type="password" placeholder="••••••••" className="bg-input" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#8B2E3E] to-[#FFD700] hover:from-[#A52A40] hover:to-[#FFC700] text-white font-semibold shadow-lg">
                      Зарегистрироваться
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo size={32} />
              <p className="text-sm text-muted-foreground">
                Банк премиум-класса для тех, кто ценит качество и надежность
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Инвестиции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Партнеры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-[#8B2E3E] transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 EliteBank. Все права защищены. Генеральная лицензия Банка России № 1234</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;