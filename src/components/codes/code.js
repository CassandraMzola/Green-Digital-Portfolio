import earthquake from './earthquake';

const Code = (code) => {
  switch (code) {
    case 'Earthquake':
      return earthquake;
    
    default:
      return '';
  }
};

export default Code;