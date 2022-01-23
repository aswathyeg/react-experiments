import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function CenteredTabs() {
    const history = useHistory();
    const clickLogo = () => {
        history.push('/calculator');
    }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '150%', bgcolor: 'background.paper' }}>
        <Typography onClick={clickLogo}>bodhii

        </Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}
