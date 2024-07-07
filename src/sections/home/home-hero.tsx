import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient, bgBlur } from 'src/theme/css';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.70 : 0.93),
    imgUrl: '/assets/background/overlay_4.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 5,
  lineHeight: 1,
  marginBottom: 20,
  letterSpacing: 5,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${64 / 23}rem`,
  fontFamily: "'Barlow', sans-serif",
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

type StyledPolygonProps = {
  opacity?: number;
  anchor?: 'left' | 'right';
};

const StyledPolygon = styled('div')<StyledPolygonProps>(
  ({ opacity = 1, anchor = 'left', theme }) => ({
    ...bgBlur({
      opacity,
      color: theme.palette.background.default,
    }),
    zIndex: 9,
    bottom: 0,
    height: 80,
    width: '50%',
    position: 'absolute',
    clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
    ...(anchor === 'left' && {
      left: 0,
      ...(theme.direction === 'rtl' && {
        transform: 'scale(-1, 1)',
      }),
    }),
    ...(anchor === 'right' && {
      right: 0,
      transform: 'scaleX(-1)',
      ...(theme.direction === 'rtl' && {
        transform: 'scaleX(1)',
      }),
    }),
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const isLight = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const transition = {
    repeatType: 'loop',
    ease: 'linear',
    duration: 60 * 4,
    repeat: Infinity,
  } as const;

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        my: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
    >
      <m.div variants={varFade().in}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
          }}
        >
          Грузоперевозки<br />
          по всему миру
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 7,
            repeat: Infinity,
          }}
        >
          С НАМИ ЭТО ПРОСТО
        </StyledTextGradient>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Dunyo Cargo является грузовым агентом и членом ассоциаций мирового масштаба.
          Оказываем полный комплекс транспортно-логистических услуг с 1994 г.
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack
          spacing={0.75}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ my: 3 }}
        >
          {/* <Rating readOnly value={4.95} precision={0.1} max={5} /> */}
          <Iconify icon="ep:location" width={24} style={{ color: "#f7840a" }} />
          <Typography variant="caption" sx={{ color: 'text.secondary',textAlign: 'center' }}>
            <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
              Республика Таджикистан, 734024, г. Душанбе, ул. Дружба Народов 62
            </Box>
          </Typography>
        </Stack>
        <Stack
          spacing={0.75}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ my: 3 }}
        >
          {/* <Rating readOnly value={4.95} precision={0.1} max={5} /> */}
          <Iconify icon="eos-icons:hourglass" width={24} style={{ color: "#f7840a" }} />
          <Typography variant="caption" sx={{ color: 'text.secondary' }} >
            <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
              Пн-Пт 9:00 - 18:00 GMT+5
            </Box>
          </Typography>
        </Stack>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ mb: 1 }}>
          <Stack alignItems="center" spacing={2}>
            <Button
              component="a"
              href="https://wa.me/+992446107004" // Replace with the actual phone number
              target="_blank"
              color="primary"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="logos:whatsapp-icon" width={24} />}
            >
              WhatsApp
            </Button>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Button
              color="error"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="icon-park-outline:email-push" width={24} />}
              target="_blank"
              rel="noopener"
              href="mailto:sales01@dunyocargo.com"
              sx={{ borderColor: 'text.primary' }}
            >
              Эл. почта
            </Button>
          </Stack>
        </Stack>
      </m.div>


      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <m.div variants={varFade().in}>
          <Typography variant="overline" sx={{ opacity: 0.4 }}>
            Отправка данным транспортом возможна.
          </Typography>
        </m.div>

        <Stack spacing={2} direction="row" justifyContent="center">
          {['noto:airplane', 'noto:train', 'noto:delivery-truck', 'noto:ship'].map((platform) => (
            <m.div key={platform} variants={varFade().in}>
              <Iconify icon={`${platform}`} width={40} />
            </m.div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
              <Grid xs={12} md={12}>
                {renderDescription}
              </Grid>
            </Grid>
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
