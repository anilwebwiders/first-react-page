import React, {useContext} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accTitle, accTitle2, accDesc } from './Sidebar';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accTitle1 = useContext(accTitle);
  const accTitle21 = useContext(accTitle2);
  const accDesc1 = useContext(accDesc);



  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {accTitle1}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{accTitle21}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {accDesc1}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
