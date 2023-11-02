import React from 'react';
import { Grid } from '@mui/material';

import FormCandidateSectionList from './FormCandidateSectionList';
import CustomCard from '../../components/@ui/CustomCard';
import { CustomAlertInfo } from '../../components/@ui/CustomAlert';

import CustomPageHeader from '../../components/@ui/CustomPageHeader/CustomPageHeader';

import useApp from './hooks/useApp';

const FormCandidate = () => {
  const {
    app,
    schema,
    title,
    subtitle,
    alertTitle,
    alertSubtitle,
  } = useApp();

  return (
    <>{!app.send ? (
      <Grid container direction="column">
        <CustomPageHeader
          title={title}
          subtitle={subtitle}
        />
        <CustomCard>
          <CustomAlertInfo
            title={alertTitle}
            subtitle={alertSubtitle}
          />
          <FormCandidateSectionList
            schema={schema}
          />
        </CustomCard>
      </Grid>
    ) : null}</>
  )
};

export default FormCandidate;