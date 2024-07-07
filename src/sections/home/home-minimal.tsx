import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'emojione:globe-showing-europe-africa',
    title: 'Глобальные перевозки',
    description: 'Единое окно - как инструмент оптимизации Вашей логистической цепочки. Глобальная сеть партнеров позволяет нам доставить все типы грузов в любую точку мира всеми видами транспорта.',
  },
  {
    icon: 'emojione:package',
    title: 'Специальные грузы',
    description:
      'Специальные грузы требуют срочной доставки и особых условий перевозки. Dunyo Cargo квалифицирована для работы с такими грузами и часто участвует в сложных проектах.',
  },
  {
    icon: 'noto:gear',
    title: 'Логистика и цепи поставок',
    description: 'Dunyo Cargo предлагает специализированные, индивидуальные и конкурентоспособные логистические решения. Мы предоставляем услуги 4PL и LLP, а также управление грузоперевозками, транспортом и цепочками поставок.',
  },
  {
    icon: 'emojione-v1:customs',
    title: 'Таможенно-брокерские услуги',
    description: 'Dunyo Cargo - ваш помощник по таможенному декларированию грузов. Мы, как член IFCBA и глобальной сети таможенных представителей, имеем доступ к базе данных всех стран.',
  },
  {
    icon: 'fxemoji:worldmap',
    title: 'Международные переезды',
    description:
      'Dunyo Cargo предлагает решение для международных переездов по работе или личным делам. Наши менеджеры организуют каждый аспект перевозки вашего имущества, обеспечивая безопасность и комфорт в новом месте.',
  },
  {
    icon: 'vscode-icons:file-type-cargo',
    title: 'Внутренние перевозки',
    description: 'Dunyo Cargo предлагает надежные внутренние перевозки грузов от двери до двери. Мы обеспечиваем полный спектр услуг для сборных и полных грузов.',
  },
];
    const bannerImage = (
      <Box
        component="img"
        borderRadius={3}
        src="/assets/background/dunyocargo1.jpg"
        sx={{ width: 1000, cursor: 'pointer',my:3}}
      />
    );

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 5 },
      }}
    >
      
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 5 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h4">
            НАШИ ПРОДУКТЫ
          </Typography>
        </m.div>
        <m.div variants={varFade().inDown}>
          <Typography component="div" variant="primary" sx={{ color: 'text.primary', mt:-2.5 }}>
            передовые логистические решения
          </Typography>
          {bannerImage}
        </m.div>

      </Stack>

      <Box
        gap={{ xs: 3, lg: 3 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gridTemplateRows={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(7, 7),
                ...((index === 1 || index === 4) && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
              }}
            >
              <Iconify icon={card.icon}  width={80} />

              <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
