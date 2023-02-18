import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Spacer } from '../../common';
import Form from '../../ReceiptForm/Form';

interface SectionAccordianProps {
  section: FormSection;
}

export const SectionAccordian: React.FC<SectionAccordianProps> = ({
  section,
}) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{section}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Spacer spacing={1}>
          <Link component={RouterLink} to={`/form/${section}`}>
            {`Edit ${section} details`}
          </Link>
          <Form {...{ section, readOnly: true }} />
        </Spacer>
      </AccordionDetails>
    </Accordion>
  );
};
