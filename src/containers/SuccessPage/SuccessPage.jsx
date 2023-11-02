import { Button, Grid, IconButton, Link, Typography } from "@mui/material";
import CustomPageHeader from "../../components/@ui/CustomPageHeader";
import image_hotels from '../../assets/img/image_hotels.png';
import { useSelector } from "react-redux";
import { Stack } from "@mui/system";
import { HeadHunterIcon, TelegramIcon, VKIcon, YouTubeIcon } from "../../assets/icons";

const SocialLink = ({ href, icon }) => (
  <Link href={href} target="_blank">
    <IconButton size="large">
      {icon}
    </IconButton>
  </Link>
);

const SuccessPage = () => {
  const title = 'Спасибо!';
  const subtitle = 'Ваша заявка успешно отправлена, и вскоре будет обработана специалистами. Мы будем рады видеть Вас в нашей компании!';
  const { app } = useSelector(state => state);

  const handleClick = () => {
    window.location.reload();
  }

  return (
    <>
      {app.send ? (
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <CustomPageHeader
            title={title}
            subtitle={subtitle}
          />
          <Grid
            container
            direction="column"
            alignItems="center"
            gap={3}
          >
            <img
              width={300}
              src={image_hotels}
              alt="Спасибо! Ваша заявка отправлена!"
            />
            <Typography variant="caption">Подпишитесь</Typography>
            <Stack direction="row" spacing={1}>
              <SocialLink
                href="https://vk.com/kp_resort?roistat_visit=623292"
                icon={<VKIcon />}
              />
              <SocialLink
                href="https://www.youtube.com/krasnayapolyanaresort?roistat_visit=623292"
                icon={<YouTubeIcon />}
              />
              <SocialLink
                href="https://t.me/kp_resort?roistat_visit=623292"
                icon={<TelegramIcon />}
              />
              <SocialLink
                href="https://krasnaya-polyana.hh.ru/employer/1124351"
                icon={<HeadHunterIcon />}
              />
            </Stack>
            <Typography variant="h3" width={304} textAlign="center">
              Мы всегда с вами на расстоянии всего одного клика
            </Typography>
            <Button onClick={handleClick}>Заполнить форму ещё раз</Button>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default SuccessPage;