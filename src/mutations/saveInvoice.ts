import { gql } from '@apollo/client';

export const SAVE_INVOICE = gql`
  mutation SaveInvoice($input: InvoiceInput!) {
    saveInvoice(input: $input) {
      id
      companyName
      companyEmail
      clientName
      clientEmail
      invoiceDate
      items {
        name
        quantity
        price
      }
      subtotal
      tax
      total
    }
  }
`;
