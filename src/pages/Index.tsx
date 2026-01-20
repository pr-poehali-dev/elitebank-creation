import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">EliteBank</span>
          </div>
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
          <Button onClick={() => scrollToSection('account')} className="bg-primary hover:bg-primary/90">
            Личный кабинет
          </Button>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Банковские услуги премиум-класса
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              EliteBank — ваш надежный партнер в мире финансов. Индивидуальный подход, современные технологии и безопасность на высшем уровне.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" onClick={() => scrollToSection('account')}>
                Открыть счет
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-primary text-primary hover:bg-primary/10" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary transition-colors hover-scale">
              <CardHeader>
                <Icon name="Shield" className="text-primary mb-4" size={48} />
                <CardTitle>Безопасность</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Многоуровневая защита данных и средств клиентов
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/20 hover:border-primary transition-colors hover-scale">
              <CardHeader>
                <Icon name="TrendingUp" className="text-accent mb-4" size={48} />
                <CardTitle>Выгодные условия</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Конкурентные ставки по вкладам и кредитам
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/20 hover:border-primary transition-colors hover-scale">
              <CardHeader>
                <Icon name="Headphones" className="text-secondary mb-4" size={48} />
                <CardTitle>Поддержка 24/7</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Круглосуточная помощь персональных менеджеров
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О EliteBank</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы создали банк нового поколения, где технологии служат людям. С 2015 года мы помогаем клиентам достигать финансовых целей, предлагая инновационные решения и персональный сервис.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-muted-foreground">Активных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">₽50B+</div>
                <div className="text-muted-foreground">Активов под управлением</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
                <div className="text-muted-foreground">Время работы систем</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all hover-scale">
              <CardHeader>
                <Icon name="CreditCard" className="text-primary mb-4" size={40} />
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

            <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all hover-scale">
              <CardHeader>
                <Icon name="PiggyBank" className="text-accent mb-4" size={40} />
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

            <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all hover-scale">
              <CardHeader>
                <Icon name="Banknote" className="text-secondary mb-4" size={40} />
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

            <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all hover-scale">
              <CardHeader>
                <Icon name="ArrowLeftRight" className="text-primary mb-4" size={40} />
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

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Как открыть счет в EliteBank?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Открыть счет можно онлайн через личный кабинет на нашем сайте или в мобильном приложении. Процесс занимает всего 10 минут. Вам понадобится паспорт и номер телефона.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Какие документы нужны для получения кредита?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для оформления кредита необходим паспорт РФ и подтверждение дохода (справка 2-НДФЛ или выписка по счету). Решение по заявке принимается в течение 30 минут.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Как работает кэшбэк по картам?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Кэшбэк начисляется автоматически на счет карты в конце каждого месяца. Базовый кэшбэк — 1% на все покупки, повышенный до 10% — в категориях-партнерах (рестораны, АЗС, супермаркеты).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Застрахованы ли мои вклады?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, все вклады в EliteBank застрахованы государственной системой страхования вкладов на сумму до 1.4 млн рублей на каждого вкладчика.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:text-primary">
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

      <section id="contacts" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
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
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">8-800-555-35-35 (бесплатно по России)</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">support@elitebank.ru</p>
                  <p className="text-muted-foreground">info@elitebank.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                  <p className="text-muted-foreground">Время работы: Пн-Пт 9:00-20:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Clock" className="text-primary mt-1" size={24} />
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

      <section id="account" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Личный кабинет</h2>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
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
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Войти
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      <a href="#" className="text-primary hover:underline">Забыли пароль?</a>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card>
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
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Зарегистрироваться
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="text-primary" size={28} />
                <span className="text-xl font-bold">EliteBank</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Банк премиум-класса для тех, кто ценит качество и надежность
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Инвестиции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнеры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
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
