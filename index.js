import React from 'react'
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './MyDocument'

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);