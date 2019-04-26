import { JavascriptLanguage } from '../api/Language';
import { RequestFormUIProps, SubmittedData } from '../api';

export const basicProps: RequestFormUIProps = {
  selectedMethodPath: '',
  content: {
    language: 'javascript' as JavascriptLanguage,
    requestArgs: 'return {};',
  },
  onSubmit: (data: SubmittedData) => {
    // tslint:disable-next-line
    console.log('the data from RequestForm has been submitted', data);
  },
};
