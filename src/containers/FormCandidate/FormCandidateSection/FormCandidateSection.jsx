import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@mui/material';

import FormCandidateField from '../FormCandidateField';
import SectionProvider from './SectionProvider';
import { CustomInformer } from '../../../components/@ui/CustomTypography';

import useApp from '../hooks/useApp';
import { SECTION_TYPES } from '../../../consts';

const FormCandidateSection = ({
  sectionType,
  sectionCode,
  schema,
}) => {
  const {
    handleAddSubSection,
    handleRemoveSubSection,
    handleEraseSubSection,
  } = useApp();

  const {
    title,
    info,
    subtitle,
    sections,
    repeatable,
    canAdd,
    addButtonLabel,
  } = schema[sectionCode];

  return (
    <React.Fragment>
      {title ? (
        <Grid item xs={12}>
          <Typography variant={repeatable ? 'h3' : 'h2'}>{title}</Typography>
        </Grid>
      ) : null}
      {info ? (
        <Grid item xs={12}>
          <CustomInformer>{info}</CustomInformer>
        </Grid>
      ) : null}
      <SectionProvider theme={sectionType}>
        <Grid container gap={2}>
          {Object.keys(sections).map((subsectionCode, index) => {
            const { items, title: subSectionTitle } = sections[subsectionCode];

            return <Grid key={subsectionCode} container spacing={2}>
              {repeatable && subSectionTitle && index === 0 ? (
                <>
                  <Grid item xs={9}>
                    <Typography variant="h3">{subSectionTitle}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'right' }}>
                    <Button
                      size="small"
                      variant="text"
                      color="button"
                      onClick={() => handleEraseSubSection(sectionCode)}
                    >
                      Стереть
                    </Button>
                  </Grid>
                </>
              ) : (
                subtitle ? (
                  canAdd && repeatable && index === Object.keys(sections).length - 1 ? (
                    <>
                      <Grid item xs={9}>
                        <Typography variant="h3">{subtitle}</Typography>
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: 'right' }}>
                        <Button
                          size="small"
                          variant="text"
                          color="button"
                          onClick={() => handleRemoveSubSection(sectionCode)}
                        >
                          Удалить
                        </Button>
                      </Grid>
                    </>
                  ) : (
                    <Grid item xs={12}>
                      <Typography variant="h3">{subtitle}</Typography>
                    </Grid>
                  )
                ) : null
              )}
              {Object.keys(items).map((fieldCode) => {
                const field = items[fieldCode];
                return (
                  !field.disabled ? (
                    <Grid item xs={12} md={field.col} key={fieldCode}>
                      <FormCandidateField
                        field={field}
                        fieldCode={fieldCode}
                        sectionCode={sectionCode}
                        subsectionCode={subsectionCode}
                      />
                    </Grid>
                  ) : null
                )
              })}
            </Grid>
          })}
          {canAdd ? <Button
            variant="contained"
            color="button"
            size="large"
            onClick={() => handleAddSubSection(sectionCode)}
            fullWidth
          >{addButtonLabel}</Button> : null}
        </Grid>
      </SectionProvider>
    </React.Fragment>
  );
};

export default FormCandidateSection;

const sectionTypes = Object.keys(SECTION_TYPES);

FormCandidateSection.propTypes = {
  sectionType: PropTypes.oneOf(sectionTypes).isRequired,
  sectionCode: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
};
