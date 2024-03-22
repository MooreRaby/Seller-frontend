import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { Table } from 'antd';

const StyledTable = styled(Table)`
  flex-grow: 1;
  
  .ant-table-content {
    padding: 0 26px;
  }
  
  .ant-table-cell {
    border-color: ${theme('theme', {
    light: 'rgba(226, 225, 225, 0.6)',
    dark: 'rgba(53, 69, 133, 0.6)',
    })} !important;
  }
  
  .ant-table-thead .ant-table-cell {
    padding: 28px 0 21px !important;
    background: var(--widget) !important;
    
    &:last-of-type {
      text-align: right;
    }
  }
  
  .ant-table-row:last-of-type .ant-table-cell {
    border-bottom: none !important;
  }
  
  .ant-table-tbody .ant-table-cell {
    padding: 35px 0 30px !important;
  }
`;

export default StyledTable