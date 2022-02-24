import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { StyledButton } from "./style";

interface IMaterialCardProps {
  avatar: string;
  name: string;
  position: string;
}

const MaterialCard = ({ avatar, name, position }: IMaterialCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            <img src={avatar} alt={`Avatar de ${name}`} width='40px' />
          </Avatar>
        }
        action={<IconButton aria-label='settings'></IconButton>}
        title={name}
        subheader={position}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Com grandes poderes vem grandes responsabilidades
        </Typography>
      </CardContent>
      <StyledButton  size='small'>Github</StyledButton>
    </Card>
  );
};

export default MaterialCard;
