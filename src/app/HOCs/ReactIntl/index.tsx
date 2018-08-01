import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import { State } from 'types';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
import messages from './translations';

type Props = {
  config: State['settingsReducer']['config'];
  children: React.ReactElement<any>;
};

class ReactIntl extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    addLocaleData([...locale_en, ...locale_ru]);
  }
  render() {
    const {
      config: { locale = 'en' }
    } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default connect((state: State) => ({
  config: state.settingsReducer.config
}))(ReactIntl);
