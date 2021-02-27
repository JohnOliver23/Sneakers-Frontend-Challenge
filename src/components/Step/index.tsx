import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core/';
import { Container, useQontoStepIconStyles, QontoConnector } from './styles';

import { StepIconProps } from '@material-ui/core/StepIcon';
import clsx from 'clsx';
// import { Container } from './styles';
interface StepProps {
  steps: string[];
  activeStep: number;
}
function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={classes.circleCompleted} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

const StepComponent: React.FC<StepProps> = ({ steps, activeStep }) => {
  return (
    <Container>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel
              style={{ fontFamily: 'Arial', fontSize: '66px' }}
              StepIconComponent={QontoStepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default StepComponent;
