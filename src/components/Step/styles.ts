import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

export const Container = styled.div`
  margin-top: 2rem;
  .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
    font-family: Arial;
    font-size: 16px;
    font-weight: 500;
    margin-top: 14px;
  }
  .MuiStepLabel-label {
    color: #bebebe;
  }
  @media all and (max-width: 769px) {
    display: none;
  }
`;

export const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 8px)',
    right: 'calc(50% + 8px)',
  },
  active: {
    '& $line': {
      borderColor: '',
    },
  },
  completed: {
    '& $line': {
      borderColor: '',
    },
  },
  line: {
    borderColor: '#E8E8E8',
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);

export const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#E8E8E8',
    display: 'flex',
    height: 20,
    alignItems: 'center',
  },
  active: {
    color: '#61CB46',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  circleCompleted: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: '#61CB46',
  },
  completed: {
    color: '#61CB46',
    zIndex: 1,
    fontSize: 18,
  },
});
