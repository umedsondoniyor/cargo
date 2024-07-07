// routes
import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  // {
  //   title: 'Home',
  //   icon: <Iconify icon="solar:home-2-bold-duotone" />,
  //   path: '/',
  // },
  // {
  //   title: 'Components',
  //   icon: <Iconify icon="solar:atom-bold-duotone" />,
  //   path: paths.components,
  // },
  {
    title: 'Продукты',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: '/pages',
    children: [
      {
        subheader: 'Глобальные перевозки',
        items: [
          { title: 'Авиаперевозки', path: paths.page403 },
          { title: 'Чартерные перевозки', path: paths.page403 },
          { title: 'Автомобильные перевозки', path: paths.page403 },
          { title: 'Сборные перевозки', path: paths.page403 },
          { title: 'Мультимодальные перевозки', path: paths.page403 },
        ],
      },
      {
        subheader: 'Специальные грузы',
        items: [
          { title: 'Перевозка опасных грузов', path: paths.page403 },
          { title: 'Перевозка живых животных', path: paths.page403 },
          { title: 'Перевозка негабаритных и тяжелых грузов', path: paths.page403 },
          { title: 'Перевозка скоропортящихся грузов', path: paths.page403 },
          { title: 'Репатриация человеческих останков', path: paths.page403 },
        ],
      },
      {
        subheader: 'Логистика и цепи поставок',
        items: [
          { title: 'Проектные грузоперевозки', path: paths.page403 },
          { title: 'Складское хранение грузов', path: paths.page403 },
        ],
      },
      {
        subheader: 'Таможенно-брокерские услуги',
        items: [
          { title: 'Таможенно-брокерские услуги и международный транзит', path: paths.page403 },
          { title: 'Выставки и ярмарки', path: paths.page403 },
        ],
      },
      {
        subheader: 'Международные переезды',
        items: [
          { title: 'Офисный переезд', path: paths.page403 },
          { title: 'Перевозка личных вещей и автомобилей', path: paths.page403 },
          { title: 'Перевозка выставочных экспонатов', path: paths.page403 },
        ],
      },
      {
        subheader: 'Внутренние перевозки',
        items: [
          { title: 'Внутренние перевозки в странах СНГ', path: paths.page403 },
        ],
      },
    ]
  },
  {
    title: 'Сотрудничество',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: '/pages',
    children:[
      {
        subheader: 'Сотрудничество',
        items: [
          { title: 'Транспортные компании', path: paths.page403 },
          { title: '3PL и 4PL провайдеры', path: paths.page403 },
        ]
      }
    ]
  },
  {
    title: 'Компания',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: '/pages',
    children:[
      {
        subheader: 'Компания',
        items: [
          { title: 'Наша компания', path: paths.page403 },
          { title: 'Наши видение и миссия', path: paths.page403 },
          { title: 'Аккредитация', path: paths.page403 },
          { title: 'Пресса, новости', path: paths.page403 },
          { title: 'Блог', path: paths.page403 },
        ]
      }
    ]
  },
  // {
  //   title: 'Продукты',
  //   path: '/pages',
  //   icon: <Iconify icon="solar:file-bold-duotone" />,
  //   children: [
  //     {
  //       subheader: 'Other',
  //       items: [
  //         { title: 'About us', path: paths.about },
  //         { title: 'Contact us', path: paths.contact },
  //         { title: 'FAQs', path: paths.faqs },
  //         { title: 'Pricing', path: paths.pricing },
  //         { title: 'Payment', path: paths.payment },
  //         { title: 'Maintenance', path: paths.maintenance },
  //         { title: 'Coming Soon', path: paths.comingSoon },
  //       ],
  //     },
  //     {
  //       subheader: 'Concepts',
  //       items: [
  //         { title: 'Shop', path: paths.product.root },
  //         { title: 'Product', path: paths.product.demo.details },
  //         { title: 'Checkout', path: paths.product.checkout },
  //         { title: 'Posts', path: paths.post.root },
  //         { title: 'Post', path: paths.post.demo.details },
  //       ],
  //     },
  //     {
  //       subheader: 'Auth Demo',
  //       items: [
  //         { title: 'Login', path: paths.authDemo.classic.login },
  //         { title: 'Register', path: paths.authDemo.classic.register },
  //         {
  //           title: 'Forgot password',
  //           path: paths.authDemo.classic.forgotPassword,
  //         },
  //         { title: 'New password', path: paths.authDemo.classic.newPassword },
  //         { title: 'Verify', path: paths.authDemo.classic.verify },
  //         { title: 'Login (modern)', path: paths.authDemo.modern.login },
  //         { title: 'Register (modern)', path: paths.authDemo.modern.register },
  //         {
  //           title: 'Forgot password (modern)',
  //           path: paths.authDemo.modern.forgotPassword,
  //         },
  //         {
  //           title: 'New password (modern)',
  //           path: paths.authDemo.modern.newPassword,
  //         },
  //         { title: 'Verify (modern)', path: paths.authDemo.modern.verify },
  //       ],
  //     },
  //     {
  //       subheader: 'Error',
  //       items: [
  //         { title: 'Page 403', path: paths.page403 },
  //         { title: 'Page 404', path: paths.page404 },
  //         { title: 'Page 500', path: paths.page500 },
  //       ],
  //     },
  //     {
  //       subheader: 'Dashboard',
  //       items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
  //     },
  //   ],
  // },
  {
    title: 'Карьера',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.page403,
  },
  {
    title: 'Контакты',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.page403,
  },
];
