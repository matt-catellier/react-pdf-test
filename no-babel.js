const React = require('react')
const ReactPDF = require('@react-pdf/renderer')

let currentKey = 0

const generateKey = () => {
  currentKey = currentKey + 1
  return currentKey
}

const e = (type, props, children) => {
  return React.createElement(type, {...props, key: generateKey()}, children);
}

const styles = ReactPDF.StyleSheet.create({
  document: {
    backgroundColor: 'white',
  },
  page: {
    flexDirection: 'column',
    fontFamily: 'Anton',
    padding: '20pt',
  },
  section: {
    margin: 10,
    flexGrow: 1
  },
  colorSection: {
    margin: 10,
    backgroundColor: 'tomato',
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    borderBottom: '1 solid black'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'space-between'
  },
  itemList: {
    borderTop: '1 solid black',
    margin: '10 0'
  }
});

const Text = (text) => e(ReactPDF.Text, {}, text)
const TextWrapper = ({text, style}) => e(ReactPDF.View, { style }, [Text(text)])

const ItemsHeader = () => e(
  ReactPDF.View, 
  {style: styles.item}, 
  [
    TextWrapper({text: 'Name', style: { width: '20%' }}),
    TextWrapper({text: 'Value', style: { width: '20%'}}),
    TextWrapper({text: 'Units', style: { width: '20%'}}),
    TextWrapper({text: 'Total', style: { width: '20%'}}),
  ]
)

const Page = e(
  ReactPDF.Page, 
  {size: "A4"}, 
  [ItemsHeader()]
)

const Document = e(ReactPDF.Document, { key: generateKey()}, [Page])

ReactPDF.render(
  Document,
  `${__dirname}/example-no-babel.pdf`
)