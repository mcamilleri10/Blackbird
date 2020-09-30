import React from 'react';
import { requestQuote } from '../../actions/companies/company_actions';
import { requestCompanyInfo } from '../../util/companies/companies_api_util';

export default class Company extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestQuote, requestCompanyInfo } = this.props;
    const companyId = this.props.match.params.companyId;
    requestQuote(companyId).then(() => requestCompanyInfo(companyId));
  }

  componentDidUpdate(prevProps) {
    // debugger
    const { requestQuote, requestCompanyInfo } = this.props;
    const companyId = this.props.match.params.companyId;
    if (prevProps.match.params.companyId !== companyId) {
      requestQuote(companyId).then(() => requestCompanyInfo(companyId));
    }
  }


  render() {
    return (
      <div className='company-left'>
        company show placeholder
      </div>
    );
  }
}