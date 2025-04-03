import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useFormStore = defineStore('formStore', () => {
  const state = reactive({
    name: '',
    purpose: '',
    preset: '',
    documents: [
      {
        name: 'Client Invoice',
        selected: false,
        pipeline: 'PipelineClientInvoice',
        alias: 'client_invoices',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Due Date', key: 'DueDate', defaultValue: '', selected: false },
          { name: 'Payment Date', key: 'PaymentDate', defaultValue: '', selected: false },
          {
            name: 'Expected Payment Date',
            key: 'ExpectedPaymentDate',
            defaultValue: '',
            selected: false,
          },
          { name: 'Document Number', key: 'InvoiceNumber', defaultValue: '', selected: false },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Due Amount', key: 'DueAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue: '# Possible values : draft, due, paid, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Client Credit Note',
        selected: false,
        pipeline: 'PipelineClientCreditNote',
        alias: 'client_credit_notes',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Document Number', key: 'CreditNoteNumber', defaultValue: '', selected: false },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Remaining Amount', key: 'RemainingAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue: '# Possible values : draft, available, used, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Supplier Invoice',
        selected: false,
        pipeline: 'PipelineSupplierInvoice',
        alias: 'supplier_invoices',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Due Date', key: 'DueDate', defaultValue: '', selected: false },
          { name: 'Payment Date', key: 'PaymentDate', defaultValue: '', selected: false },
          {
            name: 'Expected Payment Date',
            key: 'ExpectedPaymentDate',
            defaultValue: '',
            selected: false,
          },
          { name: 'Document Number', key: 'InvoiceNumber', defaultValue: '', selected: false },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Due Amount', key: 'DueAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue: '# Possible values : draft, due, paid, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Supplier Credit Note',
        selected: false,
        pipeline: 'PipelineSupplierCreditNote',
        alias: 'supplier_credit_notes',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Document Number', key: 'CreditNoteNumber', defaultValue: '', selected: false },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Remaining Amount', key: 'RemainingAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue: '# Possible values : draft, available, used, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Sales Order',
        selected: false,
        pipeline: 'PipelineSalesOrder',
        alias: 'sales_orders',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Due Date', key: 'DueDate', defaultValue: '', selected: false },
          { name: 'Document Number', key: 'SalesOrderNumber', defaultValue: '', selected: false },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Remaining Amount', key: 'RemainingAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue:
              '# Possible values : draft, sent, accepted, refused, expired, partiallyinvoiced, invoiced, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Purchase Order',
        selected: false,
        pipeline: 'PipelinePurchaseOrder',
        alias: 'purchase_orders',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Due Date', key: 'DueDate', defaultValue: '', selected: false },
          {
            name: 'Document Number',
            key: 'PurchaseOrderNumber',
            defaultValue: '',
            selected: false,
          },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Remaining Amount', key: 'RemainingAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue:
              '# Possible values : draft, sent, accepted, refused, expired, partiallyinvoiced, invoiced, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Quotes',
        selected: false,
        pipeline: 'PipelineClientQuote',
        alias: 'client_quotes',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Due Date', key: 'DueDate', defaultValue: '', selected: false },
          {
            name: 'Document Number',
            key: 'ProformaInvoiceNumber',
            defaultValue: '',
            selected: false,
          },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Remaining Amount', key: 'RemainingAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue:
              '# Possible values : draft, sent, accepted, refused, expired, partiallyinvoiced, invoiced, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
      {
        name: 'Proforma Invoices',
        selected: false,
        pipeline: 'PipelineProformaInvoice',
        alias: 'proforma_invoices',
        fields: [
          {
            name: 'RawData Field',
            key: 'FieldName',
            defaultValue: 'SelectNestedField("RawData";"your_field_here")',
            selected: false,
          },
          { name: 'Condition', key: 'condition', defaultValue: '', selected: false },
          { name: 'Issue Date', key: 'IssueDate', defaultValue: '', selected: false },
          { name: 'Due Date', key: 'DueDate', defaultValue: '', selected: false },
          {
            name: 'Document Number',
            key: 'ProformaInvoiceNumber',
            defaultValue: '',
            selected: false,
          },
          { name: 'Client Name', key: 'CounterPartyName', defaultValue: '', selected: false },
          { name: 'Client Id', key: 'CounterPartyId', defaultValue: '', selected: false },
          { name: 'Currency', key: 'Currency', defaultValue: '', selected: false },
          { name: 'Total Amount', key: 'TotalAmount', defaultValue: '', selected: false },
          { name: 'Remaining Amount', key: 'RemainingAmount', defaultValue: '', selected: false },
          { name: 'Taxes Amount', key: 'TaxesAmount', defaultValue: '', selected: false },
          {
            name: 'Status',
            key: 'Status',
            defaultValue:
              '# Possible values : draft, sent, accepted, refused, expired, partiallyinvoiced, invoiced, cancelled, deleted',
            selected: false,
          },
          { name: 'Label', key: 'Label', defaultValue: '', selected: false },
          {
            name: 'Availability for TRY',
            key: 'AvailableForCashflow',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AR',
            key: 'AvailableForCashCollect',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
          {
            name: 'Availability for AP',
            key: 'AvailableForAccountsPayable',
            defaultValue: 'If(condition; true; false)',
            selected: false,
          },
        ],
      },
    ],
  })

  function $reset() {
    state.preset = 'No Preset'
    state.documents.forEach((doc) => {
      doc.selected = false
      doc.fields.forEach((field) => (field.selected = false))
    })
  }

  function resetFields() {
    state.documents.forEach((doc) => doc.fields.forEach((field) => (field.selected = false)))
  }

  function applyPreset() {
    resetFields()

    switch (state.preset) {
      case 'Available':
        state.documents.forEach((doc) => {
          doc.fields.forEach((field) => {
            if (field.key.includes('Available')) field.selected = true
          })
        })
        break;

      case 'Date Sync Rule':
        state.documents.forEach((doc) => {
          doc.fields.forEach((field) => {
            if (field.key === 'condition') {
              field.defaultValue = `IsLaterThan(IssueDate; Date("${new Date().toISOString().split('T')[0]}"))`
              field.selected = true
            }
            if (field.key.includes('Available')) field.selected = true
          })
        })
        break;
      
      case 'Add field to Label':
        state.documents.forEach((doc) => {
          doc.fields.forEach((field) => {
            if (field.name === 'RawData Field') field.selected = true
            if (field.name === 'Label') {
              field.defaultValue = `ConcatWithSeparator("-";Label;FieldName)`
              field.selected = true
            }
          })
        })
        break;
    }
  }

  return { state, $reset, applyPreset }
})
